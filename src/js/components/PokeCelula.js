import React from 'react';
import '../../css/pokeCelula.css';

class PokeCelula extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    onClick() {
        this.props.onClick();
    }

    render() {
        return (
            <button 
                style={this.props.style} 
                className="poke-cell"
                onClick={() => this.onClick()}
            >
            </button>
        );
    }
}

export default PokeCelula;