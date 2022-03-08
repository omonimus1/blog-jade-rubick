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

              <p>Designed for engineering managers who are just getting started or have some experience. Click above to learn more.</p>

              <p></p>

              <a href="https://rubick.ck.page/products/engineering-leadership-course" target="_blank">
                <section className="subContainer2">
                  <span className="subIcon"><FaUserPlus /></span>
                  <span className="subText">Engineering leadership paid course</span>
                </section>
              </a>

              <p>Designed for engineering leaders (product and design leaders may benefit as well). Click above to learn more.</p>

              <h2>About the courses</h2>

              <dl>
                <dt>What is the format for these classes?</dt>
                <dd>They are email-based newsletter courses.</dd>

                <dt>How much time do these courses require?</dt>
                <dd>For all of the courses, the amount of time you devote to them depends on you.<br /><br />

                  For the Engineering Leadership course, most of the content is ideas and 
                  inspiration for your practice. <br /><br />
                  
                  The Management Bootcamp course has some assignments. But all assignments
                  are optional, and it's up to you to decide which you want to integrate
                  into your management practice. For example, there is an assignment to 
                  set up your support network, with some suggestions for how to do so. 
                  You don't have to do any of them, but you'll probably find it helpful. 
                </dd>

                <dt>Are there assessments or quizzes with these courses?</dt>
                <dd>No. The courses do not have an assessment.
                </dd>

                <dt>Is there any interaction with other students?</dt>
                <dd>The Management Bootcamp course has a private Slack group you can 
                  opt to participate in. It's like a support group for managers! You can
                  ask questions there and get answers from your peers and from Jade. 
                </dd>

                <dt>How is the paid version of the Engineering Leadership course different than the free version?</dt>
                <dd>The paid version includes a 1-1 session with me, and also supports my
                  writing. If you're able to do the paid version, please do. These courses 
                  are something I do because I want people to pass on the things I've learned. 
                  I can make much better money doing other work. So this helps make it 
                  financially viable.
                </dd>

                <dt>I can't afford your classes, but really want to take them</dt>
                <dd><a href="/contact/">Contact me!</a> I'll set you up.
                </dd>

                <dt>How much email will I be receiving, and for how long?</dt>
                <dd>The Engineering Leadership course is a weekly email with about 
                  eleven months of content (as of March 2022). I'll probably add courses
                  in the future as well, so it's possible you'll get more content, just less
                  frequently, after you get through the main content. 
                  <br /><br />
                  The Management Bootcamp course has much more frequent emails at the beginning. 
                  The first week is daily, the second week is every other day, then every three days.
                  It settles into a weekly cadence. The length of the course is still being determined,
                  but I'm planning to make it about a ninety day course. 
                </dd>

                <dt>Can I sign up for both classes?</dt>
                <dd>Yes, that should work just fine. The only downside is that you
                  might receive two email on the same day.  
                </dd>

                <dt>If I pay for the course and don't like it, can I get a refund?</dt>
                <dd>Yes, I provide refunds with no questions asked, for two months after the
                  course starts. <a href="/contact/">Contact me</a>.
                </dd>

                <dt>Is it annoying to unsubscribe if I'm finished with it?</dt>
                <dd>Every email has an unsubscribe link in it. It should be super easy.
                </dd>

                <dt>How do I give you feedback on any of the course content?</dt>
                <dd>You can reply to any email and I'll read it. I really appreciate feedback!
                </dd>

              </dl>              

              <style jsx>{`
                p {
                  font-size: ${theme.font.size.s};
                  line-height: ${theme.font.lineHeight.xxl};
                  margin: 0 0 1.5em;
                  margin-bottom: 40px;
                }

                dl {
                  line-height: ${theme.font.lineHeight.xxl};
                  margin: 0 0 1.5em;
                  margin-bottom: 40px;                  
                }

                dt {
                  margin-top: 20px;
                  font-weight: bold;
                  font-size: ${theme.font.size.s};
                }

                dd {
                  margin-top: 20px;
                  font-size: ${theme.font.size.xs};
                }

                .subContainer2 {
                  display: inline-block;
                  border-radius: 6px;
                  padding: 10px;
                  padding-bottom: 0px;
                  margin-right: 30px;
                  margin-bottom: 20px;
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
