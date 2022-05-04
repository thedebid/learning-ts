// TypeScript allows types to be defined separately from the variables that use them.
// Aliases and Interfaces allows types to be easily shared between different variables/objects.

interface programmingLanguage {
  name: string;
  popularity: number;
  developer?: string; //optional property
}

const java: programmingLanguage = {
  name: 'Java',
  popularity: 100,
  // developer: 'James Gosling',
};

//Extending Interfaces
interface extProgrammingLanguage extends programmingLanguage {
  webSupport: boolean;
  // new properties can be added to the interface
}

const javascript: extProgrammingLanguage = {
  name: 'JavaScript',
  popularity: 100,
  webSupport: true,
  // developer: 'Brendan Eich',
};
console.log(java);
console.log(javascript);
