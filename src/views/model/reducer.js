
export default (state = {
  loader: false,
  testData: {},
  test: ""
}, action) => {
  switch (action.type) {
  
    case "TEST":
      return {...state, test: action.payload};
    
    case "GET_TEST_DATA_PENDING":
      return {...state, loader: true};
  
    case "GET_TEST_DATA_SUCCESS":
      return {...state, loader: false, testData: action.payload};
    
    case "GET_TEST_DATA_FAILED":
      return {...state, loader: false};
      
    default: return state;
  }
};

// import {FETCH_MODELDATA_PENDING, FETCH_MODELDATA_SUCCESS, FETCH_MODELDATA_ERROR} from './actions';

// const initialState = {
//     pending: false,
//     modeldata: [],
//     error: null
// }

// export function modeldataReducer(state = initialState, action) {
//     switch(action.type) {
//         case FETCH_MODELDATA_PENDING: 
//             return {
//                 ...state,
//                 pending: true
//             }
//         case FETCH_MODELDATA_SUCCESS:
//             return {
//                 ...state,
//                 pending: false,
//                 modeldata: action.payload
//             }
//         case FETCH_MODELDATA_ERROR:
//             return {
//                 ...state,
//                 pending: false,
//                 error: action.error
//             }
//         default: 
//             return state;
//     }
// }

// export const getmodeldata= state => state.modeldata;
// export const getmodeldataPending = state => state.pending;
// export const getmodeldataError = state => state.error;
