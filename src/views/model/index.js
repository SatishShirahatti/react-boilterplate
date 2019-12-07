import { connect } from 'react-redux';
import Model from './model';

const mapStateToProps = (state) => {
  return {
    test: state.model.test,
    testData: state.model.testData
  }
};

export default connect(mapStateToProps)(Model);