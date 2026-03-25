const fs = require('fs');
let htmls = ['about.html', 'index.html', 'contact.html'];
let foundAny = false;
htmls.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let regex = /Ã/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        foundAny = true;
        console.log(`Found in ${file} at ${match.index}: ${content.substring(match.index - 30, match.index + 50).replace(/\n/g, ' ')}`);
    }
});
if(!foundAny) console.log("All files are perfectly clean!");
