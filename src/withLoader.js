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

      window.addEventListener('load', () => {
        this.setState({ loaded: true });
      });
    }

    attachOnload() {
      if (this.state.attached) return;

      window.addEventListener('load', () => {
        this.setState({ loaded: true });
      });
      this.setState({ attached: true });
      console.log('Successfully attached onLoad');
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