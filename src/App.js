import React, { Component } from 'react'

import './App.css'
import Axios from 'axios'

class App extends Component {

      state = {
        users: []
      }

      componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
          .then( response => {
            this.setState({
              users:response.data
            })
          })
        .catch(error => console.log(error))

      }
  
  render() {

   const { users } = this.state


   console.log(users)

      if(users.length === 0){
        return <h1 style = {{textAlign:"center"}}> Loading...</h1>
      }
      else{
        return(
          <div className="container">

            <p className=""> Name List:</p>

              <ul className="list-group">
                { users.map( user =>
                <li key = { user.id }  className="list-group-item">{ user.name }</li>)}                   
              </ul>

                <br></br>

            <p>Username List:</p>

              <ul className="list-group">
                { users.map( user =>
                <li key = { user.id }  className="list-group-item">{ user.username }</li>)}                   
              </ul>
         
                <br></br>

            <p>Email List:</p>   

              <ul className="list-group">
                { users.map( user =>
                <li key = { user.id }  className="list-group-item">{ user.email }</li>)} 
              </ul>
                            
          </div>
        )

    }
  }
}

export default App
