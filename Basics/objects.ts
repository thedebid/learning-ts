const car: { type: string; model: string; year: number } = {
  type: 'Toyota',
  model: 'Corolla',
  year: 2009,
};

console.log(car);

//Optional property

let myname: { firstName: string; lastName?: string } = {
  firstName: 'Debid',
};
console.log(myname);

// Index Signatures
// Index signatures can be used for objects without a defined list of properties.

const nameAgeMap: { [index: string]: number } = {};
nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = 'Fifty'; // Error: Type 'string' is not assignable to type 'number'.
