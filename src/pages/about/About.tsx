import "./about.scss";
const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h3>
          Hello I am <span>Asadov Elbotir</span>
        </h3>
        <div className="blog flex-class">
          <div className="myImages">
            <img src="./Gradient1.svg" className="grad" alt="Eror" />
            <img src="Me.svg" className="me" alt="Eror" />
          </div>
          <div className="blog-text">
            <h4>A Programmer who</h4>
            <h1>
              Judges a book by its <span>cover</span>
              <b>...</b>
            </h1>
            <p>Because if the cover does not impress you what else can?</p>
          </div>
        </div>
        <div className="about-bottom">
          <h1>I'm a Frontend Developer.| </h1>
          <h5>
            Currently, I'm a Frontend Developer at{" "}
            <b>
              <img src="./facebook.svg" alt="Eror" /> Facebook
            </b>
            ,
          </h5>
          <p>
            I am a frontend junior developer. I am a graduate of Na’jot Ta’lim.
            I will make your work successful. I am 15 years old. I also have
            sites that have made me quite a lot. If you choose me, you will not
            be wrong.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
