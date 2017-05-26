import React from 'react';
import ReactDOM from 'react-dom';

import BlogList from './components/BlogList';

const data = [
  {
    text: 'Post 1',
    image: {
      src: 'https://unsplash.it/400/200/?image=1',
      width: '400',
      height: '200',
      alt: 'Post 1'
    }
  },
  {
    text: 'Post 2',
    image: {
      src: 'https://unsplash.it/400/200/?image=2',
      width: '400',
      height: '200',
      alt: 'Post 2'
    }
  },
  {
    text: 'Post 3',
    image: {
      src: 'https://unsplash.it/400/200/?image=3',
      width: '400',
      height: '200',
      alt: 'Post 3'
    }
  }
];

ReactDOM.render(
  <BlogList data={data}/>,
  document.getElementById("app")
);
