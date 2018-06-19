import React from 'react';
import { withStyles, Typography, Button, Collapse } from '@material-ui/core';

import DeleteIconBtn from './DeleteIconBtn';
import { spaceBetween, alignChildrenRight, marginOneUnit } from './styles';
import popupList from './PopupDetailConfig';
import FormComponent from './FormComponent';

const styles = theme => ({
  root: {
    marginTop: -80, // GridListTemplate 때문에
  },
  header: {
    ...spaceBetween,
    marginBottom: 30,
  },
  headerBtn: {
    marginLeft: theme.spacing.unit,
  },
  alignChildrenRight,
  marginOneUnit,
});

class PopupDetail extends FormComponent {
  constructor(props) {
    super(props);

    const { popupDetail } = props;

    this.state = {
      title: '',
      content: '',
      startDate: '',
      endDate: '',
      views: 0,
      likes: 0,
      noShowCount: 0,
      priority: -1,
      ...popupDetail,

      // 데이터가 들어오는 경우 수정모드
      editMode: Boolean(popupDetail),
    };
  }

  componentDidUpdate(prevProps) {
    console.log('do something!');

    const { open: beforeOpen } = prevProps;
    const { open: afterOpen } = this.props;

    if (!beforeOpen && afterOpen) {
      setTimeout(() => {
        const input = document.getElementsByName('title')[0];
        window.scrollTo(0, input.getBoundingClientRect().top);
        input.focus();
      }, 300);
    }
  }

  render() {
    const { classes, open } = this.props;
    const { editMode } = this.state;
    const title = editMode ? '팝업 관리 상세' : '팝업 생성';

    return (
      <Collapse in={open} collapsedHeight='0px' >
        <div className={classes.header}>
          <Typography variant='display1'>{title}</Typography>
          {editMode && <DeleteIconBtn className={classes.headerBtn} />}
        </div>

        {popupList.map(input => this.renderField(input))}

        <div className={classes.alignChildrenRight}>
          <Button color="primary" className={classes.marginOneUnit}>
            취소
          </Button>
          <Button color="primary" variant='raised' className={classes.marginOneUnit}>
            수정
          </Button>
        </div>
      </Collapse>
    );
  }
}

export default withStyles(styles)(PopupDetail);