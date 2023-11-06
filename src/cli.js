import pegarArquivo  from "./index.js";
const caminho = process.argv;


pegarArquivo(caminho[2])

// node src/cli.js ./arquivos/texto.md