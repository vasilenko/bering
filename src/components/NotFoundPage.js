import React from 'react';

import Helmet from 'react-helmet';

import { Header } from 'semantic-ui-react';

const NotFoundPage = () => (
  <div>
    <Header>Page not found</Header>

    <Helmet title="Page not found" />
  </div>
);

export default NotFoundPage;
