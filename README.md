# E-Commerce Application DazzleShop

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