export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 max-w-screen-xl mx-auto">
      <h1 className="about-page-title">About Page</h1>
      <h2 className="about-page-subtitle">The place for all of my misc stuff</h2>
      <div className="about-page">
        <div className="about-page-content">
          <div className="about-page-content-item item60 item-gradient">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
            </p>
          </div>
          <div className="about-page-content-item item40">
            <p>
              Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
            </p>
          </div>
        </div>

        <div className="about-page-content">
          <div className="about-page-content-item item40">
            <p>
              Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
            </p>
          </div>
          <div className="about-page-content-item item60 item-gradient">
            <p>
              Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
            </p>
          </div>
        </div>


        <div className="about-page-content">
          <div className="about-page-content-item itemnormal">
            <p>
              Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue.
            </p>
          </div>
          <div className="about-page-content-item itemnormal">
            <p>
              Nunc pellentesque. Sed vestibulum. Proin rutrum augue.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}