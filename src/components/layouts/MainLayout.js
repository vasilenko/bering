import React from 'react';
import PropTypes from 'prop-types';

import Link from 'components/ui/Link';

import { Container, Header as TextHeader, Icon } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
);

MainLayout.propTypes = {
  children: PropTypes.node
};

const Header = () => (
  <header style={{ marginTop: '2em', marginBottom: '2em' }}>
    <TextHeader as="h1" size="huge">
      <Link to="/">
        <Icon name="anchor" />
        Bering & Aleut
      </Link>
    </TextHeader>
  </header>
);

const Footer = () => (
  <footer style={{ paddingTop: '2em', paddingBottom: '2em', textAlign: 'right' }}>
    <p>Bering & Aleut @ 2017</p>
  </footer>
);

export default MainLayout;
