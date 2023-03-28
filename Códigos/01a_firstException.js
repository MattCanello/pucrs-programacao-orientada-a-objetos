//01a_firstException.js
try {
    throw new Error('Gerando um erro genérico!');
} catch (e) {
    console.log(`${e.name}: ${e.message}`); // Error: Gerando um erro genérico!
}