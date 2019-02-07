import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    css () {
        let css ='btn form-control '+this.props.classe

        return css;
    }

    onClick() {
        if(typeof this.props.onClick === 'function') {
            this.props.onClick();
        }
    }

    render() {
        return(
            <button className={this.css()} onClick={() => this.onClick()}>
                {this.props.children}
            </button>
        );
    }
}

Button.defaultProps = {
    classe : 'btn-primary',
}

export default Button;