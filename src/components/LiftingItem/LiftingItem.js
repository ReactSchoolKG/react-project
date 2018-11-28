import React from 'react';

const LiftingItem = (props) => {
    const arrayItemList = props.array.map((item) => {
        return(
            <li onClick={props.change} key={item}>{item}</li>
        );
    });
    return(
        <div className="lifting-item">
            <h3>Lifting item</h3>
            <ul>
                {arrayItemList}
            </ul>
        </div>
    );
}

export default LiftingItem;