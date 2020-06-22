import React from 'react';
import { Link } from 'react-router-dom';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>Test</h1>
        {this.props.children}
        <Link to="/"><button class="btn btn-danger">go to Home</button></Link>
        <Link to="/tes1"><button class="btn btn-danger">go to tes1</button></Link>
        <Link to="/tes2"><button class="btn btn-success">go to tes2</button></Link>
      </div>
    );
  }
}

export default Layout