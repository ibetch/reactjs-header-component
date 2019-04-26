import React from 'react';

const EditorNav = props => {
  return (
    <ul>
      <li>
        <button onClick={props.onClick}>Something</button>
      </li>
    </ul>
  );
};
export default EditorNav;
