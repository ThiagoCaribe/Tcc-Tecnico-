import styled  from "styled-components";

const Container = styled.div`
            min-height: 100%;
            background-image: url('/assets/images/bacckground.svg');
            background-color: #125375;
            font-family: "Rowdies";
            
        *{
            box-sizing: border-box;
            margin: 0;
            
        }
        .conteudo{
            background-color:  rgba(18, 23, 43, 0.5);
            border-radius: 2em;
            padding: 1.5em;
            margin: 1.5em;
            min-height: 65vh;

        }
        .titulo{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 1.5em;
            margin-top : 1em;
        }
        .th1{
            color: white;
        }
        .trilhaM{
            color: white;
            font-size: 0.7em;
        }
        .container-cont{
            display: flex;
            flex-direction: row;
            //margin: 1em;
            
        }
        .tabela{
            width: 75vw;
            
        }
        .cupom{
              width: 25vw;
              text-align: center;
            
        }
        .inputC{
            margin-top: 20em;
        }
        .input input{
            height: 2em;
            width: 15em;
            border-radius: 0.5em;
            background: #7CC3DF;
            border: none;
        
        }

        .inputcupom input{
            height: 2em;
            width: 15em;
            border-radius: 0.5em;
            background: #7CC3DF;
            border: none;
        }

        .inputcupom{
            margin-left: -2em;

        }
        .bimg{
            width: 1.5em;
            height: 1.5em;
            margin: 1em;
            border-radius: 50vh;
            background: turquoise;
            border: none;
        }
        .brem{
            width: 2.2em;
            height: 2em;
            border-radius: 50vh;
            background: white;
            border: none;
            
        }
        .inputC{
            color: white;
            
        }
        
        .quadc{
            margin-bottom: 3em;
        }
        .btns{
                margin-top: 1em;
                display: flex;
                flex-direction: row;
        }
        .btnss{
            border: #1FB5CD;
            background: #1FB5CD;
            padding: 0.5em;
            color: white;
            border-radius: 0.3em;
            width: 5vw;
            margin-right: 1em;
        }
        .th2{
            color: white;
            text-align: center;
            margin-bottom: 1em;
            width: 15vw;
        }
        .th2 h2{
            font-size: 2em;
            border-bottom:1px solid white ;
        }
        .quadb{
            display: flex;
            flex-direction: column;
            margin-top: 9em;
            
        }
        .tllivro2{
      display: flex;
      flex-direction: row;
    font-family: 'Rowdies';
color: white;
font-size: 20px;
margin-left: 2em;
margin-top: 3.5em;
cursor: pointer;
}
        .btnf{
            border: #1FB5CD;
            background: #1FB5CD;
            padding: 0.5em;
            color: white;
            width: 15vw;
            text-align: center; 
            margin-top: 1em;     
            border-radius: 0.3em;
        }
        .quadb a{
            color:white;
            text-decoration:none;
        }
        table{
            width: 60vw;
            border-collapse: collapse;
            border-spacing: 2em;
            justify-content: center;
            color: white;
        
        }
        tr{
            font-size: 20px;

        }
        thead{
            border-bottom:  2px solid white;
            color: white;
            margin: 1em;
        
        }
        tbody{
            border-top:  1px solid white;
            border-right: 1px solid white;
        }
        td{
           height: 1em;
           text-align: center;
        }
      
`

export {Container}