const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html', 'restauration.html'
];

// We use a flat string to avoid any \n issues in different OS/environments
const newMenuStructure = 
'                                            <li><a href="index.html">Accueil</a></li>\n' +
'                                            <li class="has-dropdown">\n' +
'                                                <a href="about.html">L\'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>\n' +
'                                                <ul class="submenu">\n' +
'                                                    <li><a href="about.html">&Agrave; propos</a></li>\n' +
'                                                    <li><a href="philosophie.html">Notre Philosophie</a></li>\n' +
'                                                    <li><a href="restauration.html">Restauration & Services</a></li>\n' +
'                                                    <li><a href="faq.html">FAQ</a></li>\n' +
'                                                </ul>\n' +
'                                            </li>\n' +
'                                            <li class="has-dropdown">\n' +
'                                                <a href="classes.html">Cycles <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>\n' +
'                                                <ul class="submenu">\n' +
'                                                    <li><a href="cycle-creche.html">La Cr&egrave;che</a></li>\n' +
'                                                    <li><a href="cycle-maternelle.html">La Maternelle</a></li>\n' +
'                                                    <li><a href="cycle-primaire.html">Le Primaire</a></li>\n' +
'                                                </ul>\n' +
'                                            </li>\n' +
'                                            <li><a href="galerie.html">Galerie</a></li>\n' +
'                                            <li><a href="equipe.html">Notre &Eacute;quipe</a></li>\n' +
'                                            <li><a href="transport.html">Transport</a></li>\n' +
'                                            <li><a href="contact.html">Contact</a></li>';

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // 1. Remove literal /n or \\n that might be lingering
    html = html.replace(/\\n/g, '\n').replace(/\/n/g, '');

    // 2. Fix the main menu list
    const menuStartRegex = /<nav id="mobile-menu">\s*<ul>/;
    const menuEndRegex = /<\/ul>\s*<\/nav>/;
    
    const startMatch = html.match(menuStartRegex);
    const endMatch = html.match(menuEndRegex);
    
    if (startMatch && endMatch) {
        const startIndex = startMatch.index + startMatch[0].length;
        const endIndex = endMatch.index;
        
        const firstPart = html.substring(0, startIndex);
        const lastPart = html.substring(endIndex);
        
        html = firstPart + '\n' + newMenuStructure + '\n                                        ' + lastPart;
    }

    // 3. Update the Right-hand CTA Button to "Inscriptions"
    // Find the header-right button
    html = html.replace(/<div class="header-right[^>]*>[\s\S]*?<\/div>/, (match) => {
        return match.replace(/<a href="[^"]*" class="theme-btn[^>]*>[\s\S]*?<\/a>/, 
            '<a href="admissions.html" class="theme-btn border-radius-none">Inscriptions <i class="icon-arrow-icon"></i></a>');
    });

    fs.writeFileSync(file, html, 'utf8');
    console.log('Fixed Menu & Button in: ' + file);
});
