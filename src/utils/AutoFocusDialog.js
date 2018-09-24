import { Component } from 'react';

export default class AutoFocusDialog extends Component {
  componentDidUpdate(prevProps) {
    this.focusOnOpen(prevProps);
  }

  focusOnOpen(prevProps) {
    const { open: beforeOpen } = prevProps;
    const { open: afterOpen, autoFocus } = this.props;

    if (autoFocus && !beforeOpen && afterOpen) {
      try {
        setTimeout(() => document.getElementsByName(autoFocus)[0].focus(), 300);
      } catch (err) {
        throw Error("autoFocus에 실패했습니다. 대상 필드명: " + autoFocus);
      }
    }
  }
}