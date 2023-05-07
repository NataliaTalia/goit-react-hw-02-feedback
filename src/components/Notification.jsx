import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return (
    <>
      <h6>{message}</h6>
    </>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
