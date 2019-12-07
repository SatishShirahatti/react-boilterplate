import { connect } from 'react-redux';
import Model3DViewer from './Model3DViewer';

const mapStateToProps = (state) => {
  return {
    test: state.Model3DViewer.test,
    testData: state.Model3DViewer.testData
  }
};

export default connect(mapStateToProps)(Model3DViewer);