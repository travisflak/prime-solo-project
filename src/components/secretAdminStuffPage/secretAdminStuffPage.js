import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import swal from 'sweetalert';


const trashAlt = <FontAwesomeIcon icon={faTrashAlt} />

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class admin extends Component {

componentDidMount() {
  this.fetchUser();
  }

  fetchUser = () => {
    this.props.dispatch({
      type: 'GET_USER'
    })
  }

  //delete function for deleting a user
  deleteUser(deletingUser) {
    swal({
        title: "Are you sure?",
        text: "Are you sure you want to delete this User?",
        icon: "info",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) { this.props.dispatch({type: 'DELETE_USER', payload: {id: deletingUser}})
          swal("Poof! the User is now deleted!", {
            icon: "success",
          });
        } else {
          swal("The User is safe!");
        }
      });

}

  render() {
    return (
      // <div>
      //   <h2>{this.state.heading}</h2>
      // </div>

      <ol>
        {/* {JSON.stringify(this.props.store.fetchUsers)} */}
        {/* //map through graoceryItem */}
        {this.props.store.fetchUsers.map((user) => {
                console.log(user);
                
                return(
                
                <li key={user.id}>{user.username}
                    <Button className="deleteButton" onClick={() => this.deleteUser(user.username)}>Delete User
                    <span className="deleteTrashIcon">{trashAlt}</span></Button>
                    <hr/>
                </li>)
                
            })}
      </ol>
    );
  }
}

export default connect(mapStoreToProps)(admin);