import React, { Component } from 'react';
import LoadingAnimation from './LoadingAnimation';

function withLoader(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loaded: false,
        attached: true,
        currentUrl: this.getBrowserUrl(),
      };
      this.setUpLoader();
    }

    setUpLoader() {
      window.addEventListener('load', () => {
        this.setState({ loaded: true });
        this.setLoaderCss(true);
      });
      this.setLoaderCss(false);
    }

    attachOnload() {
      if (this.state.attached) return;
      this.setUpLoader();
      this.setState({ attached: true });
      console.log('Successfully attached onLoad');
    }

    // react-jss의 Dynamic Value와 jss-global이 호환되지 않아서 굳이 이렇게 해야함
    setLoaderCss(loaded) {
      document.getElementById('root').style = `overflow: ${loaded ? 'visible' : 'hidden'}`;
    }

    getBrowserUrl = () => window.location.href;

    componentDidUpdate(prevProps) {
      if (this.state.currentUrl !== this.getBrowserUrl())
        this.attachOnload();
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