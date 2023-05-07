import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

export default Section;

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
