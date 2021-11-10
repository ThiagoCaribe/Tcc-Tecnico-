import { ContainerAdmpedidos } from "./adm_pedido.styled"
import Cabecalho from "../../components/Common/cabecalhoperfil/nav";
import Rodape  from "../../components/Common/rodape/redape";
import Barralat from "../../components/Common/barra_lateal_perfi";


export default function Adm_pedidos() {
    return (
        <ContainerAdmpedidos> 
                    <Cabecalho />                    
                    <div className="conteudo">
                        <div className="box_g">
                        <Barralat />
                            <div className="conteudo_direito">
                                <div className="box">
                                   <div className='aux'> 
                                        <div className="titulo">
                                            <div className="pedidos_img"><img src="./assets/images/pedidos.svg" alt=""/></div>
                                            <div className="pedidos"> Pedidos </div>
                                        </div>
                                        <div className="hp1-busca">
                                            <div className="divBusca">
                                                
                                                <input type="text" id="txtBusca" placeholder="Pesquisar..." />
                                                <button><img src="./assets/images/Pesquisa.svg" id="btnBusca" alt="Buscar..." /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <table className ="table-user">
                                        <thead>
                                            <tr>
                                                <th> ID </th>
                                                <th> Cliente </th>
                                                <th> Livro </th>
                                                <th> Endereço </th>                                            
                                                <th> Total </th>
                                                <th> Situação do Pedido </th>
                                                <th className="a"> </th>
                                                <th className="a"> </th>
                                                <th className="a"> </th>
                                                <th className="a"> </th>
                                            </tr>
                                        </thead>
                                
                                        <tbody>
                                            <tr >
                                                <td> </td>
                                                <td> </td>
                                                <td> </td>
                                                <td> </td>
                                                <td > </td>
                                                <td > </td>
                                                <td > </td>
                                                <td > </td>
                                                <td> <button> <img src="./assets/images/editar.svg" alt="" /> </button> </td>
                                                <td className = "aa"> <button> <img src="./assets/images/Errado.svg" alt="" /> </button> </td>
                                            </tr>
                                            
                                        </tbody> 
                    
                                    </table>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <Rodape />
    </ContainerAdmpedidos>
)}
