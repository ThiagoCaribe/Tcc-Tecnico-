import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030/adiministrador'
})



export default class Api {
    

   
    
    // lista livros pagina do adm
    async listaLivroAdm(){
        let r = await api.get(`/listaLivro`);
        return r.data;
    }
    //deletar livro 
    async deletaLivro(id){
        let r = await api.delete(`/dellivro/${id}`)
        return r.data;
    }
    //put do livro
    async atualizarLivro(id, livro, descricao, vpara,vde,datac, autor, editora, genero, disponivel, qtd, imagem, brochura, promocao){
        let pack ={
            livro : livro,
            descricao : descricao,
            vpara : vpara,
            vde : vde,
            datac : datac,
            autor : autor,
            editora : editora,
            genero : genero,
            disponivel : disponivel,
            qtd : qtd,
            imagem : imagem,
            brochura : brochura,
            promocao : promocao
            
        }
        let r = await api.put('/alterandoLivro/'+ id, pack);
        return r.data;
    }
    //parte adm 
   

   
    async cadastrarLivro(livro, descricao, vpara, vde,datac, autor, editora, genero, disponivel,qtd,imagem,brochura,promocao) {
        let naomexa = {
            livro: livro,
            descricao: descricao,
            vpara: vpara,
            vde: vde,
            datac : datac,
            autor: autor,
            editora: editora,
            genero: genero,
            disponivel:disponivel,
            qtd:qtd,
            imagem: imagem,
            brochura:brochura,
            promocao:promocao
            
        }

        let r = await api.post(`/addlivro`,naomexa);
        return r.data
    }

    async listarLivro() {
        let r = await api.get(`/addlivro/`);
        return r.data;
    }
    // cupom
    async listaCupom(){
        let r  = await api.get(`cupom`);
        return r.data;
    }
    async addCupom(nome, datac, porce ,regra){
        let cont = {
            nome:nome,
            dataduracao : datac,
            porce : porce,
            regra : regra
        }
        var r = await api.post(`/addCupom`, cont);
        return r.data;
    }
    // infomaçoes do adm v1
    async infoA() {
        let r = await api.get(`infoA`);
        return r.data;
    }

   

   
}