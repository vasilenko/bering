import React from 'react';
import { shallow } from 'enzyme';

import Link from 'components/ui/Link';

import BlogItem from '../Item';

const post = {
  id: 0,
  title: 'Title',
  text: 'Text',
  image: {
    src: 'image.png'
  },
  meta: {
    createdAt: '9/5/2017, 4:34:58 PM'
  }
};

const item = shallow(<BlogItem post={post} />);

describe('BlogItem', () => {
  it('renders title', () => {
    const header = <Link to={`/posts/${post.id}`}>{post.title}</Link>;

    expect(item.contains(header)).toEqual(true);
  });

  it('matches snapshot', () => {
    expect(item).toMatchSnapshot();
  });
});
