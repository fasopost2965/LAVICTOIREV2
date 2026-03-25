const fs = require('fs');

// Template for details page
const detailsTemplate = fs.readFileSync('news-details.html', 'utf8');

const articles = [
    {
        id: 1,
        date: '12 Mars 2026',
        title: 'La Dict\u00e9e P.G.L. : Nos \u00e9l\u00e8ves \u00e0 l\'honneur !',
        summary: 'Retour sur la participation de l\'\u00e9cole \u00e0 cette comp\u00e9tition internationale de fran\u00e7ais. Une belle preuve de l\'excellence acad\u00e9mique.',
        image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
        content: `
            <p>Le 12 mars 2026 restera une date marquante dans le calendrier p\u00e9dagogique de notre \u00e9tablissement. Nos \u00e9l\u00e8ves ont particip\u00e9 avec brio \u00e0 la c\u00e9l\u00e8bre <strong>Dict\u00e9e P.G.L.</strong>, un \u00e9v\u00e9nement international d\u00e9di\u00e9 \u00e0 la ma\u00eetrise de la langue fran\u00e7aise et \u00e0 la solidarit\u00e9.</p>
            <p>Cette comp\u00e9tition, port\u00e9e par la Fondation Paul G\u00e9rin-Lajoie, ne se limite pas \u00e0 un simple exercice d\'orthographe. Elle sensibilise nos enfants aux enjeux mondiaux tout en valorisant la richesse de la francophonie.</p>
            <blockquote>"Voir nos \u00e9l\u00e8ves s'investir avec autant de passion dans la lecture et l'orthographe est notre plus grande fiert\u00e9." \u2014 Direction P\u00e9dagogique.</blockquote>
            <p>F\u00e9licitations \u00e0 tous nos participants et mention sp\u00e9ciale \u00e0 nos finalistes r\u00e9gionaux qui portent haut les couleurs de La Victoire !</p>
        `
    },
    {
        id: 2,
        date: '20 F\u00e9vrier 2026',
        title: 'Un Laboratoire \u00e0 Ciel Ouvert pour nos CE2',
        summary: 'Reportage sur la s\u00e9ance de sciences exp\u00e9rimentales r\u00e9alis\u00e9e dans la cour. Apprendre en s\'amusant et en pratiquant.',
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80',
        content: `
            <p>Pourquoi rester enfermer dans une salle quand la nature nous offre le plus beau des laboratoires ? Le 20 f\u00e9vrier, les \u00e9l\u00e8ves de la classe de <strong>CE2</strong> ont investi la cour de l\'\u00e9cole pour une s\u00e9ance de sciences hors du commun.</p>
            <p>Au programme : observation directe, manipulation et d\u00e9marche scientifique. Nos petits chercheurs ont pu explorer les cycles de vie et les propri\u00e9t\u00e9s de l'environnement qui les entoure, sous la supervision attentive de leurs enseignants.</p>
            <p>Cette approche de <em>p\u00e9dagogie active</em> est au c\u0153ur de notre vision : rendre l\'élève acteur de son savoir et stimuler sa curiosit\u00e9 naturelle.</p>
        `
    },
    {
        id: 3,
        date: '15 Janvier 2026',
        title: 'Inscriptions 2026-2027 : C\'est Parti !',
        summary: 'Lancement officiel de la campagne et pr\u00e9sentation des innovations pr\u00e9vues pour la rentr\u00e9e prochaine.',
        image: 'https://images.unsplash.com/photo-1577891729319-86adcd9628ed?w=600&q=80',
        content: `
            <p>La nouvelle ann\u00e9e commence sous le signe de l\'avenir ! L\'\u00c9cole Priv\u00e9e La Victoire annonce l'ouverture officielle des inscriptions pour l'ann\u00e9e scolaire 2026-2027.</p>
            <p>Pour cette nouvelle rentr\u00e9e, nous renfor\u00e9ons notre engagement vers l\'excellence avec de nouvelles am\u00e9liorations :</p>
            <ul>
                <li>D\u00e9ploiement de nouveaux tableaux interactifs dans toutes les classes.</li>
                <li>Renforcement du programme d'anglais et d'arabe.</li>
                <li>Nouvelles activit\u00e9s extra-scolaires (Robotique, Arts Plastiques).</li>
            </ul>
            <p>Nous invitons les parents int\u00e9ress\u00e9s \u00e0 venir nous rencontrer et \u00e0 visiter nos locaux lors de nos matin\u00e9es "Portes Ouvertes".</p>
        `
    }
];

// 1. Generate Detail Pages
articles.forEach(art => {
    let content = detailsTemplate;
    content = content.replace(/<h1>.*?<\/h1>/, `<h1>${art.title}</h1>`);
    content = content.replace(/<span class="date">.*?<\/span>/, `<span class="date"><i class="fal fa-calendar-alt"></i> ${art.date}</span>`);
    content = content.replace(/<div class="news-details-content">[\s\S]*?<\/div>/, `<div class="news-details-content">${art.content}</div>`);
    // Placeholder for image
    content = content.replace(/<img src="assets\/img\/news\/news-details\.jpg" alt="img">/, `<img src="${art.image}" alt="img" style="width:100%; border-radius:20px;">`);
    
    fs.writeFileSync(`news-details-${art.id}.html`, content, 'utf8');
    console.log(`Created: news-details-${art.id}.html`);
});

// 2. Update Listing Page (news.html)
let newsList = fs.readFileSync('news.html', 'utf8');
const newsItems = articles.map(art => `
                <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".${art.id * 2}s">
                    <div class="news-card-items style-2">
                        <div class="news-image">
                            <img src="${art.image}" alt="news-img">
                            <div class="post-date">
                                <h3>${art.date.split(' ')[0]}</h3>
                                <span>${art.date.split(' ')[1]}</span>
                            </div>
                        </div>
                        <div class="news-content">
                            <p>${art.date}</p>
                            <h3>
                                <a href="news-details-${art.id}.html">${art.title}</a>
                            </h3>
                            <p>${art.summary}</p>
                            <a href="news-details-${art.id}.html" class="link-btn">En savoir plus <i class="fal fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
`).join('');

const newsContainerRegex = /<div class="row g-4">[\s\S]*?<\/div>\s*<div class="page-nav-wrap/;
newsList = newsList.replace(newsContainerRegex, `<div class="row g-4">${newsItems}</div>\n                    <div class="page-nav-wrap`);

fs.writeFileSync('news.html', newsList, 'utf8');
console.log('news.html updated with real articles!');
