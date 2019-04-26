import React from 'react';
import EditorNav from './EditorNav';

const Editor = props => {
  return (
    <div>
      <EditorNav onClick={() => props.navClick()} />
    </div>
  );
};
export default Editor;
