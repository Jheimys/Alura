
import fs from 'fs'
import chalk from 'chalk';


function extraiLinks(texto){
    const regex = /\[([^[\]]*?)]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capituras = [...texto.matchAll(regex)]
    const resultado = capituras.map(capitura => ({[capitura[1]]: capitura[2]})) 
    //console.log(resultado)

    return resultado
}

//extraiLinks(textoTeste)

function tratarErro(erro){
    throw new Error(chalk.red(erro))
}

async function pegaArquivo(caminhoArquivo){
    try {
        const enconding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoArquivo, enconding)
        console.log(extraiLinks(texto))
    } catch (erro) {
        tratarErro(erro)
    }
}

 pegaArquivo('./arquivo/texto.md')
// pegaArquivo('./arquivo/')

//https://regex101.com/

// \[[^[\]]*?]  

//\(https?:\/\/[^\s?#.].[^\s]*\)

//\[([^[\]]*?)]\((https?:\/\/[^\s?#.].[^\s]*)\)