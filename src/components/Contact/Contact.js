/* eslint no-unused-vars: 0 */

import { navigate } from "gatsby";
import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { FaGithub, FaStackOverflow, FaLinkedin } from 'react-icons/fa'

import theme from "../../theme/theme.yaml";

class Contact extends React.Component {

  render() {
    return (
      <p>I can be reached at jade at rubick dot com.<br />

      And on LinkedIn: <a href="https://www.linkedin.com/in/jaderubick/" target="_blank"><FaLinkedin/></a>
              <re-icons></re-icons>
      </p>
    )
  }
};

export default Contact;
