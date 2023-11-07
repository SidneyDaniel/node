// node src/cli.js ./arquivos/texto.md
// node src/cli.js ./arquivos
// npm run cli ./arquivos

import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';

const caminho = process.argv;


function imprimeLista(resultado, identificador = '') {
    console.log(
            chalk.yellow('Lista de links'), 
            chalk.underline.italic.blueBright(identificador),
            resultado
        );  
};



async function processaTexto (argumentos) {
    const caminho  = argumentos[2];


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
        imprimeLista(resultado);        
   } else if (fs.statSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async nomeDeArquivo => {
            // console.log(nomeDeArquivo);
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(lista, nomeDeArquivo);
        });
   }

}

processaTexto(caminho);