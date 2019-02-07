import React from 'react';
import axios from 'axios';
import {pokeClasses} from './pokeClasses';
import Row from './Row';
import Col from './Col';
import PokeTela from './PokeTela';
import PokeDetalhes from './PokeDetalhes';
import '../../css/pokeCelula.css';

class PokeDex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeNome : '',//Aqui eu poderia ter feito um objeto :(
            pokePeso: '',
            pokeAltura: '',
            pokeTipos : [],
            pokeGolpes: [],
            pokeFoto : '',
            pokeXp : '',
            pokePaginaAtiva : 1,
            pokeItensPagina : 15,
            pokeItensTotal : pokeClasses.length,
            pokemonsPagination : [],
            estaDoArray : ''
        }
    }

    pokeFuncaoPegaDadosPokemon(e) {
        axios
          .get(`http://pokeapi.co/api/v2/pokemon/${e.id}/`)
          .then(response => {

            const tipos = response.data.types.map(e => {
                return e.type.name;
            })
            const golpes = response.data.moves.map(e => {
                return e.move.name;
            })
            
            this.setState({
                pokeNome : response.data.name,
                pokePeso : response.data.weight,
                pokeAltura : response.data.height,
                pokeTipos : tipos,
                pokeGolpes : golpes,
                pokeXp : response.data.base_experience,
                pokeFoto : response.data.sprites.front_default
            });
            
          })
          .catch(function (error) {
            alert('Houve um erro ao consultar a API');
          });
    }

    render() {
        return (
            <Row style={{height : '100px'}}>
                <Col md={10} >
                    <Col 
                        md={5} 
                    >
                        <PokeTela
                            pokeFuncaoPegaDadosPokemon={(e) => this.pokeFuncaoPegaDadosPokemon(e)}
                            pokeClasses={pokeClasses}
                        />
                    </Col>
                    <Col md={5}>
                        <PokeDetalhes 
                            pokeNome={this.state.pokeNome}
                            pokePeso={this.state.pokePeso}
                            pokeAltura={this.state.pokeAltura}
                            pokeTipos={this.state.pokeTipos}
                            pokeGolpes={this.state.pokeGolpes}
                            pokeXp={this.state.pokeXp}
                            pokeFoto={this.state.pokeFoto}
                        />
                    </Col>
                </Col>
          </Row>
        );
    }
}

export default PokeDex;