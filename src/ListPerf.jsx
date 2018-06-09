import React from 'react';

class PostList extends React.PureComponent {
  render() {
    console.log('render PostList');
    return (
      <ul>
        {this.props.posts.map(p => <li key={p.title}>{p.title}</li>)}
      </ul>
    );
  }
}

export default class ListPref extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'You have many posts',
    }

    this.handleRerenderClick = this.handleRerenderClick.bind(this);
  }

  handleRerenderClick() {
    this.setState({ message: 'You have many posts' });
  }

  render() {
    console.log('render ListPref');
    const { posts } = this.props
    const topTen = [...posts].sort((a, b) => 
      b.likes - a.likes).slice(0, 9);
    return (
      <div>
        <h3>{this.state.message}</h3>
        <button onClick={this.handleRerenderClick}>Re-render</button>
        <PostList posts={topTen} />
      </div>
    )
  }
}
