let json = "incorreto";

try {
    let pessoa = JSON.parse(json);
    console.log(pessoa.nome);
} catch (err) {
    if (err instanceof SyntaxError) {
        console.log(`Erro ${err.name}: ${err.message}`);
            // Erro SyntaxError: Unexpected token i in JSON at position 0
    } else {
        console.log("Relança a exceção, pois não sabe como tratar");
        throw err;
    }
} finally {
    console.log("Encerra tratamento") // Encerra tratamento
}