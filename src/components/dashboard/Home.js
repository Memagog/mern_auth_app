
import React,{ Component } from "react";


import { connect } from "react-redux";

import {personsFetchData} from "../../actions/personsFetch";
class Checkbox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
          Check Me!
        </label>
      );
    }
  }
class Home extends Component {
  
    componentDidMount(){
        this.props.fetchData("http://localhost:5000/api/users/home");
        
    }
   
    
  render() {
      
    
        return (
          <div>
            
                                     
            <table class="table table-dark">
                  
                <thead>
                                    <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">checkbox</th>
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
                                    <td>    
                                     
                                    </td>
                                    </tr>
                                    
                                </tbody>                              
                        )
                        
                    })}
                 
              </table>   <label> <Checkbox/></label>
             
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

  
  
  
  
 
  