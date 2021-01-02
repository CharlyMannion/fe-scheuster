import React from 'react';

const Info = (props) => {
    console.log(props.value, "PROPS PAGE")
    return (
    <h1> {props.key} Info Page</h1>
    )
}

export default Info;