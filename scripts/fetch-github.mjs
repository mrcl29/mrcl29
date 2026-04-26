import fs from 'fs';
import 'dotenv/config';

const TOKEN = process.env.GITHUB_TOKEN;
const USERNAME = 'mrcl29';

if (!TOKEN) {
  console.error('❌ Error: GITHUB_TOKEN no está definido en las variables de entorno.');
  process.exit(1);
}

const query = `
query {
  user(login: "${USERNAME}") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          stargazerCount
          url
          homepageUrl
          repositoryTopics(first: 5) { nodes { topic { name } } }
          languages(first: 5) { nodes { name } }
        }
      }
    }
  }
}`;

async function getRepos() {
  console.log('📡 Extrayendo repos de GitHub...');
  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: { Authorization: `bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    });

    const { data } = await res.json();

    var nodes = data.user.pinnedItems.nodes;

    const path = './public/assets/repos.json';

    if (!fs.existsSync('./public/assets')) fs.mkdirSync('./public/assets', { recursive: true });

    if (nodes) {
      nodes.forEach((node, index) => {
        const languages = node.languages.nodes.map((lang) => lang.name);
        const topics = node.repositoryTopics.nodes.map((topic) => topic.topic.name);

        const seen = new Set();
        const techList = [];
        [...languages, ...topics].forEach((item) => {
          if (!seen.has(item.toLowerCase())) {
            seen.add(item.toLowerCase());
            techList.push(item);
          }
        });

        techList.sort((a, b) => a.localeCompare(b));

        node.tech = {};
        techList.forEach((tech) => {
          const lower = tech.toLowerCase();
          const iconPath = `./public/assets/icons/${lower}/${lower}.svg`;
          const iconDarkPath = `./public/assets/icons/${lower}/${lower}_dark.svg`;
          const iconLightPath = `./public/assets/icons/${lower}/${lower}_light.svg`;

          let icons = { dark: '', light: '' };

          if (fs.existsSync(iconPath)) {
            const content = fs.readFileSync(iconPath, 'utf-8');
            icons.light = content;
            icons.dark = content;
          }

          if (fs.existsSync(iconDarkPath)) {
            icons.dark = fs.readFileSync(iconDarkPath, 'utf-8');
          }

          if (fs.existsSync(iconLightPath)) {
            icons.light = fs.readFileSync(iconLightPath, 'utf-8');
          }

          node.tech[tech] = icons;
        });

        const animationNum = index + 1;
        const animatedIconPath = `./public/assets/animated_icons/animation_${animationNum}_dark.svg`;
        if (fs.existsSync(animatedIconPath)) {
          node.animatedIcon = fs.readFileSync(animatedIconPath, 'utf-8');
        }
      });
      fs.writeFileSync(path, JSON.stringify(nodes, null, 2));
      console.log(`✅ ¡Éxito! Datos guardados en ${path}`);
    }
  } catch (error) {
    console.error('❌ Error al obtener repositorios:', error);
    process.exit(1);
  }
}

getRepos();
