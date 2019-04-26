import React from 'react';
import PropTypes from 'prop-types';

const Banner = props => {
  return (
    <div className={`flex items-center justify-center pa2 ${props.className}`}>
      {props.children}
    </div>
  );
};
Banner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string
};
export default Banner;
