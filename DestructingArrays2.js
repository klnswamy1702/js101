'use strict';
const restaurant = {
    name: 'Classic Italiano',
    location: 'Via Angelo, Italy ',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // order: function(starterMenu, mainMenu){
    //     return this.starterMenu[staterMenu]
    // }
};

// const [first, second] = restaurant.categories;
// console.log(first, second);

//const [first, , second] = restaurant.categories;
//console.log(first, second);

 const [main, , secondary] = restaurant.categories;
 console.log(main, secondary);