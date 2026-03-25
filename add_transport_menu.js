const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;
const searchString = '<li><a href="philosophie.html">Notre Philosophie</a></li>';
const replaceString = '<li><a href="philosophie.html">Notre Philosophie</a></li>\n                                            <li><a href="transport.html">Transport Scolaire</a></li>';

function replaceInFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return;
        // Make sure not to duplicate
        if (data.includes('href="transport.html"')) return;

        let updatedData = data.split(searchString).join(replaceString);

        if (data !== updatedData) {
            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (!err) console.log(`Updated: ${path.basename(filePath)}`);
            });
        }
    });
}

function processDirectory(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) return;
        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            if (fs.statSync(fullPath).isFile() && path.extname(fullPath) === '.html') {
                replaceInFile(fullPath);
            }
        });
    });
}
processDirectory(directoryPath);
