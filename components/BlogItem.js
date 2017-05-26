import React from 'react';

import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ text, image }) => (
  <section>
    {Image(image)}
    <TextBox>{text}</TextBox>
  </section>
);

export default BlogItem;
