import React from 'react';
import PropTypes from 'prop-types';

import Link from 'components/ui/Link';

import { Container, Header as TextHeader, Icon, Menu } from 'semantic-ui-react';

const MainLayout = ({ children }) => (
  <Container>
    <Header />
    <Nav />
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

const Nav = () => (
  <Menu secondary>
    <Menu.Item>
      <Link to="/">Blog</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/about">About</Link>
    </Menu.Item>
  </Menu>
);

const Footer = () => (
  <footer style={{ paddingTop: '2em', paddingBottom: '2em', textAlign: 'right' }}>
    <p>Bering & Aleut @ 2017</p>
  </footer>
);

export default MainLayout;
