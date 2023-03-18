# :newspaper: Blogs API :newspaper:
 Desenvolvimento de uma API em conjunto com testes e banco de dados para um Blog.
  
 ## Introdução
 
Usei no projeto Node.js ORM, funções CRUD e autenticação JWT de segurança implementada nas requisições HTTP necessárias, seguem abaixo os conceitos utilizados:
 
 - Node.js
 - Associações (*1:1*, *1:N*, *N:N*)
 - Sequelize ORM (Mapeamento Objeto Relacional)
 - Autenticação Json Web Token (JWT)
 - Requisições HTTP
 
 ## Instruções
 <details><summary>Informações</summary>
 
 **Rotas e Métodos**
 
 - /login
   - `POST`.
 - /user 
   - `POST`, `GET`, `DELETE`.
 - /categories
   - `POST`, `GET`.
 - /post
    - `POST`, `GET`, `PUT`, `DELETE`.
    
 **Corpo JSON das requisições**
 
 - Rota Login:
   - `POST`
   ```
   {
     "email": "lewishamilton@gmail.com",
     "password": "123456"
   }
   ```
 - Rota User:
   - `POST`
   ```
   {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
   }
   ```
 - Rota Categories:
   - `POST`
   ```
   {
    "name": "Typescript"
   }
   ```
 - Rota Post:
   - `POST`
   ```
   {
     "title": "Latest updates, August 1st",
     "content": "The whole text for the blog post goes here in this key",
     "categoryIds": [1, 2]
   }
   ```
   - `PUT`
   ```
   {
     "title": "Latest updates, August 1st",
     "content": "The whole text for the blog post goes here in this key"
   }
   ```

**Scripts disponíveis:**

 - [x] `npm run start`
   - Começa a rodar o aplicativo.
 - [x] `npm rum drop`
   - Deleta o banco de dados.
 - [x] `npm run prestart`
   - Cria o banco de dados e gera as tabelas.
 - [x] `npm run seed`
   - Insere os dados e popula o banco de dados.
 - [ ] `npm run duck`
   - Cria um pato :hatching_chick:
 
 *Existem outros scripts disponíveis, você pode achar eles explorando o arquivo package.json :mag:* 
 </details>
 <details><summary>Como usar</summary>
 
 - Configure suas variáveis de ambiente de acordo com sua configuração e mude o arquivo `.env.example` para `.env`, aqui está um modelo de exemplo: 
 ```
   #### SERVER VARS
   NODE_ENV=development
   API_PORT=3000

   #### DATABASE VARS
   MYSQL_HOST=localhost
   MYSQL_PORT=3306
   MYSQL_DB_NAME=blogs-api
   MYSQL_USER=root
   MYSQL_PASSWORD=password

   #### SECRET VARS
   JWT_SECRET=suaSenhaSecreta
 ```
 
 - Comece a aplicação usando `npm start` ou `npm run start`.
 
 :no_entry: Atente-se que sem o banco de dados e suas tabelas terem sido criadas e populadas com os dados você não vai conseguir testar os métodos HTTP com sua platarforma de APIs (Por exemplo: Postman ou Thunder Client). :no_entry: 
 
 </details>
