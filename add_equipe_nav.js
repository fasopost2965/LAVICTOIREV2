const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Add "Notre Équipe" link under "La Victoire" dropdown if not already present
    if (!html.includes('equipe.html') && html.includes('transport.html')) {
        html = html.replace(
            '<li><a href="transport.html">Transport Scolaire</a></li>',
            '<li><a href="transport.html">Transport Scolaire</a></li>\n                                                    <li><a href="equipe.html">Notre \u00c9quipe</a></li>'
        );
    }

    // Also fix in the mobile offcanvas menu if present
    if (!html.includes('equipe.html') && html.includes('Transport Scolaire')) {
        html = html.replace(
            /Transport Scolaire<\/a><\/li>/g,
            'Transport Scolaire</a></li>\n                                                    <li><a href="equipe.html">Notre \u00c9quipe</a></li>'
        );
    }

    fs.writeFileSync(file, html, 'utf8');
    console.log('Updated nav in: ' + file);
});
