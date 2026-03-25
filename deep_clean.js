const fs = require('fs');

const files = ['cycle-creche.html', 'cycle-maternelle.html', 'cycle-primaire.html'];

const replacements = [
    // Offcanvas leftovers (should have been synced but still catches)
    [/Hello There!/g, 'Bienvenue !'],
    [/Lorem ipsum dolor sit amet consectetur adipisicing elit\. Animi natus quasi sunt eum ducimus\./g, 'Un environnement d\'apprentissage exceptionnel o&ugrave; chaque enfant trace son propre chemin vers le succ&egrave;s.'],
    [/Lorem ipsum[^<]*/gi, 'Un &eacute;tablissement priv&eacute; d\'excellence &agrave; T&eacute;touan.'],
    
    // Header top section  
    [/Kindergarten is an early childhood educational environment/g, 'Un environnement &eacute;panouissant pour vos enfants'],
    [/Learn More/g, 'En savoir plus'],
    [/kidza@gmial\.com/g, 'contact@groupelavictoire.com'],
    [/\+00 \(47\) 939 4888/g, '06 38 91 53 02'],
    [/href="tel:\+[^"]+"/g, 'href="tel:0638915302"'],
    [/href="mailto:kidza@gmial\.com"/g, 'href="mailto:contact@groupelavictoire.com"'],
    [/Graaf Floriss 22A CH NY/g, 'Rue Yassima, T&eacute;touan'],
    
    // Start Learning -> Inscriptions
    [/Start Learning/g, 'Inscriptions'],
    
    // Contact Us -> Contactez-nous
    [/Contact Us/g, 'Contactez-nous'],
    [/Call Us/g, 'Appelez-nous'],
    [/Send Email/g, 'Envoyez un Email'],
    [/>Location</g, '>Adresse<'],
    [/Chicago 5375 NY, USA/g, 'Rue Yassima, T&eacute;touan'],
    [/\+4903983493999/g, '0638915302'],
    [/href="tel:\+4903983493999"/g, 'href="tel:0638915302"'],
    [/href="mailto:yordomain@gmial\.com"/g, 'href="mailto:contact@groupelavictoire.com"'],
    [/yordomain@gmial\.com/g, 'contact@groupelavictoire.com'],
    
    // breadcrumb section texts
    [/Program Details/g, 'D&eacute;tails du Cycle'],
    
    // Unused sections - remove safely
    // We'll keep them but at least translate the teacher section
    [/Learning Teacher/g, 'Enseignante'],
    
    // misc English UI elements
    [/index-2\.html/g, 'index.html'],
    [/Read More/g, 'Lire plus'],
    [/View All/g, 'Voir tout'],
    [/Search Here\.\.\./g, 'Rechercher...'],
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    replacements.forEach(([pattern, replacement]) => {
        content = content.replace(pattern, replacement);
    });
    
    fs.writeFileSync(file, content);
    console.log(`Cleaned: ${file}`);
});

console.log('Done! All remaining English/Lorem cleaned.');
