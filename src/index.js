import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    // console.log(resultados);
    // console.log(capturas);
    return resultados;
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



// // \[[^[\]]*?\]
// // \(https?:\/\/[^\s?#.].[^\s]*\)
// // \[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)







//Listinha de mangas
// import fs from 'fs';
// import readline from 'readline';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     const regex = new RegExp(`https:\/\/mangalivre\.net\/(?:manga|ler)\/${nome}.*\/(\\d+)#`);

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match) {
//             console.log({url: match[0], capitulo: match[1]});
//         }
//     }
// }

// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'dandadan');





// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     const regex = new RegExp(`https:\/\/mangalivre\.net\/(?:manga|ler)\/${nome}.*\/(\\d+)#`);

//     let maxNumero = 0;
//     let urlMaxNumero = '';

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match && Number(match[1]) > maxNumero) {
//             maxNumero = Number(match[1]);
//             urlMaxNumero = match[0];
//         }
//     }

//     console.log({url: urlMaxNumero, numero: maxNumero});
// }

// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'to-hell-with-being-a-saint-im-a-doctor');






// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     // Substitui espaços por hífens no nome
//     const nomeComHifens = nome.replace(/ /g, '-');

//     const regex = new RegExp(`https:\/\/mangalivre\.net\/(?:manga|ler)\/${nomeComHifens}.*\/(\\d+)#`);

//     let maxNumero = 0;
//     let urlMaxNumero = '';

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match && Number(match[1]) > maxNumero) {
//             maxNumero = Number(match[1]);
//             urlMaxNumero = match[0];
//         }
//     }

//     console.log({url: urlMaxNumero, numero: maxNumero});
// }

// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'hell');








// VERSÃO PERFEITA ------0----------------------------------------------------------------------------
// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8');
//     const lines = data.split('\n');

//     const nomeComHifens = nome.replace(/ /g, '-');

//     const regex = new RegExp(`https:\/\/mangalivre\.net\/(?:manga|ler)\/.*${nomeComHifens}.*\/(\\d+)#`);

//     let maxNumero = 0;
//     let urlMaxNumero = '';

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match && Number(match[1]) > maxNumero) {
//             maxNumero = Number(match[1]);
//             urlMaxNumero = match[0];
//         }
//     }

//     console.log({url: urlMaxNumero, numero: maxNumero});
// }

// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'to hell');




// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     // Substitui espaços por hífens no nome
//     const nomeComHifens = nome.replace(/ /g, '-');

//     const regex = new RegExp(`(https:\/\/mangalivre\.net\/(?:manga|ler)\/.*${nomeComHifens}.*\/)(\\d+)#`);

//     let maxNumeros = {};

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match) {
//             const urlSemNumero = match[1];
//             const numero = Number(match[2]);
//             if (!maxNumeros[urlSemNumero] || numero > maxNumeros[urlSemNumero]) {
//                 maxNumeros[urlSemNumero] = numero;
//             }
//         }
//     }

//     for (const url in maxNumeros) {
//         console.log({url: url, numero: maxNumeros[url]});
//     }
// }

// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'hell');






// AGORA SIM EDIÇÃO DEFINITIVA ====================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================

// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     // Substitui espaços por hífens no nome
//     const nomeComHifens = nome.replace(/ /g, '-');

//     const regex = new RegExp(`(https:\/\/mangalivre\.net\/(?:manga|ler)\/.*${nomeComHifens}.*\/)(\\d+)#`);

//     let maxNumeros = {};

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match) {
//             const urlSemNumero = match[1];
//             const numero = Number(match[2]);
//             const nomeUrl = urlSemNumero.split('/')[4]; // Extrai o nome da URL
//             if (!maxNumeros[nomeUrl] || numero > maxNumeros[nomeUrl].numero) {
//                 maxNumeros[nomeUrl] = {url: match[0], numero: numero};
//             }
//         }
//     }

//     for (const nomeUrl in maxNumeros) {
//         console.log(maxNumeros[nomeUrl]);
//     }
// }
// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'hell');

//====================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================

// AGORA SIM MLK DOIDO 
// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     // Substitui espaços por hífens no nome
//     const nomeComHifens = nome.replace(/ /g, '-');

//     const regex = new RegExp(`(https:\/\/mangalivre\.net\/(?:manga|ler)\/.*${nomeComHifens}.*\/)(\\d+)?#?`);

//     let maxNumeros = {};

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match) {
//             const urlSemNumero = match[1];
//             const numero = match[2] ? Number(match[2]) : 0;
//             const nomeUrl = urlSemNumero.split('/')[4]; // Extrai o nome da URL
//             if (!maxNumeros[nomeUrl] || numero > maxNumeros[nomeUrl].numero) {
//                 maxNumeros[nomeUrl] = {url: match[0], cap: numero};
//             }
//         }
//     }

//     for (const nomeUrl in maxNumeros) {
//         console.log(maxNumeros[nomeUrl]);
//     }
// }

// processarArquivo('./arquivos/mangas_MERECEANIME.md', 'hell');




// AAAAAAAAAAAAAAAAAA   


// import fs from 'fs';

// async function processarArquivo(path, nome) {
//     const data = fs.readFileSync(path, 'utf8'); // Especifique o encoding aqui
//     const lines = data.split('\n');

//     // Substitui espaços por hífens no nome
//     const nomeComHifens = nome.replace(/ /g, '-');

//     const regex = new RegExp(`https:\/\/mangalivre\.net\/(?:manga|ler)\/([^\/]+).*${nomeComHifens}.*\/(\\d+)?#?`);

//     let maxNumeros = {};

//     for (const line of lines) {
//         const match = line.match(regex);
//         if (match) {
//             const nomeManga = match[1];
//             const numero = match[2] ? Number(match[2]) : 0;
//             if (!maxNumeros[nomeManga] || numero > maxNumeros[nomeManga].numero) {
//                 maxNumeros[nomeManga] = {url: match[0], numero: numero};
//             }
//         }
//     }

//     // Encontra a URL com o maior número para cada nome de manga único
//     let maxUrlPorNome = {};
//     for (const nomeManga in maxNumeros) {
//         if (!maxUrlPorNome[nomeManga] || maxNumeros[nomeManga].numero > maxUrlPorNome[nomeManga].numero) {
//             maxUrlPorNome[nomeManga] = maxNumeros[nomeManga];
//         }
//     }

//     for (const nomeManga in maxUrlPorNome) {
//         console.log(maxUrlPorNome[nomeManga]);
//     }
// }



// processarArquivo('./arquivos/mangas_MERECEANIME.md', ' tohell');

