const fs = require('fs');
let html = fs.readFileSync('news-details-1.html', 'utf8');

// 1. Breadcrumb
html = html.replace(/<h1 class="char-animation">Blog Details<\/h1>/, 
    '<h1 class="char-animation">La Dict&eacute;e P.G.L. : Nos &eacute;l&egrave;ves &agrave; l\'honneur !</h1>');

// 2. Featured Image
html = html.replace(/blog-details\.jpg/g, 'dictee_pgl.png');

// 3. Post Info
html = html.replace(/John Smith/g, 'Administration');
html = html.replace(/12 June, 2026/g, '12 Mars 2026');
html = html.replace(/Education/g, '&Eacute;v&egrave;nements');

// 4. Headline
html = html.replace(/10 Fun Learning Activities for Your Preschoolers at Home/g, 
    'La Victoire brille &agrave; la Dict&eacute;e P.G.L. : Une C&eacute;l&eacute;bration de la Francophonie');

// 5. Main Paragraphs (Replace the specific blocks)
const p1 = `Le 12 mars 2026 restera une date marquante dans la vie de l'&Eacute;cole Priv&eacute;e La Victoire. Nos &eacute;l&egrave;ves, du CE2 au CM2, ont particip&eacute; avec brio &agrave; la prestigieuse <strong>Dict&eacute;e P.G.L.</strong>, un \u00e9v\u00e9nement international d&eacute;di&eacute; &agrave; la ma\u00eetrise de la langue fran\u00e7aise.`;
const p2 = `Sous le th\u00e8me de l'excellence et de l'\u00e9panouissement, cette comp\u00e9tition n'est pas seulement un test d'orthographe, mais une v\u00e9ritable c\u00e9l\u00e9bration de la culture et de la solidarit\u00e9 internationale. Nos enfants ont d\u00e9montr&eacute; une concentration admirable et une passion pour les mots qui nous remplit de fiert&eacute;.`;
const p3 = `F\u00e9licitations &agrave; tous nos petits champions pour leur engagement et leur pers\u00e9v&eacute;rance ! Nous remercions \u00e9galement nos enseignants pour leur accompagnement quotidien vers l'excellence acad&eacute;mique.`;

html = html.replace(/Consectetur adipisicing elit[\s\S]+?reprehenderit\./, p1);
html = html.replace(/The is ipsum dolor sit[\s\S]+?consequat\./, p2);
html = html.replace(/Nulla facilisi\. Vestibulum tristique sem[\s\S]+?auctor\./, p3);

// 6. Quote
const quote = `"Voir nos &eacute;l&egrave;ves s'investir avec autant de passion dans la ma&icirc;trise de leur langue est la plus belle preuve de la vitalit&eacute; de notre projet p&eacute;dagogique." <br> &mdash; La Direction.`;
html = html.replace(/Pellentesque sollicitudin congue[\s\S]+?est vehicula\./, quote);

// 7. Subtitles
html = html.replace(/The Importance of Play in Kindergarten:/g, "L'Excellence Acad&eacute;mique au Coeur de nos Valeurs :");
html = html.replace(/Developing Social and Emotional Skills/g, "Un Engagement pour la Langue Fran&ccedil;aise");

// 8. Sidebar translations
html = html.replace(/<h3>Search<\/h3>/g, '<h3>Rechercher</h3>');
html = html.replace(/<h3>Articles R\u00e9cents<\/h3>/g, '<h3>Articles R&eacute;cents</h3>');
html = html.replace(/<h3>Cat\u00e9gories<\/h3>/g, '<h3>Cat&eacute;gories</h3>');
html = html.replace(/<h3>Mots-cl\u00e9s<\/h3>/g, '<h3>Mots-cl&eacute;s</h3>');

// 9. Tags
html = html.replace(/Time-Table/g, 'P&eacute;dagogie');
html = html.replace(/Children/g, 'Francophonie');
html = html.replace(/Examination/g, 'Excellence');
html = html.replace(/Sports/g, 'Loisirs');

fs.writeFileSync('news-details-1.html', html, 'utf8');
console.log('news-details-1.html surgically updated successfully!');
