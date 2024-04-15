# TekStore

You will be creating a full-stack application that represents an online shop that sells IT devices (computers, phones, electronics) where the customer can browse prducts, check their details and add them to cart and the administrator can update add or delete products.

For the purposes of this application, a "product" has these following attributes:

name,
description,
price,
category,
imageUrl

### Your Tech Stack

- Client: [React](https://facebook.github.io/react)
- Server: [NodeJS](https://nodejs.org), with the [Express](https://expressjs.com/) framework
- Database: [MongoDB](https://mongodb.com) with the [Mongoose](https://mongoosejs.com) ODM.
- Database: [MYSQL](https://www.mysql.com/) with the [Sequelize](https://sequelize.org/).
- Additional libraries and tools:
  - [Axios](https://axios-http.com/docs/intro), as an optional, promise-based alternative to jQuery's `$.ajax`

HOW TO START THIS APP

By design, this assessment contains more work than you will be able to complete in a day, so don't be concerned about not completing all of the steps below. Rather, please work on the following steps **in order**, moving on to the next step only after the one you are working on is complete. **Commit frequently** with informative messages.

---

### Before You Begin:

This application is divided into two main folders: one for the react client in a folder with the name react-client, and one for the backend with the name backEnd.

**Complete these setup tasks**:

- [ ] Run `npm install` inside the `react-client` directory to install dependencies for your frontend.
- [ ] Run `npm install` inside the `backEnd` directory to install dependencies for your backend.
- [ ] Ensure that the MongoDB process is running on your computer (`mongod`) if you are going to use mongoDb.
- [ ] Ensure that the Mysql process is running on your computer if you are going to use MYSQL.also From the mysql prompt inside your terminal (`mysql -u root -p`) run the following command: (`CREATE DATABASE IF NOT EXISTS  store;`)

- [ ] If you choose to use MongoDB:
  - Create the database by running `npm run mongo:setup` from inside the `backEnd` directory. Make sure you check if the database was successfully seeded using MongoDB Compass or any tool of your choice. It should contain the 6 products in the `data.json` file.
- [ ] If you choose to use MongoDB:
  - Create the database by running `npm run mysql:setup` from inside the `backEnd` directory. Make sure you check if the database was successfully seeded using workbench or any tool of your choice. It should contain the 6 products in the `data.json` file.
  - start your application with two commands, `npm start` from inside the `react-client` directory and `npm start` from inside the `backEnd` directory , in two separate terminal tabs.
  - If you are wondering, your application has two package.json files and seperate node modules.
  - If successfully the react client will be opened automatically in your browser and you server should be listening on port 5000
  - first thing you need to do is to explore all the files in both react-client and backEnd directories and explore the application on your browser.

**WHEN THESE TASKS ARE COMPLETE:** proceed to Step One.

---

### Step One: Display products

**Implement the following user story:**

> As a customer, when I load the app, I expect to see all the products displayed in cards.

**Implement this user story by doing the following:**

- [ ] Refactor the **ProductsList** component (in the `react-client` directory) to dynamically render products passed as props from the App component using the sample data in `data.json`. You may create additional components as necessary.
- [ ] Do not change the classnames or you will loose the style of the app.
- [ ] Do not show the whole description of the product in the product card, show only one line of it so the customer will be eager to click on the product and see its full description.
- [ ] In the backend, complete all the necessary functionalities that will respond to `GET` requests to `/api/products` with JSON of the products stored in the database.
- [ ] You may create helper functions / models / routes / controllers or whatever you want to implement this feature.
- [ ] Replace the products rendered from data.json in your client with the data obtained from the server.

**WHEN THIS STEP IS COMPLETE:** make a commit with the message "complete step one"

---

### Step Two: Display product details

**Implement the following user story:**

> As a customer browsing products, I want to see the full details of a product.

**Implement these user stories by doing the following:**

- [ ] Refactor your client-side component(s) to ipmlement the check details feature.
- [ ] When the user clicks on the product image it should display that product in its own productDetails view.
- [ ] Make use of the ProductDetails component.

**WHEN THIS STEP IS COMPLETE:** make a commit with the message "complete step two"

---

### Step Three: add new products

**Implement the following user story:**

> As an administrator, I want to be able to add new products .

**Implement this user story by doing the following:**

- [ ] Inside the chosen database folder, create a function to add a new product to the database.
- [ ] Create a `POST` request handler to the `/api/products` endpoint that should use the above database function.
- [ ] Create an AddProduct component and make the App rendering it from a new section in the navbar.
- [ ] The AddProduct component should collect respective information representing a product from user's inputs and then send a request to the products endpoint.

**WHEN THIS STEP IS COMPLETE:** make a commit with the message "complete step Three"

---

### Step Four: filter by categories.

**Implement the following user story:**

> As a customer, I expect to choose a category from the category menu and it should show me the products with the category I choose.
> As a customer, I expect to be able to navigate between categories (Computers will show me only the products under computers category, Phones for phones, Electronics for electronics and All will display all the products without filtering).

**Implement this user story by doing the following:**

- [ ] Refactor the **ProductsList** component (in the `react-client` directory) to render products by category when a category from the menu list is clicked on.
- [ ] Make your components respond to the user clicking a category from the menu list which is showed when clicked on categories.

**WHEN THIS STEP IS COMPLETE:** make a commit with the message "complete step four"

---

### Step Five: search by product name.

**Implement the following user stories:**

> As a customer browsing products, when I type a name of a product in the seacrh bar and click the search icon, I should get that product or products if there are many with the same name or none if there in no product with that name.

**Implement these user stories by doing the following:**

- [ ] Refactor your client-side component(s) to ipmlement the search feature wich will filter the products data by name (make use of the Search component "you may move it to another component if you want whatever you want to do with, you are free")

**WHEN THIS STEP IS COMPLETE:** make a commit with the message "complete step five"

---

### Step Six: update products

**Implement the following user story:**

> As an administrator, I want to update a product data when i click on the update product button from the product card.

**Implement this user story by doing the following:**

- [ ] You may need to make a form to allow the admin to write the updated data for the product
- [ ] Create or refactor any client-side components as necessary.
- [ ] Create or refactor any database helper functions as necessary.
- [ ] Create or refactor any server request handlers as necessary.

**WHEN THIS STEP IS COMPLETE** make a commit with the message "complete step six"

---

### Step Seven: delete prooducts

**Implement the following user story:**

> As an administrator, I want to delete a product when i click on the delete product button from the product card.

**Implement this user story by doing the following:**

- [ ] Create or refactor any database helper functions as necessary.
- [ ] Create or refactor any server request handlers as necessary.
- [ ] Create or refactor any client-side components as necessary.

**WHEN THIS STEP IS COMPLETE:** make a commit with the message "complete step seven"

---

### Step Eight: add to cart.

**Implement the following user story:**

> As a customer, I want to add products I like to my cart.

**Implement these user stories by doing the following:**

- [ ] Refactor your client-side component(s) to ipmlement the add to cart feature.
- [ ] This feature should be handled from the frontend only but you may add all necessary backend functionalities as well.
- [ ] The CartList component renders for now hard coded data, replace it with products added by the user and none if it is empty.
- [ ] When the user click on add to cart from the product card or from the pruductDetails view, the product should be added to the cart list which you can find in the CartList component.
- [ ] The cart list will hold all the products added and their total price.
- [ ] In the cartList component the user can remove a product from the list by clicking on the remove button.
- [ ] The total price should be updated if a product is added to the list or removed from it.
- [ ] When the user clicks on the checkout button, you should display a message "thanks for bying from us" and reset the cart list.

**WHEN THIS STEP IS COMPLETE**: make a commit with the message "complete step eight"

---

## Available Resources

- [ReactJS Docs](https://facebook.github.io/react/)
- [Webpack Docs](https://webpack.github.io/docs/)
- [Babel Docs](https://babeljs.io/docs/setup/)
- [NodeJS Docs](https://nodejs.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [MongoDB docs](https://docs.mongodb.com/)
- [Mongoose docs](http://mongoosejs.com/)
- [MYSQL docs](https://dev.mysql.com/doc/refman/8.0/en/)
- [Sequelize](https://sequelize.org/)
- Docs for any npm packages you might use
- [MDN](https://developer.mozilla.org/)
- [Google Search](https://google.com) to search for the correct page on any of the documentation above

- YOU CANNOT USE CHAT-GPT (IT WILL BE CONSIDRED AS CHEATING)
- YOU CANNOT OPEN OR CHECK OLD REPOSITORIES (IT WILL BE CONSIDRED AS CHEATING)
