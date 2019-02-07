import React from 'react';
import Row from './Row';
import Col from './Col';
import Table from './Table';
import '../../css/pokeCelula.css';

class PokeDetalhes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Row>
            <div className="text-center" 
                style={{
                    marginTop:'10px', 
                    width : '100%', 
                    backgroundColor : 'black',
                    height : '140px'
                }}
            >
                <img
                    className='poke-cell' 
                    src={this.props.pokeFoto} 
                    alt={this.props.pokeNome}/>
            </div>
            <Row style={{fontSize : '20px'}}>
                <Col md={4} >
                    <p><b>Nome:&nbsp;</b>{this.props.pokeNome}</p>
                </Col>
                <Col md={3} >
                    <p><b>Peso:&nbsp;</b>{this.props.pokePeso}</p>
                </Col>
                <Col md={2} >
                    <p><b>Altura:&nbsp;</b>{this.props.pokeAltura}</p>
                </Col>
            </Row>
            <Row>
                <div style={{marginTop:'30px'}}></div>
                <Col md={6}>
                    {
                        this.props.pokeGolpes.length > 0 &&
                        
                        <Row>
                            <Col md={12}>
                                <label htmlFor="">Lista de movimentos</label>
                                <Table headers={['Nome']} body={this.props.pokeGolpes} style={{height:'200px', overflowY:'auto'}}/>
                            </Col>
                        </Row>
                    }
                </Col>
                <div style={{marginTop:'30px'}}></div>
                <Col md={6}>
                    {
                        this.props.pokeTipos.length > 0 &&
                        <Row>
                            <Col md={12}>
                                <label htmlFor="">Lista de Tipos</label>
                                <Table headers={['Nome']} body={this.props.pokeTipos} style={{height:'200px', overflowY:'auto'}}/>
                            </Col>
                        </Row>
                    }
                </Col>
            </Row>
        </Row>
        );
    }
}

export default PokeDetalhes;