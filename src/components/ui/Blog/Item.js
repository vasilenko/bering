import React from 'react';
import PropTypes from 'prop-types';

import BlogMeta from './Meta';
import Image from 'components/ui/Image';
import TextBox from 'components/ui/TextBox';
import Link from 'components/ui/Link';

import { postsPath } from 'helpers/routes';

import { Item } from 'semantic-ui-react';

const BlogItem = ({ post, incrementLikeCount }) => (
  <Item>
    <Item.Image size="medium">
      <Image {...post.image} />
    </Item.Image>
    <Item.Content>
      <Item.Header>
        <Link to={postsPath(post.id)}>{post.title}</Link>
      </Item.Header>
      <Item.Description>
        <TextBox>{post.text}</TextBox>
      </Item.Description>
      <Item.Extra>
        <BlogMeta
          {...Object.assign(
            post.meta,
            { incrementLikeCount: () => incrementLikeCount(post.id) }
          )}
        />
      </Item.Extra>
    </Item.Content>
  </Item>
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.num,
    image: PropTypes.shape(Image.propTypes),
    title: PropTypes.string,
    text: PropTypes.string,
    meta: PropTypes.shape(BlogMeta.propTypes)
  }),
  incrementLikeCount: PropTypes.func
};

export default BlogItem;
