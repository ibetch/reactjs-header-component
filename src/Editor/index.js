import React from 'react';
import Logo from './Logo';
import ConfigPanel from './ConfigPanel';
import ConfigPanelSection from './ConfigPanelSection';

const Editor = props => {
  return (
    <ConfigPanel>
      <ConfigPanelSection configPanelTitle="Logo">
        <Logo />
      </ConfigPanelSection>
      <ConfigPanelSection configPanelTitle="Mobiles">Mobile</ConfigPanelSection>
    </ConfigPanel>
  );
};
export default Editor;
