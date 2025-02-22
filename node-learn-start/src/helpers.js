function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter((chave) => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = "";
    listaPalavras.forEach((paragrafo, index) => {
        const duplicadas = filtraOcorrencias(paragrafo).join(", ");
        textoFinal += `Palavras dupliadas no pragrafo ${index + 1}: ${duplicadas} \n`
    })

    return textoFinal;
}

export { montaSaidaArquivo }