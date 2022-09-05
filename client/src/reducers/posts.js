import * as actionTypes from '../constants/actionTypes';

const reduc = ( posts = [], action ) => {
    switch (action.type) {
        case actionTypes.CREATE_POST:
            return [...posts, action.payload];
        case actionTypes.GET_POST:
            return [ action.payload ];
        case actionTypes.DELETE_POST:
            posts[0] = posts[0].filter((post) => post._id !== action.payload);
            return [...posts]
        default :
            return posts;
    }
};

export default reduc;