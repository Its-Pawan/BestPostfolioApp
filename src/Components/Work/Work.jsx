import styled from "styled-components";
import PortfolioBox from "../PortfolioBox/PortfolioBox";
import WorkData from "./WorkData";

const Work = () => {
  return (
    <Portfolio>
      <div className=" container">
        <div className="container-box">
          <div className="inner-container">
            <h2 className="global-heading">Portfolio</h2>
            <div className="gallery grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {WorkData.map((data) => (
                <PortfolioBox
                  key={data.id}
                  url={data.url}
                  img={data.img}
                  title={data.title}
                  tech={data.tech}
                />
              ))}
            </div>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} All Rights Reserved by Pawan Joshi.
          </div>
        </div>
      </div>
    </Portfolio>
  );
};

export default Work;
const Portfolio = styled.div`
`;
