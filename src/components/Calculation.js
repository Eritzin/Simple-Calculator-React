import React from 'react';
import Buttons from "./Buttons.js";

class Calculation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            result:"0"
        }
    }

    onClick = operator => {
      console.log(operator)
        if(operator === "="){
           // console.log("=")
            this.calculate()
        }
        else if(operator === "C"){
            this.reset()
            //console.log("C")
        } 
        else {

            if(this.state.result==="0"){// to show 0 for the beggining
            this.setState({
                result: operator
            }) 
              }else{
                this.setState({
                    result: this.state.result+operator
                })
            }
        }
        
    };
    
    calculate=()=>{
        console.log(this.state.result)
      this.setState({
        result:eval(this.state.result) 
      })

    }

    reset=()=>{
     this.setState({
         result:"0"
     })
    }

    render() {

        return (
            <div>
            <div>{this.state.result}</div>
            <Buttons onClick={this.onClick} />
            </div>
            )
    }
}

export default Calculation