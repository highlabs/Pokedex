import React from 'react';
import Pagination from "react-js-pagination";
import {pokeClasses} from './pokeClasses';
import {pokeTipos} from './pokeTipos';
import sprites from '../../images/sprites.png';
import Row from './Row';
import Col from './Col';
import PokeCelula from './PokeCelula';
import Button from './Button';
import '../../css/pokeCelula.css';

class PokeTela extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            pokeNome : '',
            pokeNomePesquisa : '',
            pokeTipoPesquisa : 0,
            pokePeso: '',
            pokeAltura: '',
            pokeTipos : [],
            pokeGolpes: [],
            pokeGoto : '',
            pokePaginaAtiva : 1,
            pokeItensPagina : 9,
            pokeItensTotal : pokeClasses.length,
            pokemonsPagination : []
        }
    }

    componentDidMount() {
        this.pokeChangePageHandler(1);
    }

    pokeChangePageHandler(e) {
        
        const itensPorPagina = this.state.pokeItensPagina;
        const indiceInicio = (e - 1) * itensPorPagina;
        const indiceFim = indiceInicio + itensPorPagina;

        const pokePagination = this.props.pokeClasses.slice(indiceInicio, indiceFim);
        
        this.setState({
            pokePaginaAtiva : e,
            pokemonsPagination : pokePagination,
            pokeItensTotal : pokeClasses.length
        });

    }

    onChangeNome(e) {
        this.setState({pokeNomePesquisa:e});
    }

    onChangeType(e) {
        this.setState({pokeTipoPesquisa:e});
    }

    pesquisa() {

        if(this.state.pokeNomePesquisa === '' && this.state.pokeTipoPesquisa === '0') {
            this.pokeChangePageHandler(1);
            return;
        }

        const pokemons = pokeClasses.filter(e => {
            if(this.state.pokeTipoPesquisa === '0' || this.state.pokeTipoPesquisa === 0) {
                return e.name.indexOf(this.state.pokeNomePesquisa) !== -1;
            }
            return (
                e.type.indexOf(this.state.pokeTipoPesquisa) !== -1 &&
                e.name.indexOf(this.state.pokeNomePesquisa) !== -1
            )
        })

        if(pokemons.length > 0) {
            const itensPorPagina = this.state.pokeItensPagina;
            const indiceInicio = (1 - 1) * itensPorPagina;
            const indiceFim = indiceInicio + itensPorPagina;
    
            const pokePagination = pokemons.slice(indiceInicio, indiceFim);
            
            this.setState({
                pokePaginaAtiva : 1,
                pokemonsPagination : pokePagination,
                pokeItensTotal : pokemons.length
            });
            return;
        }
        this.pokeChangePageHandler(1);
        alert('0 resultados encontrados');
        return;
        
    }

    render() {
        return(
            <div>
                <Row>
                    <Col md={4}>
                        <label htmlFor="pesquisa">Nome</label>
                        <input 
                            id="pesquisa"
                            value={this.state.pokeNomePesquisa}
                            onChange={(e) => this.onChangeNome(e.target.value)}
                            type="text" 
                            className="form-control" 
                            placeholder={'pokeSearch'} />
                    </Col>
                    <Col md={4}>
                        <label htmlFor="tipo">Tipo</label>
                        <select 
                            className="form-control"
                            name="tipo" 
                            id="tipo"
                            value={this.state.pokeTipoPesquisa}
                            onChange={e => this.onChangeType(e.target.value)}
                        >
                            <option value={'0'}>{'Nenhum'}</option>
                            {
                                pokeTipos.map((e, i) => {
                                    return(
                                        <option key={i} value={e.id}>{e.label}</option>
                                    )
                                })
                            }
                        </select>
                    </Col>
                    <Col md={4}>
                        <label htmlFor="">&nbsp;</label>
                        <Button
                            onClick={() => this.pesquisa()}
                        >
                            <i className="fa fa-search"></i>&nbsp;Pesquisar
                        </Button>
                    </Col>
                </Row>

                {
                    this.state.pokemonsPagination.map((e, i) => {
                        const { backgroundPosition } = e;
                        const style = { backgroundImage: `url(${sprites})`, backgroundPosition };

                        return (
                            <PokeCelula 
                                key={i}
                                style={style}
                                onClick={() => this.props.pokeFuncaoPegaDadosPokemon(e)}
                            />
                        );
                    })
                }
                <Row>
                    <Col style={{margin:'0 auto'}} custom={'text-center'}>
                        <Pagination
                            firstPageText={<i className='glyphicon glyphicon-chevron-left'/>}
                            lastPageText={<i className='glyphicon glyphicon-chevron-right'/>}
                            prevPageText={<i className='glyphicon glyphicon-menu-left'/>}
                            nextPageText={<i className='glyphicon glyphicon-menu-right'/>}
                            activePage={this.state.pokePaginaAtiva}
                            itemsCountPerPage={this.state.pokeItensPagina}
                            totalItemsCount={this.state.pokeItensTotal}
                            onChange={e => this.pokeChangePageHandler(e)}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PokeTela;