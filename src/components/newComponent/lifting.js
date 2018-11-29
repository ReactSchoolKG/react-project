import React from 'react';

class Lifting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftLiist: [0, 1, 2, 3, 4],
            rightList: [5, 6, 7, 8, 9]
        }
    }
    render() {
        return <div>
            <div>
            <h1>
                {this.state.leftLiist}
            </h1>
            </div>
            <div>
            <h1>
                {this.state.rightList}
            </h1>
            </div>
                </div>
    }
}

export default Lifting;