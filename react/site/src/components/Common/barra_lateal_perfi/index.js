import { Link } from "react-router-dom";
import  {Container}  from "./styled";

export default function Barralat(){
     return(
        <Container>
            <div className="informacao">
                <div className="botao_e"><button>< Link to='/adm_livro'>Livros</Link></button></div>
                <div className="botao_e"> <button>< Link to='/perfil_adm_c'>Cupons e <br/>promoções</Link></button> </div> 
                <div className="botao_e"><button>< Link to='/perfil_adm'>Suas informações</Link></button></div>
                <div className="botao_e"><button><Link to='/adm_pedido'>Pedidos</Link></button></div>
            </div>
    </Container>
     )
}