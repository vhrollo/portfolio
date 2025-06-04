# based on https://bun.sh/guides/ecosystem/docker 
# along with some comments for my self

###############################################################################
# 1) Base image: use Bun on Alpine
###############################################################################
FROM oven/bun:alpine AS base
WORKDIR /usr/src/app


###############################################################################
# 2) Install stage (dev + prod)
#
#    - We create two “temp” folders: one for dev deps, one for prod deps.
#    - In the “install” stage, we copy exactly the files bun needs (package.json + bun.lock),
#      run `bun install --frozen-lockfile` (to populate dev deps), then run bun install again
#      with --production (to populate prod deps). This keeps them separate.
###############################################################################
FROM base AS install

# 2a) Dev dependencies (install everything)
RUN mkdir -p /temp/dev
COPY package.json bun.lock /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# 2b) Prod dependencies only
RUN mkdir -p /temp/prod
COPY package.json bun.lock /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production


###############################################################################
# 3) Prerelease stage (build & tests)
#
#    - Copy in the “dev” node_modules so you can run your build (and tests if you want).
#    - Copy the rest of your source files.
#    - Set NODE_ENV=production so that your bundler (Next.js) runs in prod‐mode.
#    - Run `bun run test' (uncomment)
#    - Run `bun run build` 
###############################################################################
FROM base AS prerelease

# Bring in dev node_modules (so that `bun run build` sees all dev + prod deps)
COPY --from=install /temp/dev/node_modules ./node_modules

# Copy your entire project (source, configs, etc.)
# Assumes you have a .dockerignore that excludes node_modules, .next, etc.
COPY . .

# Tell Next/Bun that we’re “production” 
ENV NODE_ENV=production

# Eventually test
# RUN bun test

# Build your Next.js app (this will emit a `.next/` folder)
RUN bun run build


###############################################################################
# 4) Final “release” image (only prod deps + built output)
#
#    - We start again from the same “base” (oven/bun:alpine).
#    - Copy only the “production” node_modules from /temp/prod.
#    - Copy all built files + source from the prerelease stage—BUT since
#      /temp/prod/node_modules was copied already, it will not be overwritten.
#    - Switch to a non-root user and expose port 3000.
###############################################################################
FROM base AS release
WORKDIR /usr/src/app

# Pull in JUST the production node_modules
COPY --from=install /temp/prod/node_modules ./node_modules

# Copy everything that the “prerelease” built (including .next/ + pages/ + public/, etc.).
# Because we already copied prod/node_modules above, any dev/node_modules from prerelease
# will not override it (assuming you didn’t accidentally leave a node_modules folder
# in your built files).
COPY --from=prerelease /usr/src/app ./

# For security: run as Bun’s unprivileged user
USER bun

# If your Next.js listens on 3000 (the default), expose it
EXPOSE 3000/tcp

# Start your Next.js app in “production” mode
ENTRYPOINT ["bun", "next", "start"]
