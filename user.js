//USING FUNCTION COMPONENTS
import React,{useState, useEffect} from "react";

 const User = (props) => {
      //value
    //the function to update the state
    const [planet, setPlanet] = useState("earth");
   
    useEffect(() =>{ //used to update any values or side effects
        
        console.log("Components Mounting");
    },[]);//[] -> to make sure the things are not repeated


    //componentDidUpdate
    useEffect(() => {
        console.log("Planet Changes");
    },[planet]);



    console.log(planet);
    return (
   <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => setPlanet("Pluto")}>{planet}</button>
    </div>
    );
 }   




export default User;



















/*const User = (props) => {
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default User;

//props -> Properties/parameters ->used to dynamically render things 
//USING CLASS COMPONENTS
import React from "react";

class User extends React.Component{
          constructor(props) {
             super(props);

             this.state = {
                 planet:"Earth"
             };
             console.log("Hey I am from constructor");
        }
        
        componentDidMount() {
            this.setState({planet:"Jupiter"}); //setState->says the value you want to update
            console.log("Hey I am from componentDidMount");
           }

           shouldComponentUpdate(nextProp,nextState) {
               console.log("Iam from shouldComponentUpdate");
               console.log({
                   nextProp,
                   nextState
               });
               return true;
           }
           getSnapshotBeforeUpdate(prevProp,prevState) {
            console.log("Iam from shouldComponentUpdate");
            console.log({
                prevProp,
                prevState
           });
           return true; //true -> we have updated ,so this step has to be excuted and not to be skipped
           }//false ->means skip the step

           componentDidUpdate() {
               console.log(this.state);
           }

            render() {//logic
                console.log("Hy I am from rendered");
                  return(
              <div>
              <h1>{this.props.name}</h1>
              <p>{this.props.description}</p>
              <h4>{this.state.planet}</h4>
          </div>
        );
    }
}
//State ->A set of data that an individual component holds
export default User;  
*/

//LIFE CYCLE METHODS
//1.MOUNT ->The component is initially rendered in the DOM
//1.a.Constructor  ,
//1.b.Render ,
//3.c.componentDidMount->sideEffects (get explore repos,activities,links)
//2.UPDATE ->The component is being updated
//2.a.Constructor , 
//2.b.shouldComponentUpdate(nextProp,nextState) ->returns true or false
//2.c.render()
//2.d.getSnapshotBeforeUpdate(prevProp,prevState)->returns true or false
//2.e.componentDidUpdate()
//3.UNMOUNT -> The component is removed from the DOM

//State
//React 16
//Hooks -> Power to your functional components
//useState()

//CLASS-BASED COMPONENTS
/*The main feature of class-based components that distinguish them from functional components
 is that they have access to a state which dictates the current behavior and appearance of the component.
  This state can be modified by calling the setState() function. One or more variables,
 arrays, or objects defined as part of the state can be modified at a time with the setState() function.  */

//FUNCTIONAL COMPONENTS
/*Functional components are some of the more common components that will come across while working in React.
 These are simply JavaScript functions.
 We can create a functional component to React by writing a JavaScript function. */

 