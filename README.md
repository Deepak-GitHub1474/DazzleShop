# E-Commerce Application DazzleShop [https://dazzleshop.netlify.app/]

### Setup instructions:

1. Clone the project
    ```
        git clone https://github.com/Deepak-GitHub1474/DazzleShop.git
    ```
2. Move into the directory
    ```
        cd DazzleShop
    ```
3. Install dependencies
    ```
        npm i
    ```

4. Run the server
    ```
        npm run dev
    ```

## Setting tailwind css with vite project

### Check official documentation of tailwind for step by step setup [Link] ↓
(https://tailwindcss.com/docs/guides/vite)

### OR follow below steps:

1. Install tailwind and other dependencies
    ```
        npm install -D tailwindcss postcss autoprefixer
    ```

2. Create the tailwind.config.js file
    ```
        npx tailwindcss init -p
    ```
3. Add the files and extensions to tailwind config in the content property
  ```
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
  ```
4. Add the tailwind directives on the top of index.css file
    ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
    ```
5. Then run the server, tailwind should be integrated.

### Adding plugins and dependencies
    ```
        npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 
        chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
    ```

### Adding auto import sort for esline

1. Install the plugin
    ```
        npm i eslint-plugin-simple-import-sort
    ```
    
2. Add rule in .eslintrc.cjs

    ```
        'simple-import-sort/imports': 'error',
    ```

3. Add simple-import-sort in the plugin array of .eslintrc.cjs file

   ```
        plugins: [..., 'simple-import-sort']
   ```

4. Open VSCode Settings, search setting and open settings.json

5. Add the following line

    ```
        "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true 
        }
    ```

### Install daisyUI as a Tailwind CSS plugin

1. Install daisyUI
    ```
        npm i -D daisyui@latest
    ```
 2. Then add daisyUI to your tailwind.config.js file
    ```
        module.exports = {
                //...
                plugins: [require("daisyui")],
            }
    ```

### Project Directory Structure:

dazzleshop/ (Root directory)
|
├── src/ (Source code directory)
|   |
|   ├── components/ (Reusable UI components)
|   |   ├── Sidebar.jsx
|   |   ├── Header.jsx
|   |   ├── Footer.jsx
|   |   └── Carousel.jsx
|   |
|   ├── layouts/ (Layout components)
|   |   └── PageLayout.jsx
|   |
|   ├── pages/ (Page components)
|   |   ├── Home.jsx
|   |   ├── Cart.jsx
|   |   ├── Product.jsx
|   |   ├── Category.jsx
|   |   └── PageNotFound.jsx
|   |
|   ├── context/ (Context API for state management)
|   |   └── ProductContext.jsx
|   |
|   ├── App.js (Root component defining routes)
|   └── index.js (Entry point of the application)
|
├── public/ (Public assets and HTML)
|
├── package.json (Project configuration)
├── README.md (Project documentation)
├── ... (Other project files and folders)


### Basic workflow and execution of the project

1. Implement Reuseable Components:

Inside the components folder, create the following components: 
Sidebar.jsx, Header.jsx, Footer.jsx, and Carousel.jsx.

2. Create Page Components:

Inside the pages folder, create the following page components: 
Home.jsx, Cart.jsx, Product.jsx, Category.jsx, and PageNotFound.jsx.
Implement the logic and UI for each page according to your project requirements.

3. Set Up Context API:

In the context folder, create a file named ProductContext.jsx.
Implement the context provider (ProductProvider) and custom hook (useCart) for managing the state 
related to products and the shopping cart.

4. Routing with React Router:

In the root component of your app (src/App.js), set up routing using React Router.
Define routes for the Home ("/), Cart ("/cart), Product ("/product), Category("/category), 
and PageNotFound("*) pages using <Route> components.Wrap your entire app in a <BrowserRouter> 
to enable client-side routing.

5. Implement Logic:

Add logic for fetching product data, adding/removing items to/from the cart, updating cart costs, 
filtering products by category, and searching products. These functions should be implemented in the 
ProductContext.jsx file.

6. Create Page Layout:

### Key ponits of project
  - code written in a modular fashion.
  - It can be used without causing harm.
  - It can be tested at the code level.
  - It can be maintained easily, even codebase grows or needs to add extra features.
  - Crossplatform compatible.

### Features
  - Main home page where all the products will be render.
  - Single product checkout page to see full details of product.
  - Add products to the cart.
  - Modify the quantity of products in the cart.
  - Remove products from the cart.
  - See total cost of products.
  - Search products.
  - Filter Product
  
### About Project

1. The application uses react-router-dom for routing. The BrowserRouter component is wrapped around 
the entire app, and different routes are defined in the App component using the <Routes> and <Route> 
components. These routes correspond to different pages of the app.
State Management:

2. State management is implemented using React Context and the ProductProvider context provider.
Various pieces of state are managed, including product data, cart contents, selected categories, 
and search input. Custom hooks like useCart are provided to access this state throughout the application.

3. Fetching Product Data:

When the application loads, it fetches product data from a fakestore API using the axios library. 
The retrieved data is stored in the products state.

4. Adding to Cart:

Users can add products to their cart by clicking the "Add to Cart" button on the Home page.
The addToCart function is called, which updates the cart state and stores the cart data in local storage.

5. Updating Cart:

Users can increase or decrease the quantity of items in their cart using buttons.
The addQuantity and removeQuantity functions are used to update the cart state accordingly.
Calculating Cart Cost:

The updateCartProductCost function calculates the total cost of the items in the cart, including any 
applicable delivery charges.

6. Searching Products:

Users can search for products by typing in the search input field.
A debouncing mechanism is used to delay the search and prevent excessive API requests.
The searchProduct function filters the products based on the search input and updates the filteredProducts 
state.

7. Category Filtering:

Users can filter products by category by selecting or deselecting categories.
The toggleCategory function manages the selected categories.
Rendering Home Page:

8. Page Layout:

The PageLayout component provides a common layout structure for all pages, including the Header, Sidebar, 
and Footer.

9. Navigation:

Navigation is facilitated by the react-router-dom library, which handles routing between different pages.




