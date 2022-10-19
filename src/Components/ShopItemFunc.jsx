import React from "react";
import ReactDOM from 'react';

export default function ShopItemFunc(props) {
    return (
        <div>
            <h2>{props.brand}</h2>
            <h1>{props.title}</h1>
            <h3>{props.description}</h3>
            <div>{props.descriptionFull}</div>
            <div>
                <div>{props.currency}</div>
                <div>{props.price}</div>
            </div>
        </div>
    )
}