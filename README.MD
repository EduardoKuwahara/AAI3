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
Aqui está uma breve descrição do que cada rota faz no código fornecido:

Rota GET /:

Exibe a lista de tarefas na página principal e se tiver duplicação de tarefas retorna uma mensagem de erro.

Rota GET /tarefa/nova:

Exibe o formulário para adicionar uma nova tarefa.

Rota POST /tarefa:

Recebe os dados do formulário e verificar se existe alguma tarefa com o mesmo nome, 
caso isso ocorra ela redireciona o usuário para a página principal com uma mensagem de erro,
se não adiciona a tarefa na lista de tarefas.

Rota GET /tarefa/:id/editar:

Exibe o formulário para editar uma tarefa existente, identificada pelo id,
Se existir um nome duplicado, exibe a mensagem de erro, se tudo der certo,
adiciona para lista principal e manda para a página principal.

Rota POST /tarefa/:id/editar:

Recebe os dados editados de uma tarefa e verifica se o novo nome já existe,
Se já existir em outra tarefa, redireciona para a página de edição com uma mensagem de erro.

Rota POST /tarefa/:id/excluir:

Exclui uma tarefa da lista com base no id e redireciona para a página principal.

Rota GET /tarefas/true:

Filtra e exibe apenas as tarefas concluídas (com status = true).
Rota GET /tarefas/false:

Filtra e exibe apenas as tarefas pendentes (com status = false).

</details>
<br>
