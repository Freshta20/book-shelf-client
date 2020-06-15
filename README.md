<!-- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify -->

# Project 1: Full-Stack Website

By Freshta Bashari, SEI '20
## Book-Shelf, an Book collection app
A Book-Shelf is a varied categories of books. On Book-Shelf, a user can sign up to create, edit and view their categpories of books. inside each category they can add books and delete a books. 

## Scope
In this project, we fulfilled all core requirements. Our website has:
- Full CRUD on linked database model defined by Mongoose schema
- 7 RESTful routes for model
- User authentication and authorization using sessions and bcrypt 
- Front-end data validation
- Templating using the EJS view engine
- Responsive front-end styling using Bootstrap CSS
- Deployment to Heroku

## Technologies Used
- Front-end: React, Bootstrap, CSS, HTML,
- Back-end: Mongoose, MongoDB, Express, Node.js
- Dependencies: bcyptjs, body-parser, connect-mongo, ejs, express, express-session, method-override, mongoose

## User Stories
- User creates an account
- User logs in
- User logs out
- User add a Category
- User can edit and delete a Category
- User can add a book inside a category
- User can delete a Book


## Wireframes
During our planning, we used figma to create wireframes for each page.
1. Home Page   
<img src="./readme/Home.png" height=350>
2. Log In  
<img src="./readme/Login.png" height=350>
3. Register  
<img src="./readme/Register.png" height=350>
4. Profile  
<img src="./readme/Profile.png" height=350>
5. All Categories  
<img src="./readme/All-Category.png" height=350>
6. Edit Category  
<img src="./readme/Edit-Category.png" height=350>
7. New Category  
<img src="./readme/Add-Category.png" height=350>
8. New Book  
<img src="./readme/Add-Book.png" height=350>
9. View Book  
<img src="./readme/Show-Book.png" height=350>




## Data Models
Imagerie uses 2 linked models
1. Users: one-to-many relationship with Books
2. Categories: one-to-many relationship with user
2. Books: many-to-one relationship with user

<img src="./readme/ERD.png">

