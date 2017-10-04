import axios from 'axios';
export const GET_FRIENDS = 'GET_FRIENDS';
export const NEW_FRIEND = 'NEW_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';

export const getFriends = () => {
    const promise = axios.get('http://localhost:5000/friends');
    return {
        type: 'GET_FRIENDS',
        payload: promise
    };
};

export const newFriend = (friend) => {
    const promise = axios.post("http://localhost:5000/new-friend", friend);
    return {
        type: 'NEW_FRIEND',
        payload: promise
    };
};

export const updateFriend = (friend, i) => {
    const promise = axios.put("http://localhost:5000/update-friend", {index: i, update: friend});
    return {
        type: 'UPDATE_FRIEND',
        payload: promise
    };
};

export const deleteFriend = (index) => {
    console.log(typeof index + " = type of action's index")
    const promise = axios.delete("http://localhost:5000/delete-friend", {data:{index}});
    return {
        type: 'DELETE_FRIEND',
        payload: promise
    };
};