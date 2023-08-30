import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-about">
          <p className="about-head">ABOUT THE FOUNDER</p>
          <a href="https://elijahmccoy.com" target="_blank">
            <p>Portfolio</p>
          </a>
          <a href="https://github.com/elijah-mccoy5" target="_blank">
            <p>Github</p>
          </a>
          <a href="https://www.linkedin.com/in/elijah-mccoy5/" target="_blank">
            <p>LinkedIn</p>
          </a>
        </div>
        <div className="footer-logo">
          <h1>!=</h1>
        </div>
        <div className="footer-contact">
          <p className="contact-head">CONTACT US</p>
          <a href="tel:657-286-9548" target="_blank">
            <p>+1 (657)-286-9548</p>
          </a>
          <a href="elijah.mccoy5@gmail.com" target="_blank">
            <p>elijah.mccoy5@gmail.com</p>
          </a>
          <a href="https://elijahmccoy.com" target="_blank">
            <p>elijahmccoy.com</p>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>THIS SITE IS POWERED BY ELIJAH MCCOY</p>
      </div>
    </div>
  );
};

export default Footer;
