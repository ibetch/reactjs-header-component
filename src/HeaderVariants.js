import React from 'react';
import Preview from './Preview';
import Variants from './Variants';

class HeaderVariants extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Preview />
        <Variants />
      </React.Fragment>
    );
  }
}
export default HeaderVariants;
