import React from 'react';
import PropTypes from 'prop-types';

import NotFoundPage from 'components/NotFoundPage';

import { Dimmer, Loader } from 'semantic-ui-react';

const Loading = () => (
  <Dimmer active inverted>
    <Loader inverted>Loading</Loader>
  </Dimmer>
);

const withLoader = (Component) => {
  const Loader = (props) => {
    if (props.error) {
      return <NotFoundPage />;
    }

    if (props.isFetching) {
      return <Loading />;
    }

    return <Component {...props} />;
  };

  Loader.propTypes = {
    isFetching: PropTypes.bool,
    error: PropTypes.bool
  };

  return Loader;
};

export default withLoader;
