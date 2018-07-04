import axios from 'axios'
const GET_EMPLOYEE = "GET_EMPLOYEE_FULFILLED";
const ADD_EMPLOYEE = "ADD_EMPLOYEE_FULFILLED";
const DELETE_EMPLOYEE = "DELETE_EMPLOYEE_FULFILLED";

const initState = {
    employees:[]
};

export const actionCreators = {
    getEmployee: () => (dispatch) => {
        axios.get("http://localhost:62062/api/values")
        .then((res) => {
            dispatch({type: GET_EMPLOYEE, users:res.data}) 
        })
    }
}


export const reducer = (state = initState, action) => {
    state = state || initState
    switch(action.type){
        case (GET_EMPLOYEE):{
            return {...state, employees: action.users}
        }
        default:{
            return state;
        }        
        return state;
    }
}