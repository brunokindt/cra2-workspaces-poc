import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';

const CompTwo = () => (
  <div>
    <h3>CompTwo</h3>
  </div>
);

const mapStateToProps = state => ({
  message: state.message,
});

const mapDispatchToProps = {
};

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default enhance(CompTwo);

