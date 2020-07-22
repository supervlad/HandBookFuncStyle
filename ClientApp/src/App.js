import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { HeaderTable } from "./components/HeaderTable";
import { ItemList } from "./components/ItemList";
import { PaginationBox } from "./components/PaginationBox";
import Context from "./components/Context";
import './custom.css'

const App = () => {

    const amountPage = 3;
    const handBookList = [
        { Id: 1, Text: 'Директор' },
        { Id: 2, Text: 'Куратор' },
        { Id: 3, Text: 'Андеррайтер' },
        { Id: 4, Text: 'Сотрудник СБ' },
        { Id: 5, Text: 'Начальник Отдела' },
        { Id: 6, Text: 'Пользователь' }];

    const [itemList, setItemList] = useState(handBookList);
    const [direction, setDirection] = useState(1);

    const addItem = inputValue => {
        const lastItem = itemList[itemList.length - 1];
        var lastId = lastItem.Id > 0 ? lastItem.Id : 0;
        setItemList(itemList.concat([{ Id: lastId + 1, Text: inputValue }]));
    }

    const updateItem = (id, e) => {

        const cloneItemList = [...itemList];
        const index = itemList.findIndex(item => { return item.Id === id });
        const elem = itemList.find(el => { return el.Id === id });
        elem.Text = e.target.value;
        cloneItemList[index] = elem;
        setItemList(cloneItemList);
    }

    const removeItem = itemId => {
        setItemList(itemList.filter(item => item.Id !== itemId));
    }

    const sortItem = () => {

        const cloneItemList = [...itemList];
        const sortedList = cloneItemList.sort((a, b) => {
            return a.Text > b.Text ? direction : direction * -1;
        });
        setItemList(sortedList);
        setDirection((-1) * direction);
    }

    const searchItem = value => {
        if (value.trim()) {
            let filteredList = handBookList.filter(item => {
                return item.Text.toLowerCase().includes(value.toLowerCase());
            });

            if (filteredList.length === 0) {
                filteredList = handBookList;
            }
            setItemList(filteredList);
        } else {
            setItemList(handBookList);
        }
    }

    const showCurrentPage = value => {

        const itemPerPage = handBookList.length / amountPage;
        const endItem = itemPerPage * value;
        const beginItem = endItem - itemPerPage;
        const filteredList = handBookList.slice(beginItem, endItem);
        setItemList(filteredList);
    }

    useEffect(() => {
            console.log('item', itemList);
        },
        [itemList]);

    return (
        <Context.Provider value={{ removeItem, updateItem }}>
        <Container>
            <div className="App">
                <h1>Согласующие</h1>
                    <HeaderTable onCreate={addItem} onSort={sortItem} onSearch={searchItem} />
                    {ItemList.length ? (< ItemList itemList={itemList} />) : (<p>Справочник пуст!</p>)}
                    <PaginationBox showCurrentPage={showCurrentPage} amountPage={amountPage} />
            </div>
        </Container>
        </Context.Provider>
    );
}

export default App
