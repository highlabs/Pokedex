import React from 'react';

class Col extends React.Component {

    css() {
        let css = 'col-md-' + this.props.md.toString();
        css += (this.props.lg != undefined) ? ' col-lg-' + this.props.lg: ' ';
        css += (this.props.sm != undefined) ? ' col-sm-' + this.props.sm: ' ';
        css += (this.props.xs != undefined) ? ' col-xs-' + this.props.xs: ' ';
        css += (this.props.custom != undefined) ? this.props.custom : '';

        return css;
    }

    render() {
        return (
            <div className={this.css()} style={this.props.style}>
                {this.props.children}
            </div>
        )
    }
}

Col.defaultProps = {
    md : '12',
    custom : ''
};

export default Col;