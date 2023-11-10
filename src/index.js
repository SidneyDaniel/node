import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    // console.log(resultados);
    // console.log(capturas);

    return resultados.length !== 0 ? resultados : chalk.magenta('Não há links no arquivo!');// mesma coisa de um if e else 
}



function trataErro(erro) {
    throw new Error(chalk.redBright(erro.code, 'Não há arquivo no diretório.'));
}

// function pegarArquivo(caminhoDoArquivo) {
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.greenBright(texto)))
//     .catch(trataErro);

// }


// ASYNC/AWAIT
async function pegarArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        // extraiLinks(chalk.green(texto));     
        return extraiLinks(chalk.greenBright(texto));
    } catch (error) {
        trataErro(error);
    }

}


// pegarArquivo('./arquivos/texto.md');

export default pegarArquivo;



// \[[^[\]]*?\]
// \(https?:\/\/[^\s?#.].[^\s]*\)
// \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)
