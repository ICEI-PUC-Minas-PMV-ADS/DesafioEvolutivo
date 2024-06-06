@import url('https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&display=swap');

body {
    height: 100vh; 
    overflow-x: hidden;
    scrollbar-width: thin; 
    scrollbar-color: #ccc #fff;
  }
  ::-webkit-scrollbar { 
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #fff;
  }
  
  .container {
    display: flex;
    cursor: pointer;
  }
  
  .cabecalho-menu {
    display: flex;
    gap: 42px;
  }
  
  .cabecalho-logo {

    height: 40px;
  }
  
  .cabecalho-menu-item {
    position: relative;
    left: 50vh;
    font-family: 'Lato', sans-serif;
    color: #FFF2E7;
    margin-top: 10px;
    font-weight: 400;
    font-size: 18px
    
  }  
  
  .cabecalho-avatar {
    position: relative;
    left: 55vh;
    padding: 1%;
    height: 45px;
    right: 10px;
  }
  
  .cabecalho-sino {
    position: relative;
    left: 56vh;
    padding: 1%;
    height: 45px;
    right: 10px;
  }
  
  .navbar {
    display: flex;
    flex-direction: row;
    align-items: right;
    justify-content: space-around;
    padding: 4px;
    background-color: #37853c;
    height: 0;
  }

  .conteudo {
  margin-bottom: 48px;
  border-top: 0.4px solid #FFF2E7;
  }

  .title-container{
    padding: 80px;
  }

  .title-container img {
    width: 20%;
    height: 40%;
  }
  
  .conteudo-principal {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  }

  .conteudo-principal-escrito {
  display: flex;
  flex-direction: column;
  gap: 32px;
  }

  .conteudo-principal-escrito-titulo {
  position: relative;
  top: -15rem;
  left: 35px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 100;
  font-size: 250%;
  color: #000000;
  }

  .conteudo-principal-escrito-subtitulo {
  position: relative;
  top: -15rem;
  left: 35px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  font-size: 23px;
  width: 500px;
  color: #000000;;
  }

  .conteudo-principal-paragrafo {
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #000000;
  } 

  .conteudo-principal-imagem {
  position: relative;
  top: -10rem;
  height: 430px;
  width: 400px;
  height: 500px;
  border: none;
  box-shadow: 4px 5px 4px rgba(0, 0, 0, 0.256);
  border-radius: 20px;
  color: #0000004a;
  }

  .conteudo-secundario {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
  }

  .conteudo-secundario-titulo {
  border-top: 0.4px solid#000000;;
  padding-top: 48px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 24px;
  color: #000000;
  margin-bottom: 16px;
  }

  .conteiner-conteudo-secudario-escrito{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 48px;
  }


  .tablet-screen{
  background-color: rgba(55, 133, 60, 0.527);

  width: 210px;
  height: 120px;
  
  box-shadow: 4px 5px 4px rgba(55, 133, 60, 0.979);
  border-radius: 20px;
  }
  .text{
    position: static;
    font-size: 14px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    width: 190px;
    height: 60px;
    margin: 10px;
    text-align: center;
    text-justify: center;

  }

  .conteudo-secundario-posicao-botao-princial {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  }

  .conteudo-secundario-escrito-botao-princial:hover {
  background-color: rgba(7, 8, 8, 0.103);
  transition-duration: 0.4s; 
  }

  .conteudo-secundario-escrito-botao-principal {
    background-color: #4CAF50;
    color: #fff;
    position: relative;
    right: 1vh;
    top: 3vh;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .background-blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(20px);
    z-index: 1;
  }

  #comment-button {
    align-items: center;
    position: relative;
    top: 8vh;
    right: 15vh;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  #comment-box {
    max-width: 500px;
    position: relative;
    top: 8vh;
    right: 30vh;
    margin: 40px auto;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: none;
  }
  
  #comment-textarea {
    width: 100%;
    height: 100px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 10px;
  }
  
  #save-button {
    background-color: #4CAF50;
    color: #fff;
    padding: 8px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-button {
    position: fixed;
    top: 40px;
    right: 5px;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 10px;
    z-index: 2;
  }
  
  .highlighted-container {
    position: relative;
    display: inline-block;
    z-index: 2;
  }

  #popup-modal p {
    margin: 20px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
  }
  
  #popup-modal button {
    background-color: #4CAF50;
    border: none;
    color: #ffffff;
    padding: 10px 22px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px 1px;
    cursor: pointer;
    border-radius: 12px;
  }
  
  #popup-modal button:hover {
    background-color: #000000;
  }
  
  .rodapé {
  background-color: #37853c;
  padding: 10px;
  text-align: center;
  color: #FFF2EF;
  }
