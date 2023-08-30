import "./index.css";

const Educational = () => {
  return (
    <div className="educational-container">
      <div className="content-container">
        <div className="content-1">
          <a
            href="https://www.latimes.com/california/story/2023-01-20/keenan-andersons-family-files-50-million-legal-claim-against-la-after-he-died-following-tasering-by-lapd"
            target="_blank"
            className="cont-1"
          ></a>
          <div className="cont-1-desc">
            <p>
              Keenan Anderson’s family files $50-million legal claim after
              tasing by LAPD Civil rights lawyers acting on behalf of Keenan
              Anderson’s young son have filed a $50-million wrongful-death claim
              against the city of Los Angeles, alleging the 31-year-old teacher
              died as a result of “serious injuries” he suffered when an LAPD
              officer repeatedly tased him after a traffic collision.
            </p>
          </div>
        </div>
        <div className="content-2">
          <a
            className="cont-2"
            href="https://www.usnews.com/news/best-states/florida/articles/2023-08-27/jacksonville-killings-what-we-know-about-the-hate-crime"
            target="_blank"
          ></a>
          <div className="cont-2-desc">
            <p>
              Just last week, a city council committee pulled funding for the
              mayor’s chief of diversity and inclusion — the first time the city
              would have had such a position.
            </p>
          </div>
        </div>
        <div className="content-3">
          <div className="cont-3-desc">
            <p>
              Survey of Asian Americans paints sobering picture of fears about
              violence. One in two Asian Americans report feeling unsafe in the
              U.S. due to their ethnicity. That's according to a new report from
              The Asian American Foundation, examining attitudes and stereotypes
              toward Asian Americans.
            </p>
          </div>
          <a
            href="https://www.pbs.org/newshour/show/survey-of-asian-americans-paints-sobering-picture-of-fears-about-violence"
            target="_blank"
            className="cont-3"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Educational;
