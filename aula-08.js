const salario = 103.4
// converti em string e saiu em duas casas decimais
console.log(`salario: `, salario.toFixed(2))

const b = `1234.87777777777`
//o toFixed é necessário que o tipo seja numérico, sendo assim, utiliza-se Number() para a conversão de stringo para um tipo numérico
console.log(`salario 2: `, Number(b).toFixed(2))