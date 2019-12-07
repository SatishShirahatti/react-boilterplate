// import {FETCH_MODELDATA_PENDING, FETCH_MODELDATA_SUCCESS, FETCH_MODELDATA_ERROR} from 'actions';

// function fetchModel() {
//     return dispatch => {
//         dispatch(fetchmodeldataending());
//         fetch('https://exampleapi.com/products')
//         .then(res => res.json())
//         .then(res => {
//             if(res.error) {
//                 throw(res.error);
//             }
//             dispatch(fetchmodeldataSuccess(res.modeldata));
//             return res.products;
//         })
//         .catch(error => {
//             dispatch(fetchmodeldataError(error));
//         })
//     }
// }

// export default fetchModel;