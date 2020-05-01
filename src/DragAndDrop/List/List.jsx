import React, {useState, useEffect} from 'react';
import Item from '../Item/Item';
import styles from './List.module.scss';

export default function List(props) {
    const [items, setItems] = useState([]);
    
    const onUpdateItems = (item, position) => {

    };

    useEffect(() => {
        const newItems = props.items.map(item => <Item label={item.item_label} priority={item.priority} key={`${props.id}${item.item_id}`} id={`${props.id}${item.item_id}`} onUpdateItems = {onUpdateItems}/>)
        setItems(newItems);
    },[])


    return (
        <div className={styles.list} draggable="true">
            <h3>{props.label}</h3>
            {items}
        </div>
    )
}