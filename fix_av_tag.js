const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html', 'digitale.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Fix the corrupted <av> back to </nav>
    if (html.includes('<av>')) {
        html = html.replace(/<av>/g, '</nav>');
        fs.writeFileSync(file, html, 'utf8');
        console.log('Fixed tag in: ' + file);
    }
});
