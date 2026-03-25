const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

function replaceInFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${filePath}`, err);
            return;
        }

        let updatedData = data
            // Navbar updates
            .replace(/>Cycles<\/a>/g, '>Nos Classes</a>')
            .replace(/cycles\.html/g, 'classes.html')
            // Updates in breadcrumb and headings
            .replace(/<li>Cycles<\/li>/g, '<li>Nos Classes</li>')
            .replace(/<h1 class="char-animation">Cycles<\/h1>/g, '<h1 class="char-animation">Nos Classes</h1>');

        if (data !== updatedData) {
            fs.writeFile(filePath, updatedData, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing ${filePath}`, err);
                } else {
                    console.log(`Updated: ${path.basename(filePath)}`);
                }
            });
        }
    });
}

function processDirectory(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(`Error listing directory ${dirPath}`, err);
            return;
        }

        files.forEach(file => {
            const fullPath = path.join(dirPath, file);
            if (fs.statSync(fullPath).isFile() && path.extname(fullPath) === '.html') {
                replaceInFile(fullPath);
            }
        });
    });
}

processDirectory(directoryPath);
