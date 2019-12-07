
import Network from '../../utils/network';

const actions = {
  test: (msg) => {
    return {
      type: "TEST",
      payload: msg
    }
  },
  getTestData: () => {
    return async dispatch => {
      dispatch({type: "GET_TEST_DATA_PENDING"});
    
      try {
        let response = await Network.get('/test');
        dispatch({type: "GET_TEST_DATA_SUCCESS", payload: response.data});
      } catch (error) {
        dispatch({type: "GET_TEST_DATA_FAILED", payload: error.message});
      }
    }
  }
};

export default actions;
// export const FETCH_MODELDATA_PENDING = 'FETCH_MODELDATA_PENDING';
// export const FETCH_MODELDATA_SUCCESS = 'FETCH_MODELDATA_SUCCESS';
// export const FETCH_MODELDATA_ERROR = 'FETCH_MODELDATA_ERROR';

// function fetchmodeldataending() {
//     return {
//         type: FETCH_MODELDATA_PENDING
//     }
// }

// function fetchmodeldataSuccess(MODELDATA) {
//     return {
//         type: FETCH_MODELDATA_SUCCESS,
//         modeldata: modeldata
//     }
// }

// function fetchmodeldataError(error) {
//     return {
//         type: FETCH_MODELDATA_ERROR,
//         error: error
//     }
// }

