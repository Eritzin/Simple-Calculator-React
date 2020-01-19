import React from 'react';
import { NUMBERS } from "./data.js"


class Buttons extends React.Component {

    buttons = () => {
        const displayNumbers = [];
        const numbers = new Map(NUMBERS.map(i => [i.id, { id: i.id, name: i.name, operator: i.operator }]))
       
        numbers && numbers.forEach(i => { displayNumbers.push( <button className={"button"+i.id} key={i.id}  onClick={()=>this.props.onClick(i.operator)} >{i.name}</button>) })
    
        
        console.log(displayNumbers)

        return displayNumbers

    }

    render() {

        return <div  className="keyboard">{this.buttons()}</div>
       
    }


}

export default Buttons