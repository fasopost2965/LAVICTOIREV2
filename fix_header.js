const fs = require('fs');

const files = [
    'index.html', 'about.html', 'contact.html', 'faq.html', 'philosophie.html', 
    'transport.html', 'cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html',
    'program-details.html', 'programs.html'
];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    let html = fs.readFileSync(file, 'utf8');

    // Make sure we are in header 4
    if (!html.includes('id="header-sticky"')) return;

    let searchPart = '<div class="header-right';
    let parts = html.split(searchPart);

    if (parts.length > 1) {
        let rightPart = parts[1];
        
        // Ensure mean__menu-wrapper is inside the header-right
        let menuIndex = rightPart.indexOf('<div class="mean__menu-wrapper"');
        if (menuIndex !== -1 && menuIndex < 500) { // Make sure it's part of the header right block
            
            // Find where mean__menu-wrapper ends (after </nav> then two </div> closing tags)
            let navEnd = rightPart.indexOf('</nav>');
            if(navEnd !== -1) {
                let div1End = rightPart.indexOf('</div>', navEnd) + 6;
                let div2End = rightPart.indexOf('</div>', div1End) + 6;
                
                let menuBlock = rightPart.substring(menuIndex, div2End);
                
                // Remove menuBlock from rightPart
                let newRightPart = rightPart.replace(menuBlock, '');
                
                // Reconstruct HTML with menuBlock BEFORE header-right
                let newHtml = parts[0] + menuBlock + '\n                        ' + searchPart + newRightPart;
                
                if (newHtml !== html) {
                    fs.writeFileSync(file, newHtml, 'utf8');
                    console.log('Fixed header in: ' + file);
                }
            }
        } else {
            console.log('Header already fixed or structured differently in: ' + file);
        }
    }
});
