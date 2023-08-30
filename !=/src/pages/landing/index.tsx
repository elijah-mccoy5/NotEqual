import "./index.css";
import dayjs from "dayjs";

const Landing = () => {
  const HEADER_DATE = dayjs(Date.now()).format("MMMM YYYY").toUpperCase();

  return (
    <div className="landing-container">
      <div className="header">
        <div className="header-left">
          <p className="logo">!=</p>
        </div>
        <div className="header-center">
          <p>EGALITY & SOCIAL JUSTICE</p>
        </div>
        <div className="header-right">
          <p>{HEADER_DATE}</p>
        </div>
      </div>
      <div className="landing-hero">
        <div className="hero-text">
          <p>EMPOWERING THE INNER ACTIVIST</p>
          <h1>
            BREAK CHAINS and UNITE STRONG OUR STRUGGLE IS FOR EVERYDAY EQUALITY
          </h1>
        </div>
      </div>
      <div className="explore">
        <p className="explore-button">↓</p>
      </div>
      <div className="mission">
        <p>
          NOT EQUAL IS A PLATFORM DEDICATED TO ADVANCING RACIAL EQUALITY THROUGH
          PROFOUND AWARENESS. OUR FUNDAMENTAL MISSION IS TO CULTIVATE A SAFE
          HAVEN FOR INDIVIDUALS TO EMBRACE THEIR TRUE SELVES, FOSTERING A
          COMMUNITY THAT WEARS THE ELEGANCE OF UNITY AND EMBODIES THE HARMONY OF
          EQUALITY.
        </p>
      </div>
    </div>
  );
};

export default Landing;
