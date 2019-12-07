import { connect } from 'react-redux';
import Revisions from './revisions';

const mapStateToProps = (state) => {
  return {
    test: state.revisions.test,
    testData: state.revisions.testData
  }
};

export default connect(mapStateToProps)(Revisions);