import React, {useEffect, useState} from 'react';
import Bars from './Bars/Bars';
import Controls from './Controls/Controls';
import Loader from '../Loader/Loader';
import styles from './ProgressBars.module.scss';
const axios = require('axios');

function ProgressBars() {
    const [data, setData] = useState({});
    const [selectedBar, setSelectedBar] = useState(0);
    const [barValues, setBarValues] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get('http://pb-api.herokuapp.com/bar')
        .then(
            response => {
                setData(response.data);
                setBarValues(response.data.bars);
                setIsLoading(false);
            },
            error => console.log(error))
    },[])

    
    // Update selected bar
    const onSelectBar = (id) => {
        setSelectedBar(parseInt(id, 10))
    }

    // Update bar value
    const onControlButtonClick = (value) => {
        const values = [...barValues];
        values[selectedBar] + value > 0 ? values[selectedBar] += parseInt(value, 10) : values[selectedBar] = 0
        setBarValues(values);
    }

    return(
        <div className ={styles.ProgressBarsWrapper}>
            <h1 className="Title">Progress Bars</h1>
            {
                isLoading ? <Loader/> : 
                <>
                    <Bars bars={barValues ? barValues : []} limit={data.limit}/>
                    <Controls 
                        buttons = {data.buttons ? data.buttons : []} 
                        limit = {data.limit} total={data.bars ? data.bars.length : 0} 
                        onSelectBar={onSelectBar}
                        onControlButtonClick={onControlButtonClick}/>
                </>
            }
        </div>
    )
}

export default ProgressBars;