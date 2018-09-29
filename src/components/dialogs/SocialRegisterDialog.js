import React from 'react';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import ResponsiveDialog from '../../utils/ResponsiveDialog';
import FormComponent from '../../utils/FormComponent';

export default class extends FormComponent {

  getFieldDefinitions = () => ({
    name: {
      label: '이름',
      validate: this.validateByMinLength('이름', 2)
    },
    belongTo: {
      label: '소속대학(소속교직)',
      type: 'select',
      menuList: [
        ['융합교양대학', 'GENERAL_EDUCATION'],
        ['휴면인재융합대학', 'LIBERAL_ARTS'],
        ['지식정보서비스대학', 'SOCIAL_SCIENCE'],
        ['융합과학대학', 'NATURAL_SCIENCE'],
        ['창의공과대학', 'ENGINERRING'],
        ['관광문화대학', 'ARTS_AND_PHYSICAL'],
      ],
      validate: this.validateNotNull
    },
    identityType: {
      label: '신분',
      type: 'select',
      menuList: [
        ['학생', 'STUDENT'],
        ['교직원', 'FACULTY'],
        ['학부모', 'PARENTS'],
        ['기타', 'ETC']
      ],
      validate: this.validateNotNull
    }
  });

  render() {
    const { open, handleClose } = this.props;

    const fieldsInfo = this.renderFields();
    const hasErrors = fieldsInfo.some(field => field.error === true);
    const fieldsRendered = fieldsInfo.map(field => field.component);

    return (
      <div>
        <ResponsiveDialog
          open={open}
          handleClose={handleClose}
          autoFocus='registerId'
          title='소셜 로그인 - 추가 정보 입력'
        >
          <DialogContent>
            {fieldsRendered}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              취소
            </Button>
            <Button onClick={this.handleSubmit} disabled={hasErrors} color="primary" variant='raised'>
              완료
            </Button>
          </DialogActions>
        </ResponsiveDialog>
      </div>
    );
  }
};