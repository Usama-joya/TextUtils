import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const toLower = word.toLowerCase();
        return toLower.charAt(0).toUpperCase() + toLower.slice(1);

    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        
    </div>
  )
}
