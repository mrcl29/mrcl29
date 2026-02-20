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
          languages(first: 3) { nodes { name } }
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
    const path = './public/assets/repos.json';

    if (!fs.existsSync('./public/assets')) fs.mkdirSync('./public/assets', { recursive: true });

    fs.writeFileSync(path, JSON.stringify(data.user.pinnedItems.nodes, null, 2));
    console.log(`✅ ¡Éxito! Datos guardados en ${path}`);
  } catch (error) {
    console.error('❌ Error al obtener repositorios:', error);
    process.exit(1);
  }
}

getRepos();
