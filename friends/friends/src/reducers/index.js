import { GET_FRIENDS, NEW_FRIEND, DELETE_FRIEND, UPDATE_FRIEND } from '../actions';

const friendsReducer = (friends = [], action) => {
    switch(action.type) {
        case GET_FRIENDS:
            return action.payload.data;
        case NEW_FRIEND:
            return action.payload.data;
        case UPDATE_FRIEND:
            return action.payload.data;
        case DELETE_FRIEND:
            return action.payload.data;
        default:
            return friends;
    }
};


export default friendsReducer;