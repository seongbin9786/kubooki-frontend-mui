import React, { Component } from 'react';
import { Prompt } from 'react-router';

class DialogOwnerComponent extends Component {
  renderNavBlocker() {
    return <Prompt when={this.checkAnyDialogOpen()} message="" />;
  }

  checkAnyDialogOpen() {
    const { dialogOpen } = this.state;
    for (let open in dialogOpen) {
      if (dialogOpen[open]) return true;
    }
    return false;
  }

  toggleDialog = name => () => this.setState(({ dialogOpen }) => ({
    dialogOpen: {
      ...dialogOpen,
      [name]: !dialogOpen[name],
    }
  }))
}

export default DialogOwnerComponent;