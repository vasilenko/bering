import React from 'react';

import Helmet from 'react-helmet';

import ContactForm from './ui/Contact/Form';

import { Header } from 'semantic-ui-react';

const AboutPage = () => (
  <div>
    <Header>About project</Header>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>


    <Header>Contact us</Header>
    <ContactForm />

    <Helmet title="About Bering & Aleut" />
  </div>
);

export default AboutPage;
