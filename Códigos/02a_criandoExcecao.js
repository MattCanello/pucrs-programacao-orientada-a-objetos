class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function vaiDarErro() {
    throw new ValidationError("Dados inválidos!");
}

try {
    vaiDarErro();
} catch (e) {
    console.log(`${e.name}: ${e.message}`); // ValidationError: Dados inválidos!
}