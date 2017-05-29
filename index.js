import React from 'react';
import ReactDOM from 'react-dom';

import BlogList from './components/BlogList';

const data = [
  {
    id: '3161d55a-5b99-490a-bd53-402ef075338e',
    text: 'Post 1',
    image: {
      src: 'https://unsplash.it/400/200/?image=1',
      width: '400',
      height: '200',
      alt: 'Post 1'
    }
  },
  {
    id: 'ff422409-7926-45b0-b7be-edc14ea272b8',
    text: 'Post 2',
    image: {
      src: 'https://unsplash.it/400/200/?image=2',
      width: '400',
      height: '200',
      alt: 'Post 2'
    }
  },
  {
    id: 'b64433ce-84b2-4599-98b7-46b35ce80b0b',
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
