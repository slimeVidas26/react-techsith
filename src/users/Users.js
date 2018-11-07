import React , {Component , Fragment} from 'react';
import User from './User';
import UniqueId from 'react-html-id';



class Users extends Component{

    constructor() {
        super();
        UniqueId.enableUniqueIds(this);
        this.state = {
            users: [

                {
                    id: this.nextUniqueId(),
                    name: 'John',
                    age: 25
                }, {
                    id: this.nextUniqueId(),
                    name: 'Peter',
                    age: 27
                }, {
                    id: this.nextUniqueId(),
                    name: 'Kim',
                    age: 23
                }
            ],

            title: "Users list"
        }
        //console.log(this.state)
    }

// ***************************
// THE DELETE USER METHOD
// ***************************

    deleteUser = (index, e) => {
      
        //console.log("this", this)
        //console.log('delete user ' + this.state.users[index].name);
        const users = this.state.users;
        const afterDelete = users.filter((user, i) => index !== i);
        //console.log(afterDelete);
        this.setState({users: afterDelete});
    }

// ***************************
// THE CHANGE USER NAME  METHOD
// ***************************

    changeUserName = (id, e) => {

        //on cherche l'index du user dont l'id = au parametre id
        const index = this.state.user.findIndex(user => user.id === id);
        //console.log('index' , index) on duplique l'objet user
        const user = Object.assign({}, this.state.users[index]);
        //console.log('user',user)
        user.name = e.target.value;
        //console.log('user.name',user.name)
        const users = Object.assign([], this.state.users);
        //console.log('users',users)
        users[index] = user;
        this.setState({users: users})
    }

    render() {
        if (this.state.users.length === 0) {
            return (
                <div className = "no-user">  <h1>No users</h1><br/></div>
                  
                   )
           } else {
            return (
              <Fragment>
                    <h1>{this.state.title}</h1>
                    
                    <ul>
                        {this.state.users.map((user, index) => {
                                return (
                                    <User
                                        key={user.id}
                                        age={user.age}
                                        delEvent={this.deleteUser.bind(this, index)}
                                        changeEvent={this.changeUserName.bind(this, user.id)}>
                                        {user.name}
                                    </User>
                                )
                            })
                         }

                    </ul>


           </Fragment>    
          )
        }
    }
}

export default Users