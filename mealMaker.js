const menu = {
  _courses : {
    appetizers : [],
    mains : [],
    desserts : [],
  },
  get appetizers () {
    return this._courses.appetizers;
  },
  get mains () {
    return this._courses.mains;
  },
  get desserts () {
   return this._courses.desserts;
  },
  set appetizers (appetizers) {
    return this._courses.appetizers = appetizers;
  },
  set mains (mains) {
    return this._courses.mains = mains;
},
  set desserts (desserts) {
    return this._courses.desserts = desserts;
  },
  get courses () {
    return {
      appetizers : this.appetizers,
      mains : this.mains,
      desserts : this.desserts,
    };
  },
  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name : dishName,
      price : dishPrice,
    };
      return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse (courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
  },
  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your order was ${appetizer.name}, ${main.name}, and ${dessert.name}. Total price is $${totalPrice}.`
  }
};

menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'soup', 3.00);
menu.addDishToCourse('appetizers', 'fries', 4.50);

menu.addDishToCourse('mains', 'steak', 7.00);
menu.addDishToCourse('mains', 'ribs', 6.00);
menu.addDishToCourse('mains', 'pork', 6.00);

menu.addDishToCourse('desserts', 'ice cream', 3.50);
menu.addDishToCourse('desserts', 'cake', 2.50);
menu.addDishToCourse('desserts', 'pie', 3.50);

const meal = menu.generateRandomMeal();
console.log(meal);


