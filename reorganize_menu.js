const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html', 'galerie.html', 'admissions.html'
];

const newMenuStructure = `
                                            <li><a href="index.html">Accueil</a></li>
                                            <li class="has-dropdown">
                                                <a href="about.html">L'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="about.html">&Agrave; propos</a></li>
                                                    <li><a href="philosophie.html">Notre Philosophie</a></li>
                                                    <li><a href="restauration.html">Restauration & Services</a></li>
                                                    <li><a href="faq.html">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li class="has-dropdown">
                                                <a href="classes.html">Cycles <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="cycle-creche.html">La Cr&egrave;che</a></li>
                                                    <li><a href="cycle-maternelle.html">La Maternelle</a></li>
                                                    <li><a href="cycle-primaire.html">Le Primaire</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="admissions.html">Inscriptions</a></li>
                                            <li><a href="galerie.html">Galerie</a></li>
                                            <li><a href="equipe.html">Notre &Eacute;quipe</a></li>
                                            <li><a href="transport.html">Transport</a></li>
                                            <li><a href="contact.html">Contact</a></li>
`;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');
    
    // Find the ul of the main menu
    const menuStartRegex = /<nav id="mobile-menu">\s*<ul>/;
    const menuEndRegex = /<\/ul>\s*<\/nav>/;
    
    const startMatch = html.match(menuStartRegex);
    const endMatch = html.match(menuEndRegex);
    
    if (startMatch && endMatch) {
        const startIndex = startMatch.index + startMatch[0].length;
        const endIndex = endMatch.index;
        
        const firstPart = html.substring(0, startIndex);
        const lastPart = html.substring(endIndex);
        
        const updatedHtml = firstPart + newMenuStructure + lastPart;
        fs.writeFileSync(file, updatedHtml, 'utf8');
        console.log('Updated Menu in: ' + file);
    } else {
        console.log('Could not find menu in: ' + file);
    }
});
