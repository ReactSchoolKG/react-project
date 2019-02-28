import { REMOVE_TODO, GET_BY_ID, ADD_TODO, UPDATE} from './actionTypes'

// export const saveList = element => ({
//     type: SAVE_LIST,
//     payload: element
// })

export const addTodo = (addElement) =>({
    type:ADD_TODO,
    payload: addElement
});


export const getById = (element) =>({
  type: GET_BY_ID,
  element
});

export const updateItem = (element, text) =>({
    type: UPDATE,
    element,
    text
});

export const removeTaskById= (elementId, key)=>({
    type: REMOVE_TODO,
    elementId,
    key
});