import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

export const HeaderTable = ({ onCreate, onSort, onSearch }) => {

    const [itemList, setItemList] = useState('');

    const submitHandler = event => {
        event.preventDefault();

        if (itemList.trim()) {
            onCreate(itemList);
        }
    }

    return (
        <React.Fragment>
            <TextField variant="outlined" label="Фильтр" variant="filled" style={{ display: 'inline-block', marginRight: '15px' }} onChange={event => onSearch(event.target.value)} />
            <form onSubmit={submitHandler} style={{ display: 'inline-block', marginRight: '15px' }}>
                <TextField variant="outlined" variant="filled" onBlur={event => setItemList(event.target.value)} />
                <Button variant="contained" color="primary" type="submit">Добавить</Button>
            </form>
            <Button variant="contained" color="secondary" onClick={onSort}>Сортировка</Button>
            <Box style={{ clear: 'both' }}></Box>
            <Divider style={{ margin: '10px 0 10px 0' }} />
        </React.Fragment>
    )
}