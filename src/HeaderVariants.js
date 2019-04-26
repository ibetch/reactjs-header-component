import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import Banner from './Banner';

class HeaderVariants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }
  handleEditorNavClick() {
    this.setState = {
      isActive: () => {}
    };
    console.log(this);
  }
  render() {
    return (
      <div>
        <div>
          <h1 className="bg-near-black white ma0 pa3 fw4">
            Header layout variants
          </h1>
        </div>
        <div className="flex flex-wrap flex-nowrap-ns items-stretch">
          <div className="w-100 w-50-m w-third-l bg-light-gray">
            <Banner className="bg-mid-gray white">Editor</Banner>
            <div className="pa3">
              <Editor navClick={() => this.handleEditorNavClick()} />
            </div>
          </div>
          <div className="w-100 w-50-m w-two-thirds-l">
            <Banner className={`bg-lightest-blue navy`}>Preview</Banner>
            <div className="pa3">
              <Preview />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HeaderVariants;
