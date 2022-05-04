const langauges: string[] = ['C', 'C++', 'Php', 'Java'];

langauges.push('Go');

console.log(langauges);

//Readonly
// The readonly keyword can prevent arrays from being changed.

const names: readonly string[] = ['C', 'C++', 'Php', 'Java'];

// names.push('Go'); // Error: Property 'push' does not exist on type 'readonly string[]'.
