# Forum BSI

Página de fórum construída com vue.js como resposta a um desafio do processo de
onboarding de uma empresa.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Funcionalidades e limitações

Nessa seção você encontra todas as funcionalidades que foram implementadas no
projeto, suas limitações.

### Autenticação

É possível fazer login na aplicação utilizando a sua conta do Google. As
perguntas feitas por um usuário logado exibem seu nome.

### Criação de perguntas

A aplicação permite a criação de novas perguntas no fórum, independentemente se
você está logado ou não, quando a pergunta é feita por um usuário logado seu
nome é exibido junto com a pergunta (apenas quando o componente MyQuestion tem a
prop detailed).

### Busca de perguntas

A aplicação permite que você filtre as perguntas exibidas por autor por meio da
barra de pesquisa presente no topo da página.

Inicialmente a ideia era que a busca pudesse filtrar também via o conteúdo das
perguntas, porém como a firestore não possui uma funcionalidade similiar ao
operador `LIKE` dos bancos de dados SQL, essa função ficou limitada à filtragem
pelo nome exato dos autores da perguntas.

## Executando o projeto localmente

Para executar esse projeto na sua máquina você precisa criar um projeto no
[Firebase](https://firebase.google.com/?hl=pt-br) e ter o
[Node.js e o npm](https://nodejs.org/en) instalados em sua máquina.

### Configurando o projeto no firebase

1. Acesse o [console do Firebase](https://console.firebase.google.com/)

2. Clique no botão `Adicionar projeto`

3. Digite um nome para o seu projeto e clique em `Continuar`

4. Desabilite o Google Analytics, clique em `Criar projeto` e aguarde até que o
   projeto seja criado

   ![Captura de tela exibindo a página de criação de projeto do Firebase](https://user-images.githubusercontent.com/49590887/233813801-cf1cc23e-849e-4400-8ea4-f1ee0a6cd03b.png)

5. Na guia lateral selecione a opção `Firestore Database` dentro de `Criação`

   ![Captura de tela exibindo a página inicial do projeto do Firebase](https://user-images.githubusercontent.com/49590887/233813807-8a10f6b9-1786-4a4c-9c2c-3fcabd6a16ab.png)

6. Aperte no botão `Criar banco de dados`

7. Certifique-se de que a opção `Iniciar no modo de produção` está marcada e
   aperte no botão `Avançar`

8. Selecione o local do Cloud Firestore que você preferir e clique em `Ativar`

9. Vá na seção regras e altere a linha 5 para `allow read, write: if true;`

   ![Captura de tela exibindo a página de regras da Firestore Database](https://user-images.githubusercontent.com/49590887/233813878-00e2cb6e-3b9b-4b1b-aa47-8df3f66ecdb6.png)

10. Clique no botão `Publicar`

11. Na guia lateral selecione a opção `Authentication` dentro de `Criação`

    ![Captura de tela exibindo a barra lateral do firebase](https://user-images.githubusercontent.com/49590887/233813823-a7c1fb51-67c1-47fd-bde4-08730b3cc7dd.png)

12. Clique no botão `Vamos começar`

13. Na área `Outros provedores` selecione a opção `Google`

    ![Captura de tela exibindo a lista de provedres de autenticação do Firebase](https://user-images.githubusercontent.com/49590887/233813904-9493df54-6369-424f-911f-e45c17c15d11.png)

14. Marque a caixinha `Ativar`

15. Escolha um nome público para o projeto e um email de suporte, em seguida
    clique no botão `Salvar`

16. Na guia lateral selecione a opção `Visão geral do projeto` e clique no botão
    `</>`

    ![Captura de tela exibindo a página inicial do projeto do Firebase com uma seta apontando para o botão de adicionar app web](https://user-images.githubusercontent.com/49590887/233813916-72845f0b-2d6f-46c6-9761-97481b58fc88.png)

17. Digite um nome para o app e clique no botão `Registrar app`

18. Copie o objeto firebaseConfig exibido na tela e salve-o em algum lugar, ele
    será necessário nos próximos passos

19. Clique no botão `Continuar no console`

### Executando na sua máquina

1. Faça o download do projeto

2. Crie uma cópia do arquivo `.env.example` e o renomeie para `.env`

3. Abra o arquivo `.env` em um editor de código, você verá que ele possui campos
   parecidos com o do objeto `firebaseConfig` que você obteve há alguns passos

4. Preencha os campos do arquivo `.env` de acordo com os valores do objeto
   `firebaseConfig` e salve o arquivo

5. Abra a pasta do projeto no terminal, digite o comando `npm install` e aguarde
   o fim da execução do comando

6. Execute o comando `npm run serve` e acesse o endereço `http://localhost:8080`
