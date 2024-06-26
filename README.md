# Project - Restaurant

## Description

This is a full-stack application that allows users to find and review restaurants. Users can create an account, log in, and add restaurants to their favorites. They can also add, edit, and delete restaurants.

## Installation

1. Clone the repository

```bash
git clone
```

2. Install the dependencies

```bash
npm install
```

3. Create a .env file in the root folder and add the following environment variables:

```bash
PORT=3001
DB_URI=your_mongoDB_URI
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

4. Run the server to develop locally

```bash
npm run dev
```




# API Routes

Shopping or basketShopping routes

URL PATH:

/api (Final_Project_Server\app.js)


RUTAS PARA ACCEDER A LOS INGREDIENTES DE TODOS LOS INGREDIENTES DE TODOS LOS USUARIOS 

api/ingredients
(Final_Project_Server\routes\index.routes.js) MIDDLEWARE()router.use


/api/ingredients.get('') TODOS LOS INGREDIENTES EN LA BASE DE DATOS
/api/ingredients.post('',{ name,quantity, measure,recipeFrom,}) AÑADE UN INGREDIENTE 
/api/ingredients.delete('','AÑADE UN STRING ID')  ELIMINA EL INGREDIENTE RECIBIENDO IN ID

(Final_Project_Server\routes\recipes.routes.js) RUTAS
(Final_Project_Server\controllers\recipes.controller.js) FUNCIONES





RUTAS PARA ACCEDER A LAS RECETAS CREADAS POR EL USUARIO

api/recipes
(Final_Project_Server\routes\index.routes.js) MIDDLEWARE router.use()




RUTAS PARA ACCEDER A LOS INGREDIENTES DE LA LISTA DE LA COMPRA DE UN USUARIO

api/user/getIngredients.get() ESPERA EL USER
api/user/addIndredients/:ingredient_id.put() ESPERA UN ID EN PARAMS Y EL USER
api/user/deleteIngredient/:ingredient_id.delete() ESPERA UN ID EN PARAMS Y EL USER


api/user/likeRecipe/:recipe_id.put() ESPERA UN ID EN PARAMS Y EL USER
api/user/dislikeRecipe/:recipe_id.put() ESPERA UN ID EN PARAMS Y EL USER
