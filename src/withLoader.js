import React, { Component } from 'react';
import LoadingAnimation from './LoadingAnimation';

function withLoader(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = { loaded: false };
      this.setLoaderCss(false);

      window.onload = () => {
        this.setState({ loaded: true });
        this.setLoaderCss(true);
        console.log('@@@ Working @@@');
      };
    }

    // react-jss의 Dynamic Value와 jss-global이 호환되지 않아서 굳이 이렇게 해야함
    setLoaderCss(loaded) {
      document.getElementById('root').style = `overflow: ${loaded ? 'visible' : 'hidden'}`;
    }

    render() {
      const { loaded } = this.state;

      return (
        <React.Fragment>
          <LoadingAnimation show={!loaded} />
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  };
}

export default withLoader;