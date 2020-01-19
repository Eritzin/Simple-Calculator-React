import React, {Component} from 'react';

/*class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button name="CE" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button name="C" onClick={e => this.props.onClick(e.target.name)}>C</button><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br/>


                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br/>
            </div>
        );
    }
}


export default KeyPadComponent;*/

export const NUMBERS=[
    { id: 1, name: "C", operator: "C" },
    { id: 18, name: "( ", operator: "(" },
    { id: 19, name: ")", operator: ")" },
    { id: 2, name: "÷", operator: "/" },
    { id: 3, name: "7",　operator: "7" },
    { id: 4, name: "8",　operator: "8"},
    { id: 5, name: "9",　operator:"9"},
    { id: 6, name: "×", operator: "*" },
    { id: 7, name: "4",　operator: "4"},
    { id: 8, name: "5",　operator: "5" },
    { id: 9, name: "6",　operator:"6" },
    { id: 10, name: "-", operator: "-" },
    { id: 11, name: "1",　operator:"1" },  
    { id: 12, name: "2",　operator:"2" },
    { id: 13, name: "3",　operator:"3"},
    { id: 14, name: "+", operator: "+" },
    { id: 15, name: "0", operator: "0" },
    { id: 16, name: ",", operator: "."},
    { id: 17, name: "=", operator: "=" },
   
    
    
   
   
   
   
   
    
]