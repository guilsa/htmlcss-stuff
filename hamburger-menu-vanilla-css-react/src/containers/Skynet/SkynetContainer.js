import React, { Component } from 'react';
// import './styles.css';

class SkynetContainer extends Component {
  render() {
    return (
      <article>
        <div className="left">
          <header><h1>Imagine</h1></header>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="right">
          <img width="90%" height="90%" role="presentation" src="https://c2.staticflickr.com/2/1520/24330829813_944c817720_b.jpg" />
        </div>
      </article>
    );
  }
}


export default SkynetContainer;
