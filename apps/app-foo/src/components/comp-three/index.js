import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

class CompThree extends Component {
  render() {
    return (
      <div>
        <h3>CompThree</h3>
      </div>
    );
  }
}

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

export default enhance(CompThree);
