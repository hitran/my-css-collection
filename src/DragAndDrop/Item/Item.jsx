import React from 'react';
import styles from './Item.module.scss';

export default function Item(props){

    const handleDrag = (e) => {
        e.dataTransfer.setData("text", e.target.id)
        console.log(e.target);
    }

    const handleDrop = (e) => {
        e.preventDefault()
        let data = e.dataTransfer.getData("text");
        console.log(data);
        console.log(e)
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    const handleDragEnd = (e) => {
        console.log(e)
    }

    return (
        <div 
        id ={props.id} 
        className={styles.item} 
        draggable="true" 
        onDragStart={handleDrag} 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}>

            <h4>{props.label}</h4>
            <p>{props.priority}</p>
            <p>{props.id}</p>
        </div>
    )
}