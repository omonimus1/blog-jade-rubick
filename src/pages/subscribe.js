import React from "react";
import { graphql, StaticQuery } from "gatsby";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { FaTag , FaRss , FaPaperPlane, FaTwitter, FaLinkedin } from "react-icons/fa";
import config from "../../content/meta/config";

const SubscribePage = props => {

  return (
    <StaticQuery
      query={graphql`
        query EmailQuery {
          site {
            siteMetadata {
              emailSubLink
            }
          }
        }
      `}
      render={ queryResults => {
        const emailSubLink = queryResults.site.siteMetadata.emailSubLink
        return (
          <React.Fragment>
            <Article theme={theme}>
              <header>
                <Headline title="Subscribe" theme={theme} />
              </header>

              <h3>An email a week on engineering leadership</h3>
              <p></p>
              <p>I offer a free and paid version,
                and I promise not to spam you or bug you about the paid version. Just an email a week
                on engineering leadership topics.
              </p>

              <p>The paid version is a great use for a professional development budget. Pay for it,
                expense it, and support my writing!</p>

                <a href="https://rubick.ck.page/subscribe" target="_blank">
                  <section className="subContainer">
                    <span className="subIcon"><FaPaperPlane/></span>
                    <span className="subText">Email Course</span>
                  </section>
                </a>

                <a href="https://rubick.ck.page/products/engineering-leadership-course" target="_blank">
                <section className="subContainer">
                  <span className="subIcon"><FaPaperPlane/></span>
                  <span className="subText">Paid course</span>
                </section>
              </a>

              <p></p>

              <p>And finally, there are lots of ways to be informed about new posts: RSS, Twitter, and LinkedIn all work!</p>

              <a href="../rss.xml" target="_blank">
                <section className="subContainer">
                    <span className="subIcon"><FaRss/></span>
                    <span className="subText">RSS</span>
                </section>
              </a>

              <a href="https://twitter.com/JadeRubick" target="_blank">
                <section className="subContainer">
                    <span className="subIcon"><FaTwitter/></span>
                    <span className="subText">Twitter</span>
                </section>
              </a>

              <a href="https://rubick.ck.page/subscribe" target="_blank">
                <section className="subContainer">
                  <span className="subIcon"><FaPaperPlane/></span>
                  <span className="subText">Email</span>
                </section>
              </a>

              <a href="https://www.linkedin.com/in/jaderubick/" target="_blank">
                <section className="subContainer">
                    <span className="subIcon"><FaLinkedin/></span>
                    <span className="subText">LinkedIn</span>
                </section>
              </a>

              <style jsx>{`
                p {
                  font-size: ${theme.font.size.s};
                  line-height: ${theme.font.lineHeight.xxl};
                  margin: 0 0 1.5em;
                  margin-bottom: 40px;
                }

                .subContainer {
                  display: inline-block;
                  border-radius: 6px;
                  padding: 10px;
                  padding-bottom: 0px;
                  margin-right: 30px;
                  min-width: 130px;
                  border: 1px solid ${theme.color.neutral.white};
                  :hover {
                    border: 1px solid #ccc;
                    .subText {
                      color: ${theme.color.brand.primary};
                    }
                  }
                }
              
                .subText {
                    text-align: right;
                    font-size: 20px;
                    color: ${theme.color.neutral.gray.j};
                }
                
                .subIcon {
                    vertical-align: middle;
                    font-size: 40px;
                    padding-right: 10px;
                    :global(svg) {
                      fill: ${theme.color.brand.primary};
                    }
                }
              `}</style>
            </Article>
            <Seo pageTitle="Subscribe"/>
          </React.Fragment>
        )}
      }
    />
  )
};

export default SubscribePage;
