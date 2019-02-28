import {ADD_TODO,REMOVE_TODO,GET_BY_ID, UPDATE} from '../actions/actionTypes'

const initialState = {
    items : []
};

function todo(state = initialState, action){
    switch (action.type){
        case ADD_TODO: {
            console.log(state);
           if(Array.isArray(action.payload)) {
               return {
                   ...state,
                   items: [...action.payload]
               }
           }else{
               return {
                   ...state,
                   items: [...state.items , action.payload]
               }
           }
        }
        case REMOVE_TODO:
            let arrAfterRemove = [...state.items];
            console.log(action);
            state.items.forEach(item=> {
                if(item.id===action.elementId){
                    arrAfterRemove.splice(action.key,1)
                }
            });
            console.log(arrAfterRemove);
            return {
                ...state,
                items: arrAfterRemove
            };
        case GET_BY_ID:
            console.log(action.element);
            return {
                element: action.element
        };
        case UPDATE:
            console.log(action);
            action.element.title = action.text;
            return {
                element: action.element
            };
        default: return state;
    }
}

export default todo;