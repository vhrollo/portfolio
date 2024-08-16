/*
  name: Universe
  author: Leonus

	converted to typescript by: me :D
*/



export function dark(): void {
	console.log("dark");
  window.requestAnimationFrame = window.requestAnimationFrame; 

  let width: number, height: number, numStars: number;
  let context: CanvasRenderingContext2D | null;
  const stars: Star[] = [];
  const starDensity = 0.05;
  const universeCanvas = document.getElementById("universe") as HTMLCanvasElement;
  const starColor = "226,225,224";
  let showComets = true;

  function resizeCanvas(): void {
    width = window.innerWidth;
    height = window.innerHeight;
    numStars = 0.216 * width;
    universeCanvas.setAttribute("width", width.toString());
    universeCanvas.setAttribute("height", height.toString());
  }

	class Star {
		isGiant: boolean = false;
		isComet: boolean = false;
		x: number = 0;
		y: number = 0;
		radius: number = 0;
		dx: number = 0;
		dy: number = 0;
		opacity: number = 0;
		opacityThreshold: number = 0;
		fadeSpeed: number = 0;
		fadingOut: boolean | null = null;
		fadingIn: boolean = true;
		remade: boolean = false;

    constructor() {
      this.reset();
    }

		reset(): void {
			this.isGiant = this.randomChance(3);
			this.isComet = !this.isGiant && showComets && this.randomChance(10) && this.remade; // Ensure `isComet` is a boolean
			this.x = this.randomRange(0, width - 10);
			this.y = this.randomRange(0, height);
			this.radius = this.randomRange(1.1, 2.6);
			this.dx = this.randomRange(starDensity, 6 * starDensity) +
				(this.isComet ? starDensity * this.randomRange(50, 120) : 0.1); // Ensure that all operations involve numbers
			this.dy = -this.randomRange(starDensity, 6 * starDensity) -
				(this.isComet ? starDensity * this.randomRange(50, 120) : 0.1); // Same here
			this.opacity = 0;
			this.opacityThreshold = this.randomRange(0.2, 1 - 0.4 * Number(this.isComet));
			this.fadeSpeed = this.randomRange(0.0005, 0.002) + 0.001 * Number(this.isComet);
			this.fadingOut = null;
			this.fadingIn = true;
			this.remade = true;
		}

    randomChance(likelihood: number): boolean {
      return Math.floor(Math.random() * 1000) + 1 < likelihood * 10;
    }

    randomRange(min: number, max: number): number {
      return Math.random() * (max - min) + min;
    }

    fadeIn(): void {
      if (this.fadingIn) {
        this.fadingIn = !(this.opacity > this.opacityThreshold);
        this.opacity += this.fadeSpeed;
      }
    }

    fadeOut(): void {
      if (this.fadingOut) {
        this.fadingOut = !(this.opacity < 0);
        this.opacity -= this.fadeSpeed / 2;
        if (this.x > width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    }

    draw(): void {
      if (!context) return;

      context.beginPath();
      if (this.isGiant) {
        context.fillStyle = `rgba(180,184,240,${this.opacity})`;
        context.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.isComet) {
        context.fillStyle = `rgba(${starColor},${this.opacity})`;
        context.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);
        for (let i = 0; i < 30; i++) {
          context.fillStyle = `rgba(${starColor},${this.opacity - (this.opacity / 20) * i})`;
          context.rect(this.x - (this.dx / 4) * i, this.y - (this.dy / 4) * i - 2, 2, 2);
          context.fill();
        }
      } else {
        context.fillStyle = `rgba(226,225,142,${this.opacity})`;
        context.rect(this.x, this.y, this.radius, this.radius);
      }
      context.closePath();
      context.fill();
    }

    move(): void {
      this.x += this.dx;
      this.y += this.dy;
      if (!this.fadingOut && (this.x > width - width / 4 || this.y < 0 - height / 4)) {
        this.fadingOut = true;
      }
    }
  }

  function drawStars(): void {
    if (!context) return;
		context.fillStyle = "rgba(23,22,28,1)";
    context.fillRect(0, 0, width, height);
    for (let star of stars) {
      star.move();
      star.fadeIn();
      star.fadeOut();
      star.draw();
    }
  }

  function init(): void {
    context = universeCanvas.getContext("2d");
    for (let i = 0; i < numStars; i++) {
      stars[i] = new Star();
    }
    drawStars();
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, false);

  init();
  (function animate() {
    drawStars();
    window.requestAnimationFrame(animate);
  })();
}
