
import React,{ Component } from "react";


import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {personsFetchData} from "../../actions/personsFetch";

class Home extends Component {
  
    componentDidMount(){
        this.props.fetchData("/api/users/home");
        
    }
   
    
  render() {
      
    
        return (
          <div>
               <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <div class="btn-group" role="group" aria-label="First group">
                      <button type="button" class="btn bg-dark"><Link to='/logout'>Logout</Link></button>
                      <button type="button" class="btn bg-dark"><Link to="/">Back</Link></button>
                      
                    </div>
                    <div class="btn-group" role="group" aria-label="First group">
                      <button type="button" class="btn btn-secondary">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                              </svg>
                      </button>
                      <button type="button" class="btn btn-secondary">Ban</button>
                                              <button type="button" class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                          <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg></button>
                    </div>
           
</div>
            <table class="table table-dark">
                  
                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Role</th>
                                   
                                    </tr>
                                </thead>
                             
                   { this.props.persons.map((persons, index)=>{
                      
                        return(
                           
                          
                                
                                <tbody>
                                    <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{persons.name}</td>
                                    <td>{persons.email}</td>
                                    <td>{persons.date}</td>
                                    <td>{persons.status? "Online" : "Ban"}</td>
                                    <td>{persons.roles}</td>
                                    <td>    
                                     
                                    </td>
                                    </tr>
                                    
                                </tbody>                              
                        )
                        
                    })}
                 
              </table> 
             
              </div>  
            
        );
    }
  }
 
  
const mapStateToProps = state =>{
    return{
        persons: state.persons
    };
}
const mapDispatchToProps = dispatch =>{
    return {
        fetchData: url =>{
            dispatch(personsFetchData(url));
        }
    };
}

  export default connect(
    mapStateToProps,mapDispatchToProps
  
  )(Home);

  
  
  
  
 
  