import React, { useContext } from "react";
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Context from "./Context";

export const Item = props => {
    const { removeItem, updateItem } = useContext(Context);
    return (
        <div>
            <TextField variant="outlined" value={props.item.Text} onChange={updateItem.bind(null, props.item.Id)} />
            <Link href="#" onClick={removeItem.bind(null, props.item.Id)} style={{ display: 'inline-block', marginTop: '15px' }} >
                <DeleteForeverIcon />
            </Link>
        </div>
    )
}