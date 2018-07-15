import { Component } from 'react';

export default class AutoFocusDialog extends Component {
  componentDidUpdate(prevProps) {
    this.focusOnOpen(prevProps);
  }

  focusOnOpen(prevProps) {
    const { open: beforeOpen } = prevProps;
    const { open: afterOpen, autoFocus } = this.props;

    if (autoFocus && !beforeOpen && afterOpen) {
      setTimeout(() => document.getElementsByName(autoFocus)[0].focus(), 300);
    }
  }
}