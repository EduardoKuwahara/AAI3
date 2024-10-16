# Como rodar

## 1º Passo: Clonando o repositório

<details>
  <summary><b>Clique aqui</b></summary>

  Para clonar o projeto e utilizá-lo em seu computador, siga os seguintes passos:
  
  1. Crie uma pasta onde deseja armazenar o projeto, e então abra-a e clique na url da pasta, ou então utilize o atalho `Ctrl+L` para selecionar a url, e escreva 'cmd' para abrir o prompt de comando.
  
  Um prompt de comando irá se abrir, e então execute o comando abaixo:
  
  ```
  git clone https://github.com/EduardoKuwahara/AAI3.git
  ``` 

</details>
<br>

## 2º Passo: Instalando de pendências

<details>
  <summary><b>Clique aqui</b></summary>

  1. Após a clonagem, clique com o botão direito na pasta e selecione a opção de abrir com o Terminal, e insira os seguintes comandos :

  ```
  cd AAI3
  npm init (confirme todas as perguntas)
  npm install express
  npm install express ejs body-parser method-override
  ```

</details>
<br>

## 3º Passo: Iniciando aplicação

<details>
  <summary><b>Cliqui aqui</b></summary>


  Com as dependências instaladas e dentro da pasta AAI3, basta iniciar a aplicação com o seguinte comando:
  ```
  node app.js
  ```
  Para acessar a aplicação basta colocar o seguinte link em seu navegador: http://localhost:3001
  Para fechar a aplicação, basta pressionar as teclas "Ctrl+C"
  </details>
  <br>

## Explicando rotas:

<details>
  <summary><b>Clique aqui</b></summary>

  1. Ainda dentro do ambiente virtual e dentro da pasta src, execute o seguinte comando:
  ```
  flask run
  ```

  2. Por fim, entre no link que aparecerá no cmd copiando e colando ele no seu navegador de preferência, ou então simplesmente clique aqui: <a href="http://127.0.0.1:5000">http://127.0.0.1:5000</a>

  3. Após finalizar o uso do nosso site, para sair do ambiente virtual, no terminal, execute o atalho `Ctrl+C` para finalizar o serviço do Flask, e então execute o seguinte comando:
  ```
  deactivate
  ```

</details>
<br>
