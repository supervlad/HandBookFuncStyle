import React from "react";
import { Item } from './Item';

export const ItemList = props => {

    return (
        <div>
            {props.itemList.map(item => (<Item key={item.Id} item={item} />))}
        </div>
    )
}