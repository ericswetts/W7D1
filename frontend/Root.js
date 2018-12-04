import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
class Root extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return(
      <>
      <h1>Todos App</h1>
      <App/>
      </>
    );
  }
}

export default Root;
