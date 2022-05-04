// An enum is a special "class" that represents a group of constants (unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.

enum Cheese {
  GOAT = 'goat',
  COW = 'cow',
}

const serveCheese = (cheeseType: Cheese, servings: number): void => {
  console.log(`You want ${servings} servings of ${cheeseType}`);
};

serveCheese(Cheese.COW, 3);
