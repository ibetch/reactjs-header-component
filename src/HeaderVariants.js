import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import Banner from './Banner';

class HeaderVariants extends React.Component {
  render() {
    return (
      <div className="flex flex-wrap flex-nowrap-ns items-stretch">
        <div className="w-100 w-50-m w-third-l bg-light-gray">
          <Banner className="bg-dark-gray white">Editor</Banner>
          <div className="pa3">
            <Editor />
          </div>
        </div>
        <div className="w-100 w-50-m w-two-thirds-l">
          <Banner className={`bg-lightest-blue navy`}>Preview</Banner>
          <div className="pa3">
            <Preview />
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderVariants;
