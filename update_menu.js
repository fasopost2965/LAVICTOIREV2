const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'equipe.html'
];

const newMenu = `<ul>
                                            <li><a href="index.html">Accueil</a></li>
                                            <li class="has-dropdown">
                                                <a href="about.html">L'&Eacute;cole <i class="fas fa-chevron-down" style="font-size:10px;margin-left:3px"></i></a>
                                                <ul class="submenu">
                                                    <li><a href="about.html">&Agrave; propos</a></li>
                                                    <li><a href="philosophie.html">Notre Philosophie</a></li>
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
                                            <li><a href="equipe.html">Notre &Eacute;quipe</a></li>
                                            <li><a href="transport.html">Transport</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>`;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Find the <nav> content and replace the <ul> inside it
    // Pattern: find <nav id="mobile-menu"> ... </nav> and replace the <ul>...</ul> inside
    const navRegex = /(<nav id="mobile-menu">\s*)<ul>[\s\S]*?<\/ul>(\s*<\/nav>)/;
    
    if (navRegex.test(html)) {
        html = html.replace(navRegex, '$1' + newMenu + '$2');
        fs.writeFileSync(file, html, 'utf8');
        console.log('Menu updated in: ' + file);
    } else {
        console.log('Nav not found in: ' + file);
    }
});
