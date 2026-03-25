const fs = require('fs');

let files = ['index.html', 'cycles.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // In the cycle blocks, we need to specifically target the hrefs.
    // Crèche box:
    // <h3><a href="cycles.html">La Cr&egrave;che</a></h3> or <h3><a href="cycles.html">Cr&egrave;che</a></h3>
    content = content.replace(/(<h3><a href=")cycles\.html(">La Cr&egrave;che<\/a><\/h3>)/i, '$1cycle-creche.html$2');
    content = content.replace(/(<h3><a href=")cycles\.html(">Cr&egrave;che<\/a><\/h3>)/i, '$1cycle-creche.html$2');

    // Maternelle box:
    content = content.replace(/(<h3><a href=")cycles\.html(">La Maternelle<\/a><\/h3>)/i, '$1cycle-maternelle.html$2');
    content = content.replace(/(<h3><a href=")cycles\.html(">Maternelle<\/a><\/h3>)/i, '$1cycle-maternelle.html$2');

    // Primaire box:
    content = content.replace(/(<h3><a href=")cycles\.html(">Le Primaire<\/a><\/h3>)/i, '$1cycle-primaire.html$2');
    content = content.replace(/(<h3><a href=")cycles\.html(">Primaire<\/a><\/h3>)/i, '$1cycle-primaire.html$2');

    fs.writeFileSync(file, content);
});

console.log('Specific cycle block links updated.');
