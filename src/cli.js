// node src/cli.js ./arquivos/texto.md
// node src/cli.js ./arquivos
// npm run cli ./arquivos

import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';

const caminho = process.argv;


async function imprimeLista(valida, resultado, identificador = '') {

    if (valida) {
        console.log(
            chalk.yellow('Lista Validada'), 
            chalk.underline.italic.blueBright(identificador),
            await listaValidada(resultado)
        );
    }else{
        console.log(
            chalk.yellow('Lista de links'), 
            chalk.underline.italic.blueBright(identificador),
            resultado
        );  
    }

};



async function processaTexto (argumentos) {
    const caminho  = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try {
        fs.lstatSync(caminho);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(chalk.redBright('Arquivo ou diretório não existe!!!'));
            return;
        }
    }

   if (fs.statSync(caminho).isFile()) {
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);        
   } else if (fs.statSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async nomeDeArquivo => {
            // console.log(nomeDeArquivo);
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, lista, nomeDeArquivo);
        });
   }

}

processaTexto(caminho);