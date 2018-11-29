import React, { Component } from 'react';


class ListNumbers extends Component {

  render () {
    const {title, handler, numbers} = this.props;
    const s = title === 'Left' ? 'animated slideInRight' : 'animated slideInLeft';
    const list = numbers.map((i)=>{
        return <li className={s} key={i}>{i}</li>
    })
    return(
        <div className='block-number'>
            <h3>{title} List</h3>
            <ul onClick={handler(title)}>
                {list}
            </ul>
        </div>
    )
  }
}

export default ListNumbers
