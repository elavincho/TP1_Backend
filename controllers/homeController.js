const home = require('../models/Home');

const homeController = {
    // 1. Renderiza la lista completa en la home
    index: (req, res) => {
        
        res.render('home/index', {
            titulo: 'Home TodoStock S.A.',
            home:home
            
        });
    }
};

module.exports = homeController;