import React from 'react';
import ReactQuill from 'react-quill';
import InputLabel from '@material-ui/core/InputLabel';

import { modules, formats } from './QuillConfig';
import './content.css';

function QuillEditor({ value, onChange, ...props }) {
  return (
    <div {...props} style={{ marginTop: '16px', marginBottom: '4px' }}>
      <InputLabel>내용</InputLabel>
      <ReactQuill
        id='editor'
        theme="snow" // theme={null} to use minimal core theme
        className='article__content'
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default QuillEditor;