import React, { Component } from 'react'

const numbers = [1,2,3,4,5];

const ListItem=(props)=>{
     return <li>{props.value}</li>
}

const NumberList = (props)=>{
     const numbers = props.numbers;
     return(
         <ul>
         {numbers.map((number)=>
            <ListItem key={number.toString()} value={number} />
         )}
         </ul>
     )
}



class List extends Component {
    constructor() {
        super();

    }


    render() {
        return (
            <NumberList numbers={numbers} />
        )
    }
}


export default List;