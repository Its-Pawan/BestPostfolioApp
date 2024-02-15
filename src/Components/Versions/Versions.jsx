import styled from "styled-components";
import Copyright from "../Copyright/Copyright";

const Versions = () => {
  return (
    <Blog>
      <div className="container">
        <div className="container-box  ">
          <div className="content flex gap-1 p-8">
            <div className="blog-content  ">
              <ul className="flex flex-col gap-4 ">
                <li>
                  <h5>V1.0</h5>
                  <p>
                    I've crafted a captivating online presence to showcase my
                    skills and achievements. This initial iteration represents
                    the foundation of my digital identity, offering visitors a
                    glimpse into my professional journey and expertise. With
                    thoughtful design and seamless navigation, I've ensured that
                    potential clients and collaborators can explore my portfolio
                    with ease. Hosted securely, my website serves as a dynamic
                    platform for networking, sharing projects, and engaging with
                    my audience. As I continue to evolve, Version 1.0 marks the
                    beginning of an exciting journey towards expanding my online
                    footprint and making meaningful connections.
                  </p>
                </li>
                <li>
                  <h5>V1.1</h5>
                  <p>
                    In Version 1.1, I've introduced a dedicated version detail
                    page, enhancing user experience by offering comprehensive
                    insights into the current update and past revisions. This
                    addition allows visitors to stay informed about the latest
                    enhancements, bug fixes, and feature additions, fostering
                    transparency and trust. Users can now track the evolution of
                    the website, gaining valuable context and understanding of
                    the iterative development process. With the version detail
                    page, I aim to cultivate a more engaging and informative
                    browsing experience, empowering users to explore and
                    appreciate the continuous improvements of my portfolio
                    website.
                  </p>
                </li>
                <li>
                  <h5>V1.2</h5>
                  <p>
                    In Version 1.2, a new login/logout functionality has been
                    implemented along with a personalized profile page. Upon
                    logging in, users gain access to a profile page where they
                    can view my contact details, including phone number, email,
                    and address. The download resume button is enabled for users
                    who have logged in. These features are locked by default to
                    ensure privacy and security. This update enhances user
                    interaction and transparency, allowing users to access
                    relevant information while maintaining privacy controls.
                  </p>
                </li>
                <li>
                  <h5>V1.2.1</h5>
                  <p>Fixed some known bugs and issues.</p>
                </li>
              </ul>
            </div>
          </div>
          <Copyright />
        </div>
      </div>
    </Blog>
  );
};

export default Versions;

const Blog = styled.section`
  .content {
    min-height: 100vh;
    .blog-content {
      width: 100%;
    }
    ul {
      height: 100%;
      width: 100%;
      li {
        width: 100%;
        min-height: 50px;
        height: 100%;
        display: flex;
        align-items: center;
        border-radius: 5px;
        h5 {
          box-shadow: var(--box-shadow-dark);
          border-radius: 5px;
          font-weight: 700;
          font-size: var(--font1);
          color: var(--black);
          background-color: var(--catkrill);
          min-width: 50px;
          min-height: 50px;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        p {
          padding: 10px;
          font-size: var(--font9);
          line-height: 1.5em;
          font-weight: 400;
          color: var(--gray);
        }
      }
    }
  }
`;
