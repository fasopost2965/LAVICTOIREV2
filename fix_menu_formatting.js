const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Fix the literal \\n or \n followed by spaces
    const brokenPattern = /<li><a href="about\.html">&Agrave; propos<\/a><\/li>\\n\s*<li><a href="restauration\.html">Restauration & Services<\/a><\/li>/g;
    const fixedSubmenu = '<li><a href="about.html">&Agrave; propos</a></li>\n                                                    <li><a href="restauration.html">Restauration & Services</a></li>';
    
    if (html.includes('\\n')) {
        html = html.replace(/\\n/g, '\n');
        fs.writeFileSync(file, html, 'utf8');
        console.log('Fixed literal \\n in: ' + file);
    }
});
