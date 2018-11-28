import React from 'react'
import ListLifting from './ListLifting';

class Lifting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            leftList: [1, 2, 3, 4, 5],
            rightList: [6, 7, 8, 9, 10]
        }
    }
    render() {
        return (
            <React.Fragment>
                <ListLifting class='left' onChange={this._handleListEdit(true)} list={this.state.leftList} />
                <ListLifting class='right' onChange={this._handleListEdit(false)} list={this.state.rightList} />
            </React.Fragment>
        );
    }

    _handleListEdit = (cond) => (item) => {
        if (cond && this.state.leftList.length > 1) {
            this.changer(this.state.leftList, this.state.rightList, item, cond);
        } else if (!cond && this.state.rightList.length > 1) {
            this.changer(this.state.rightList, this.state.leftList, item, cond);
        }
    }
    changer = (mainList, otherList, item, cond) => {
        otherList.push(Number(item));
        mainList.splice(mainList.indexOf(Number(item)), 1);
        cond ? this.setState({leftList: mainList,rightList: otherList}) : this.setState({leftList: otherList,rightList: mainList})
    }
}

export default Lifting;