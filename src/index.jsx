import React from 'react';
import ReactDOM from 'react-dom';
import ListPerf from './ListPref';

import './styles/app.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'My React App',
    };

    this.handleClickRerender = this.handleClickRerender.bind(this);
  }

  handleClickRerender() {
    this.setState({ title: 'My React App' });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>{this.state.title}</h1>
        <div className="ui fixed inverted menu">
          <div className="ui container">
            <a href="#" className="header item">
              My React App
            </a>
            <a href="#" className="item">Home</a>
          </div>
        </div>
        <div className="ui container">
          <h1 className="ui header">Hello World</h1>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>A text container is used for the main container, which is useful for single column layouts</p>
        </div>
        <button onClick={this.handleClickRerender}>Re-render</button>
      </div>
    );
  }
}

const posts = [
  { title: 'p1', likes: 1 },
  { title: 'p2', likes: 2 },
];

ReactDOM.render(<ListPerf posts={posts} />, document.getElementById('root'));
