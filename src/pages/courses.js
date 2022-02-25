import React from "react";
import { graphql, StaticQuery } from "gatsby";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { FaUserPlus, FaSeedling } from "react-icons/fa";
import config from "../../content/meta/config";

const CoursePage = props => {

  return (
    <StaticQuery
      query={graphql`
        query EmailQuery3 {
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
                <Headline title="Learn to build humane, effective engineering organizations" theme={theme} />
              </header>

              <p>I offer a couple of courses on engineering leadership</p>

              <a href="https://rubick.ck.page/products/management-bootcamp" target="_blank">
                <section className="subContainer2">
                  <span className="subIcon"><FaSeedling /></span>
                  <span className="subText">Engineering management bootcamp</span>
                </section>
              </a>

              <p>Designed for engineering managers who are just getting started. Click above to learn more.</p>

              <p></p>

              <a href="https://rubick.ck.page/products/engineering-leadership-course" target="_blank">
                <section className="subContainer2">
                  <span className="subIcon"><FaUserPlus /></span>
                  <span className="subText">Engineering leadership paid course</span>
                </section>
              </a>

              <p>Designed for engineering leaders (product and design leaders may benefit as well). Click above to learn more.</p>

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
                  border: 1px solid ${theme.color.neutral.gray.d};
                  :hover {
                    border: 1px solid #ccc;
                    .subText {
                      color: ${theme.color.brand.primary};
                    }
                  }
                }

                .subContainer2 {
                  display: inline-block;
                  border-radius: 6px;
                  padding: 10px;
                  padding-bottom: 0px;
                  margin-right: 30px;
                  min-width: 130px;
                  border: 1px solid ${theme.color.neutral.gray.d};
                  background-color: ${theme.color.brand.primaryLight};
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
            <Seo pageTitle="Courses"/>
          </React.Fragment>
        )}
      }
    />
  )
};

export default CoursePage;
