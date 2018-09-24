const express = require('express');
const router = express.Router();

const AXIOS = require('axios');
let recipes = [];

// Load all the recipes and store them 
const OPTIONS = {
    baseURL: "http://www.recipepuppy.com/api/",
    headers: { "cache-control": "no-cache" }
};

let recipePromises = [];

for (let i = 1; i <= 100; i++) {
    recipePromises.push(AXIOS.get(`?p=${i}`, OPTIONS));
}

Promise.all(recipePromises)
    .then(value => {
        for (let i = 0; i < value.length; i++) {
            recipes = [...recipes, ...value[i].data.results];
        }
        console.log(`${recipes.length} recipes succesfuly loaded`);
    });

/* GET home page */
router.get('/', (req, res, next) => {
    res.json(recipes);
});



module.exports = router;