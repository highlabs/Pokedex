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
            <div className="col-md-4 col-xs-6 col-sm-4">
                <button 
                    style={this.props.style} 
                    className="poke-cell"
                    onClick={() => this.onClick()}
                >
                </button>
            </div>
        );
    }
}

export default PokeCelula;