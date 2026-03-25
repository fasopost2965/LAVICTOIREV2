const fs = require('fs');
let content = fs.readFileSync('about.html', 'utf8');

// The broken characters
content = content.replace(/Ã‰/g, '&Eacute;');
content = content.replace(/Ã©/g, '&eacute;');
content = content.replace(/Ã /g, '&agrave;');
content = content.replace(/Ã/g, '&agrave;'); // Catch any remaining stray A-tildes (which are invariably à in French here) but wait, let's be safe:
// "priv&eacute; &agrave; T&eacute;touan"
content = content.replace(/T&agrave;touan/g, 'T&eacute;touan'); // Fixed the over-aggressive A-tilde replace if any
content = content.replace(/Ã¢â‚¬Â /g, '&raquo;');
content = content.replace(/Ã¢â‚¬Â/g, '&raquo;');

fs.writeFileSync('about.html', content);
console.log('Fixed double-encoded characters.');
