import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../reducers/Employee'


function GenerateEmployees(users){
    if(users !== undefined){

        if(users.length > 0){
            let x = 1;
            const mappedUsers = users.map(m => {
                return (
                    <tr key={m.id}>
                        <td>{x++}</td>
                        <td>{m.name}</td>
                        <td>{m.title}</td>
                    </tr>                    
                )
            });
            return mappedUsers;
        }
    }
}

const Home = props => (
    <div>        
        <button type="button" onClick={props.getEmployee}>Generate</button>
        <table className="table table-condensed table-bordered">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Name</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {GenerateEmployees(props.employees)}
            </tbody>
        </table>
    </div>
)
export default connect(state => state.employee, 
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Home)