import "./styles.css";
import Helmet from "react-helmet";
import LinkContainer from "./Components/LinkContainer";
import Footer from "./Components/Footer";
export default function App() {
  return (
    <>
      <Helmet>
        <title>Digital Bussiness Card</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
        />
      </Helmet>

      <main className="container">
        <img
          src="https://randomuser.me/api/portraits/women/11.jpg"
          alt="developer"
          className="developer"
        />

        <h2 className="developer-name">Laura Smith</h2>
        <p>
          <span className="designation">Frontend Developer</span>
        </p>
        <small> laurasmith.website </small>
        <br />
        <br />
        <LinkContainer />

        <h6>About</h6>
        <p className="about-para">
          I am a frontend developer with aparticular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices,and am always looking for new things to learn.
        </p>

        <h6>Interests</h6>
        <p className="interests-para">
          Food expert.Music scholar.Reader.Internet fanatic .Cake
          buff.Enterpreneur.Travel geek.Pop culture ninja .Coffee fanatic
        </p>
        <Footer />
      </main>
    </>
  );
}
