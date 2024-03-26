import React, {useState} from 'react';

export const Array = () => {

const [items,setItems] = useState(['bat','ball','wicket','pads','gloves']);


    function addItems(){
        const itemToAdd = document.getElementById('itemInput').value;
        setItems(i => [...i, itemToAdd]);
    }

    function removedItem(index){
        setItems(items.filter((_e, i) => i!== index));
    }

    return(
        <div>
            <p>Item in Array</p>
            <ul>
                {items.map((item,index)=>
                <li key={index}
                    onClick={()=>removedItem(index)}>{item}</li>
                )}
            </ul>

            <input type = 'text' id = 'itemInput' placeholder = 'enter here'></input>
            <button onClick={addItems}>Add item</button>
        </div>
    )
}

