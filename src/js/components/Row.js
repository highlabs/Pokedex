import React from 'react';

class Row extends React.Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return(
            <div className="row" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }
}

export default Row;