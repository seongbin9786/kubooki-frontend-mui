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
          <WrappedComponent
            handleOnLoad={this.handleOnLoad}
            {...this.props}
          />
        </React.Fragment>
      );
    }
  };
}

export default withLoader;