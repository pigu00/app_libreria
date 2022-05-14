function generarId() {
    
    let id = '';
    const CARACTERES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 4; i++) {
        id += CARACTERES.charAt(Math.floor(Math.random() * CARACTERES.length))
    }

    return (id);
}



module.exports = {generarId}