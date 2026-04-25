const fs = require('fs');
const path = require('path');

class Home {
    constructor() {
        this.archivoPath = path.join(__dirname, '../data/home.json');
    }

    leer() {
        try {
            const data = fs.readFileSync(this.archivoPath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            return [];
        }
    }

    listarTodos() {
        return this.leer();
    }


}

module.exports = new Home();