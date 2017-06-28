import React from 'react';

import BlogList from './BlogList';
import PieChart from './PieChart';

const posts = [
  {
    id: '3161d55a-5b99-490a-bd53-402ef075338e',
    text: 'Post 1',
    image: {
      src: 'https://unsplash.it/400/200/?image=1',
      width: 400,
      height: 200,
      alt: 'Post 1'
    },
    meta: {
      author: 'User 1',
      createdAt: '2017-06-02T07:23:32.820520Z',
      updatedAt: '2017-06-02T07:23:32.820520Z'
    }
  },
  {
    id: 'ff422409-7926-45b0-b7be-edc14ea272b8',
    text: 'Post 2',
    image: {
      src: 'https://unsplash.it/400/200/?image=2',
      width: 400,
      height: 200,
      alt: 'Post 2'
    },
    meta: {
      author: 'User 1',
      createdAt: '2017-06-02T07:23:32.820520Z',
      updatedAt: '2017-06-02T07:23:32.820520Z',
      likeCount: 100
    }
  },
  {
    id: 'b64433ce-84b2-4599-98b7-46b35ce80b0b',
    text: 'Post 3',
    image: {
      src: 'https://unsplash.it/400/200/?image=3',
      width: 400,
      height: 200,
      alt: 'Post 3'
    },
    meta: {
      author: 'User 1',
      createdAt: '2017-06-02T07:23:32.820520Z',
      updatedAt: '2017-06-02T07:23:32.820520Z',
      likeCount: 50
    }
  }
];

class BlogPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts };
    this.incrementLikeCount = this.incrementLikeCount.bind(this);
  }

  incrementLikeCount(id) {
    const { posts } = this.state;
    const updatedPosts = posts.map((post) => {
      if (post.id != id) {
        return post;
      }

      return {
        ...post,
        meta: { ...post.meta, likeCount: (post.meta.likeCount || 0) + 1 }
      };
    });

    this.setState({ posts: updatedPosts });
  }

  render() {
    const { posts } = this.state;
    const pieChartData = posts.map((post) => [post.text, post.meta.likeCount || 0]);

    return (
      <div>
        <BlogList posts={posts} incrementLikeCount={this.incrementLikeCount} />
        <PieChart data={pieChartData} />
      </div>
    );
  }
}

export default BlogPage;

