// 이후에 이미지 리사이징, 드래그앤드롭 모듈 추가할 때 사용할 코드

// import { Quill } from 'react-quill';

// /* this.quill의 this는 알아서 bind된다. (editor) */
// function imageHandler() {
//   const input = document.createElement('input');
//   input.setAttribute('type', 'file');
//   input.setAttribute('accept', 'image/*');
//   input.click();
//   input.onchange = async function letsUpload() {
//     const file = input.files[0];
//     console.log('User trying to uplaod this:', file);

//     const id = await uploadFile(file);
//     const range = this.quill.getSelection();
//     const link = `${ROOT_URL}/file/${id}`;

//     this.quill.insertEmbed(range.index, 'image', link);
//   }.bind(this);
// }

// function registerModules() {
//   Quill.register('modules/imageResize', ImageResize);
//   Quill.register('modules/imageDrop', ImageDrop);
// }

export const modules = {
  toolbar: {
    // handlers: {
    //   image: imageHandler,
    // },
    container: [
      [
        { align: ['', 'right', 'center', 'justify'] },
        'bold',
        'underline',
        'italic',
        'link',
        'image',
        'video',
      ],
    ],
  },
  // imageResize: {
  //   modules: ['Resize', 'DisplaySize', 'Toolbar'],
  // },
  // imageDrop: true,
};

export const formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'direction',
  'align',
  'link',
  'image',
  'video',
  'formula',
];