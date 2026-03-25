const fs = require('fs');

// Per-cycle replacements for the checklist items
const cycleData = {
    'cycle-creche.html': [
        'Espaces de jeu s&eacute;curis&eacute;s et adaptés',
        'Activit&eacute;s sensorielles et d\'&eacute;veil',
        'Suivi personnalis&eacute; de l\'enfant',
        'Alimentation saine et repos adapt&eacute;',
        'Communication r&eacute;guli&egrave;re avec les parents',
        'Personnel qualifi&eacute; et bienveillant'
    ],
    'cycle-maternelle.html': [
        'Apprentissage par le jeu et l\'exploration',
        'Initiation &agrave; la lecture et l\'&eacute;criture',
        'D&eacute;couverte math&eacute;matique par la manipulation',
        'Ateliers artistiques et musicaux',
        'Sorties p&eacute;dagogiques r&eacute;guli&egrave;res',
        'D&eacute;veloppement de l\'autonomie'
    ],
    'cycle-primaire.html': [
        'Enseignement trilingue structur&eacute;',
        'Classes &agrave; effectifs r&eacute;duits',
        'Programme national marocain enrichi',
        'Activit&eacute;s parascolaires int&eacute;gr&eacute;es',
        'Soutien scolaire et suivi personnalis&eacute;',
        'Outils num&eacute;riques &eacute;ducatifs'
    ]
};

// Pre-build the SVG icon (same for all)
const svgIcon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.38397 14.1797C7.34153 14.1797 7.29954 14.171 7.26066 14.1539C7.22178 14.1369 7.18683 14.1121 7.15803 14.0809L1.06612 7.49119C1.02551 7.44726 0.99859 7.39244 0.988651 7.33344C0.978712 7.27445 0.986187 7.21384 1.01016 7.15902C1.03414 7.10421 1.07357 7.05758 1.12364 7.02483C1.17371 6.99208 1.23223 6.97464 1.29206 6.97464H4.22437C4.26839 6.97464 4.31191 6.98409 4.35197 7.00234C4.39204 7.0206 4.42772 7.04723 4.45661 7.08045L6.49255 9.42273C6.71258 8.95239 7.13852 8.16925 7.88597 7.21497C8.99095 5.8042 11.0463 3.7294 14.5627 1.85642C14.6307 1.82023 14.7097 1.81083 14.7843 1.83009C14.8588 1.84936 14.9235 1.89587 14.9654 1.96046C15.0073 2.02504 15.0235 2.103 15.0108 2.17894C14.998 2.25488 14.9573 2.32328 14.8966 2.37064C14.8831 2.38113 13.5273 3.44882 11.967 5.40448C10.5309 7.20417 8.62191 10.1469 7.68255 13.946C7.66605 14.0128 7.62767 14.0721 7.57354 14.1144C7.5194 14.1568 7.45263 14.1799 7.38388 14.1799L7.38397 14.1797Z" fill="#6754E9"/></svg>`;

Object.entries(cycleData).forEach(([file, items]) => {
    let content = fs.readFileSync(file, 'utf8');

    // === 1. Replace all Lorem ipsum paragraphs ===
    content = content.replace(
        /The is ipsum dolor sit amet[^<]*/gi, 
        'L\u2019&Eacute;cole Priv&eacute;e La Victoire s\'engage &agrave; offrir un cadre d\'apprentissage exceptionnel, bienveillant et stimulant pour chaque enfant.'
    );
    content = content.replace(
        /Nulla facilisi[\s\S]*?Sed a massa eget lacus consequat auctor\./gi,
        'Notre &eacute;quipe p&eacute;dagogique passionn&eacute;e met tout en oeuvre pour que chaque &eacute;l&egrave;ve se sente en s&eacute;curit&eacute;, valoris&eacute; et motiv&eacute; d&egrave;s son jeune &acirc;ge.'
    );

    // === 2. Replace the English list items in the `list-items` section ===
    const listsStart = content.indexOf('<div class="list-items">');
    const listsEnd = content.indexOf('</div>', content.indexOf('</ul>', content.indexOf('</ul>', listsStart)) + 5) + 6;

    if (listsStart !== -1) {
        const half = Math.ceil(items.length / 2);
        const list1 = items.slice(0, half).map(i => `<li>${svgIcon}\n${i}\n</li>`).join('\n');
        const list2 = items.slice(half).map(i => `<li>${svgIcon}\n${i}\n</li>`).join('\n');

        const newLists = `<div class="list-items">
<ul class="list wow fadeInLeft" data-wow-delay=".6s">
${list1}
</ul>
<ul class="list wow fadeInRight" data-wow-delay=".6s">
${list2}
</ul>
</div>`;

        content = content.substring(0, listsStart) + newLists + content.substring(listsEnd);
    }

    // === 3. Replace "Learning Teacher" / "Ut viverra" / "Safety and health" / "Designated areas" / "Variety" inline items ===
    content = content.replace(/Ut viverra bibendum lorem/gi, 'Environnement p&eacute;dagogique adapt&eacute;');
    content = content.replace(/Safety and health care\./gi, 'S&eacute;curit&eacute; et sant&eacute; de l\'enfant');
    content = content.replace(/Designated areas for reading\./gi, 'Espaces d&eacute;di&eacute;s &agrave; la lecture');
    content = content.replace(/Variety of age-appropriate books\./gi, 'Mat&eacute;riel p&eacute;dagogique adapt&eacute; &agrave; l\'&acirc;ge');

    fs.writeFileSync(file, content);
    console.log(`Cleaned: ${file}`);
});

console.log('Done! All remaining placeholder content replaced.');
