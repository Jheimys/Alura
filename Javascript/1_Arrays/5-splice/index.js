const nomes =['Ana', 'Maria', 'Caio', 'Pedro', 'Artu', 'João', 'Marcos', 'Leo']

//slice(x,y,z) 
//x é de onde quero começar a excluir
//y é quantos quero excluir
//z é o que quero add
nomes.splice(2, 3, 'José')

console.log("Nomes:", nomes)
console.log("Nomes 1:", nomes)

nomes.splice(0, 0, 'Pedro', 'Elisa')

console.log("Nomes 2:", nomes)