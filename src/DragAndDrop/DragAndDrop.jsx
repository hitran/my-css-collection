import React from 'react';
import List from './List/List';
import data from './data.json';
import styles from './DragAndDrop.module.scss';

export default function DragAndDrop() {
    let board = { ...data };
    const lists = board.lists.map(list => <List items={list.items} label={list.list_label} key={list.list_id} id={list.list_id}/>)
    return (
        <div className={styles.board}>
            <h1>{board.board_label}</h1>
            <div className={styles.listsWrapper}>
                {lists}
                <div>Add New List</div>
            </div>

        </div>
    )
}