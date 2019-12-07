import { connect } from 'react-redux';
import GetNodes from './getNodes';

const mapStateToProps = (state) => {
  return {
    test: state.getNodes.test,
    testData: state.getNodes.testData
  }
};

export default connect(mapStateToProps)(GetNodes);