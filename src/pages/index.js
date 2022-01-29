import PropTypes from "prop-types";
import React from "react";
import { graphql } from "gatsby";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import Seo from "../components/Seo";
import { FaTag, FaRss, FaPaperPlane, FaTwitter, FaLinkedin } from "react-icons/fa";


const ContactPage = props => {

  return (
    <React.Fragment>
      <Article theme={theme}>
        <header>
          <Headline title="Learn to build humane, effective engineering organizations" theme={theme} />
        </header>
        <p>Get a weekly email course on engineering leadership!</p>

        <a href="https://rubick.ck.page/subscribe" target="_blank">
          <section className="subContainer">
            <span className="subIcon"><FaPaperPlane /></span>
            <span className="subText">Free Course</span>
          </section>
        </a>

        <a href="https://rubick.ck.page/products/engineering-leadership-course" target="_blank">
          <section className="subContainer2">
            <span className="subIcon"><FaPaperPlane /></span>
            <span className="subText">Paid course</span>
          </section>
        </a>

        <p></p>

        <script src="https://f.convertkit.com/ckjs/ck.5.js" />
        <form action="https://app.convertkit.com/forms/2891253/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="2891253" data-uid="3978146adc" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://convertkit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800">
          <div data-style="full">
            <div data-element="column"></div>
            <div data-element="column">
              <div data-element="header">
                <h2>Learn to build humane, effective eng orgs</h2>
              </div>

              <ul data-element="errors" data-group="alert"></ul>

              <div data-element="fields">
                <div>
                  <input name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email" />
                </div>

                <div>
                  <div data-group="dropdown" class="formkit-8966" type="Custom" order="1" save_as="Tag" group="field">
                    <select data-element="tags-select" name="tags[]" required="">
                      <option value="">Receive weekly posts?</option>
                      <option value="2842251">Yes, please!</option>
                      <option value="2842252">No, just new posts</option>
                    </select>
                  </div>
                </div>

                <button data-element="submit">
                  <div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span>Subscribe</span>
                </button>

              </div>
            <div data-element="disclaimer">We respect your privacy. Unsubscribe at anytime.
            </div>

            <div>
            </div>
          </div>
          </div>
        </form>

        <p>Each week, you receive an email
          that describes something useful. If you've read my posts in the past
          and learned from them, sign up! </p>

        <p>The paid version is a great use for
          a "professional development" budget. Pay for it and expense it.
          The paid version helps me develop more curriculum, and will
          have some other benefits.</p>

        <a href="../rss.xml" target="_blank">
          <section className="subContainer">
            <span className="subIcon"><FaRss /></span>
            <span className="subText">RSS</span>
          </section>
        </a>

        <a href="https://twitter.com/JadeRubick" target="_blank">
          <section className="subContainer">
            <span className="subIcon"><FaTwitter /></span>
            <span className="subText">Twitter</span>
          </section>
        </a>

        <a href="https://www.linkedin.com/in/jaderubick/" target="_blank">
          <section className="subContainer">
            <span className="subIcon"><FaLinkedin /></span>
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
      <Seo pageTitle="Rubick.com" />
    </React.Fragment>
  );
};

ContactPage.propTypes = {
};

export default ContactPage;
