# :newspaper: Blogs API :newspaper:
 Development and testing of an API for a Blog together with a data base.
 
 Blog posts related CRUD with a layer of JWT authentication  for users.
 
 ## Introduction
 
 This is a Node.js ORM project with CRUD and authentication implemented in a few of the HTTP requests. In this project, I used the concepts of:
 
 - Node.js ORM
 - Associations (*1:1*, *1:N*, *N:N*)
 - Sequelize
 - JWT Authentication
 - HTTP Requests
 
 ## Instructions
 <details><summary>Info</summary>
 
 **Routes and Methods**
 
 - /login
   - `POST`.
 - /user 
   - `POST`, `GET`, `DELETE`.
 - /categories
   - `POST`, `GET`.
 - /post
    - `POST`, `GET`, `PUT`, `DELETE`.
    
 **Request JSON Bodies**
 
 - Login route:
   - `POST`
   ```
   {
     "email": "lewishamilton@gmail.com",
     "password": "123456"
   }
   ```
 - User route:
   - `POST`
   ```
   {
    "displayName": "Brett Wiltshire",
    "email": "brett@email.com",
    "password": "123456",
    "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
   }
   ```
 - Categories route:
   - `POST`
   ```
   {
    "name": "Typescript"
   }
   ```
 - Post route:
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

**Available scripts:**

 - [x] `npm run start`
   - Start the application.
 - [x] `npm rum drop`
   -  Delete the database.
 - [x] `npm run prestart`
   - Create the database and generate tables.
 - [x] `npm run seed`
   - Insert data and populate the database.
 - [ ] `npm run duck`
   - Creates a duck :hatching_chick:
 
 *There are more scripts available, you can explore the package.json file to find about them :mag:*
 </details>
 <details><summary>How to use</summary>
 </details>
