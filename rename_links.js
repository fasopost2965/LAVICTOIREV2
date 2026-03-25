const fs = require('fs');
let files = ['index.html', 'about.html', 'contact.html', 'cycles.html'];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Replace all program.html with cycles.html globally
    content = content.replace(/program\.html/g, 'cycles.html');
    fs.writeFileSync(file, content);
});

console.log('Global replace of program.html to cycles.html is done.');
