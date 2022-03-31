import React from 'react';

export default function Display(props) {
  if (props.val.length === 0) {
    return <></>
  }
  else if (props.val.length === 1){
    return <>
      <h1>{props.val[0].name.common}</h1>
      <h3>{"capital: " + props.val[0].capital}</h3>
      <h3>{"population: " + props.val[0].population}</h3>
      <img src={props.val[0].flags.png}></img>
    </>
  }
  else if (props.val.length > 1 && props.val.length < 10) {
    return <ul>
      {props.val.map(item => {
        return <li key={item.name.common}>{item.name.common}</li>
      })}
    </ul>
  }
  else {
    return <p>Too many matches!</p>
  }
}