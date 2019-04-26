import React from 'react';
import SectionHeading from './SectionHeading';

const Section = props => {
  return (
    <section>
      <SectionHeading>{props.title}</SectionHeading>
      {props.children}
    </section>
  );
};
export default Section;
