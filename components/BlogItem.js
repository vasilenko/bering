import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ post }) => (
  <section>
    <Image {...post.image} />
    <TextBox>{post.text}</TextBox>
  </section>
);

export default BlogItem;
