import React, {Component} from 'react';


class Child extends Component {

    constructor(){
        super();
        this.state = {
            name :"John"
        }
        console.log(" child constructor");
    }

    componentWillMount(){
        //only runs once
        if(window.innerWidth > 500){
            this.setState({innerWidth:window.innerWidth})
        }
        console.log(" child componentWillMount");

    }

    componentDidMount(){
        console.log("child componentDidMount");

    }
    componentWillReceiveProps(){
        console.log(" child componentWillReceiveProps");
   
    }
    shouldComponentUpdate(nextState , nextProps){
        console.log("child shouldComponentUpdate");

        return true;
    }

    componentWillUnmount(){
        console.log("child componentWillUnmount");
   
    }

    componentWillUpdate(){
        console.log("child componentWillUpdate");
  
    }

    componentDidUpdate(prevProps , prevState){
        console.log("child componentDidUpdate");
    }
    render() {
       console.log(" child render")
            return (
                <div>
               Child name : {this.props.name}
                </div>
          )
        };
    }


export default Child;
