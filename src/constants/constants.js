export const NAME = "Marc Llobera Villalonga";

import foto from "@/assets/foto_CV.avif";
export const FOTO = foto;

import instagram from "@/assets/contact/instagram.svg";
import github from "@/assets/contact/github.svg";
import email from "@/assets/contact/email.svg";
import linkedin from "@/assets/contact/linkedin.svg";
export const CONTACT = {
  Instagram: {
    url: "https://www.instagram.com/llobera29/",
    image: instagram,
  },
  GitHub: {
    url: "https://github.com/mrcl29",
    image: github,
  },
  Email: {
    url: "mailto:m.llobera@outlook.com",
    image: email,
  },
  LinkedIn: {
    url: "https://www.linkedin.com/in/marc-llobera-villalonga/",
    image: linkedin,
  },
};

// Importar las imágenes de todas las herramientas
import javaImage from "@/assets/tools/java.svg";
import pythonImage from "@/assets/tools/python.svg";
import javascriptImage from "@/assets/tools/javascript.svg";
import golangImage from "@/assets/tools/golang.svg";
import phpImage from "@/assets/tools/php.svg";
import cImage from "@/assets/tools/c.svg";
import reactImage from "@/assets/tools/react.svg";
import tailwindImage from "@/assets/tools/tailwind.svg";
import jinjaImage from "@/assets/tools/jinja.svg";
import flaskImage from "@/assets/tools/flask.svg";
import mariadbImage from "@/assets/tools/mariadb.svg";
import mysqlImage from "@/assets/tools/mysql.svg";
import postgresqlImage from "@/assets/tools/postgresql.svg";
import mongodbImage from "@/assets/tools/mongodb.svg";
import gitImage from "@/assets/tools/git.svg";
import grafanaImage from "@/assets/tools/grafana.svg";
import dockerImage from "@/assets/tools/docker.svg";
import htmlImage from "@/assets/tools/html.svg";
import cssImage from "@/assets/tools/css.svg";
import linuxImage from "@/assets/tools/linux.svg";

// Diccionario de herramientas con URL y las imágenes importadas
export const TOOLS = {
  "Lenguajes de Programación": {
    Java: {
      url: "https://java.com",
      image: javaImage,
      stars: 3,
    },
    Python: {
      url: "https://python.org",
      image: pythonImage,
      stars: 3,
    },
    JavaScript: {
      url: "https://en.wikipedia.org/wiki/JavaScript",
      image: javascriptImage,
      stars: 2,
    },
    Go: {
      url: "https://go.dev/",
      image: golangImage,
      stars: 1,
    },
    PHP: {
      url: "https://www.php.net/",
      image: phpImage,
      stars: 1,
    },
    C: {
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
      image: cImage,
      stars: 1,
    },
  },
  Frameworks: {
    React: {
      url: "https://react.dev/",
      image: reactImage,
      stars: 2,
    },
    Tailwind: {
      url: "https://tailwindcss.com/",
      image: tailwindImage,
      stars: 2,
    },
    Jinja: {
      url: "https://jinja.palletsprojects.com/en/stable/",
      image: jinjaImage,
      stars: 2,
    },
    Flask: {
      url: "https://flask.palletsprojects.com/en/stable/",
      image: flaskImage,
      stars: 1,
    },
  },
  "Bases de Datos": {
    MariaDB: {
      url: "https://mariadb.org/",
      image: mariadbImage,
      stars: 3,
    },
    MySQL: {
      url: "https://www.mysql.com/",
      image: mysqlImage,
      stars: 3,
    },
    Postgre: {
      url: "https://www.postgresql.org/",
      image: postgresqlImage,
      stars: 2,
    },
    MongoDB: {
      url: "https://www.mongodb.com/",
      image: mongodbImage,
      stars: 1,
    },
  },
  Herramientas: {
    Git: {
      url: "https://git-scm.com/",
      image: gitImage,
      stars: 3,
    },
    Grafana: {
      url: "https://grafana.com/",
      image: grafanaImage,
      stars: 2,
    },
    Docker: {
      url: "https://www.docker.com/",
      image: dockerImage,
      stars: 1,
    },
  },
  Extra: {
    HTML: {
      url: "https://en.wikipedia.org/wiki/HTML",
      image: htmlImage,
      stars: 3,
    },
    CSS: {
      url: "https://en.wikipedia.org/wiki/CSS",
      image: cssImage,
      stars: 2,
    },
    Linux: {
      url: "https://en.wikipedia.org/wiki/Linux",
      image: linuxImage,
      stars: 2,
    },
  },
};
