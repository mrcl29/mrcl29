export const NAME = "Marc Llobera Villalonga";

import foto from "@/assets/foto_CV.avif";
export const FOTO = foto;

export const INFO = `Soy un estudiante de Ingeniería Informática de 22 años, actualmente cursando mis estudios en la Universidad de las Islas Baleares (UIB) en Mallorca. Mi formación abarca áreas clave como <b>Minería de Datos, Aprendizaje Automático y Desarrollo Web</b>.
<br />
<br />
He adquirido una sólida experiencia en desarrollo <b>Full Stack</b> con habilidades en lenguajes y tecnologías populares como <b>React, SQL, Java y Python</b> entre otros. Mi enfoque se centra en crear soluciones completas y eficientes, desde el diseño de interfaces hasta la gestión de bases de datos y servidores.`;

// import instagram from "@/assets/contact/instagram.svg";
import github from "@/assets/contact/github.svg";
import email from "@/assets/contact/email.svg";
import linkedin from "@/assets/contact/linkedin.svg";
import cv from "@/assets/contact/cv.svg";
export const CONTACT = {
  // Instagram: {
  //   url: "https://www.instagram.com/llobera29/",
  //   image: instagram,
  // },
  LinkedIn: {
    user: "LinkedIn",
    url: "https://www.linkedin.com/in/marc-llobera-villalonga/",
    image: linkedin,
  },
  GitHub: {
    user: "mrcl29",
    url: "https://github.com/mrcl29",
    image: github,
  },
  Email: {
    user: "m.llobera@outlook.com",
    url: "mailto:m.llobera@outlook.com",
    image: email,
  },
  CV: {
    user: "CV",
    url: "",
    image: cv,
  },
};

// Importar las imágenes de todas las herramientas
import javaImage from "@/assets/tools/java.svg";
import pythonImage from "@/assets/tools/python.svg";
import javascriptImage from "@/assets/tools/javascript.svg";
import rustImage from "@/assets/tools/rust.svg";
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
      //points: 3,
    },
    Python: {
      url: "https://python.org",
      image: pythonImage,
      //points: 3,
    },
    JavaScript: {
      url: "https://en.wikipedia.org/wiki/JavaScript",
      image: javascriptImage,
      //points: 2,
    },
    Go: {
      url: "https://go.dev/",
      image: golangImage,
      //points: 1,
    },
  },
  Frontend: {
    React: {
      url: "https://react.dev/",
      image: reactImage,
      //points: 2,
    },
    Tailwind: {
      url: "https://tailwindcss.com/",
      image: tailwindImage,
      //points: 2,
    },
    HTML: {
      url: "https://en.wikipedia.org/wiki/HTML",
      image: htmlImage,
      //points: 3,
    },
    CSS: {
      url: "https://en.wikipedia.org/wiki/CSS",
      image: cssImage,
      //points: 2,
    },
    Jinja: {
      url: "https://jinja.palletsprojects.com/en/stable/",
      image: jinjaImage,
      //points: 2,
    },
  },
  Backend: {
    Flask: {
      url: "https://flask.palletsprojects.com/en/stable/",
      image: flaskImage,
      //points: 1,
    },
    MariaDB: {
      url: "https://mariadb.org/",
      image: mariadbImage,
      //points: 3,
    },
    MySQL: {
      url: "https://www.mysql.com/",
      image: mysqlImage,
      //points: 3,
    },
    Postgre: {
      url: "https://www.postgresql.org/",
      image: postgresqlImage,
      //points: 2,
    },
    MongoDB: {
      url: "https://www.mongodb.com/",
      image: mongodbImage,
      //points: 1,
    },
  },
  Herramientas: {
    Git: {
      url: "https://git-scm.com/",
      image: gitImage,
      //points: 3,
    },
    Grafana: {
      url: "https://grafana.com/",
      image: grafanaImage,
      //points: 2,
    },
    Docker: {
      url: "https://www.docker.com/",
      image: dockerImage,
      //points: 1,
    },
    Linux: {
      url: "https://en.wikipedia.org/wiki/Linux",
      image: linuxImage,
      //points: 2,
    },
  },
  "Aprendiendo...": {
    Rust: {
      url: "https://www.rust-lang.org/",
      image: rustImage,
      //points: 1,
    },
    PHP: {
      url: "https://www.php.net/",
      image: phpImage,
      //points: 1,
    },
    C: {
      url: "https://en.wikipedia.org/wiki/C_(programming_language)",
      image: cImage,
      //points: 1,
    },
  },
};
