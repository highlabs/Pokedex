import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <div className="row" style={this.props.style}>
                <div className="col-md-12">
                    <div className="table-responsive">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    {
                                        this.props.headers.map((e, i) => {
                                            return(
                                                <th key={i}>{e}</th>
                                            );
                                        })
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.body.map((e, i) => {
                                        return(
                                            <tr key={i}>
                                                <td>{e}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;