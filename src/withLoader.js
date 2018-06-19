import React, { Component } from 'react';
import LoadingAnimation from './LoadingAnimation';

function withLoader(WrappedComponent) {
  return class extends Component {
    state = {
      loaded: false,
    }

    handleOnLoad = () => console.log('loaded!') || this.setState({ loaded: true });

    render() {
      const { loaded } = this.state;

      return (
        <React.Fragment>
          <LoadingAnimation show={!loaded} />
          <div onLoad={this.handleOnLoad} style={{ width: '100%', height: '100%' }}>
            <WrappedComponent {...this.props} />
          </div>
        </React.Fragment>
      );
    }
  };
}

export default withLoader;