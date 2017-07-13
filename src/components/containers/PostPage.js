import React from 'react';
import PropTypes from 'prop-types';

import request from 'superagent';
import { camelizeKeys } from 'humps';

import { API_BASE } from 'constants/static/env';

import NotFoundPage from './NotFoundPage';
import BlogItem from 'components/ui/Blog/Item';

import { Item } from 'semantic-ui-react';

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: null };
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    request
      .get(`${API_BASE}/posts/${this.props.match.params.id}`)
      .end((err, res) =>
        this.setState({ post: camelizeKeys(res.body)['data'] })
      );
  }

  render() {
    const { post } = this.state;

    if (!post) {
      return <NotFoundPage />;
    }

    return (
      <Item.Group>
        <BlogItem post={post} />
      </Item.Group>
    );
  }
}

PostPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default PostPage;
