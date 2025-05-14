export const NAME = "Marc Llobera Villalonga";

import foto from "/foto_CV.avif";
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
    url: "/portfolio/CV_Marc_Llobera_Villalonga.pdf",
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
import fastapiImage from "@/assets/tools/fastapi.svg";
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
import viteImage from "@/assets/tools/vite.svg";

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
    FastAPI: {
      url: "https://fastapi.tiangolo.com/",
      image: fastapiImage,
      //points: 1,
    },
  },
  Databases:{
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
  // "Aprendiendo...": {
  //   Rust: {
  //     url: "https://www.rust-lang.org/",
  //     image: rustImage,
  //     //points: 1,
  //   },
  //   PHP: {
  //     url: "https://www.php.net/",
  //     image: phpImage,
  //     //points: 1,
  //   },
  //   C: {
  //     url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  //     image: cImage,
  //     //points: 1,
  //   },
  // },
};

// Importar las imágenes de todos los proyectos
import portfolioImage from "@/assets/projects/portfolio.png";
import dataMiningImage from "@/assets/projects/data_mining.png";
import compiladorImage from "@/assets/projects/compilador.png";
import jocdel7Image from "@/assets/projects/jocdel7.png";

export const PROJECTS = {
  Portfolio:
  {
    image: portfolioImage,
    description:"Portfolio personal tomado como proyecto Frontend para practicar el uso de React y Tailwind, y además mejorar mis habiliades de diseño y buenas prácticas en la programación descriptiva.",
    tools: [reactImage, tailwindImage, viteImage],
    url: "https://github.com/mrcl29/Portfolio",
  },
  "Grafana-Data-Report":
  {
    image: grafanaImage,
    description:"Script de Python para automatizar la creación de reportes personalizados en formato excel a partir de los datos recogidos en dashboards de Grafana.",
    tools: [pythonImage, flaskImage, linuxImage],
    url: "https://github.com/mrcl29/Automatic-Grafana-Data-Report",
  },
  "Software de Provisión":
  {
    image: alcortImage,
    description:"Gran parte de mis prácticas las he dedicado a mantener y mejorar un software de provisión y mantenimiento FTTH.",
    tools: [pythonImage, flaskImage, jinjaImage, htmlImage, javascriptImage, cssImage, mysqlImage],
    url: "https://alcort.net/soluciones/meeting-point/",
  },
  Compilador:
  {
    image: compiladorImage,
    description:"Creación de un compilador para un lenguaje de programación inventado generando su equivalente a lenguaje ensamblador, y usando las librerías de CUP y JFlex.",
    tools: [javaImage],
    url: "https://github.com/mrcl29/Compilador",
  },
  "Gun Incidents in the USA":
  {
    image: dataMiningImage,
    description:"Proyecto de Minería de Datos creado con Jupyther Notebook donde se analizan un gran volumen de datos relacionados con incidentes con armas en los Estados Unidos.",
    tools: [pythonImage],
    url: "https://github.com/mrcl29/Gun-Incidents-In-USA-DataMining",
  },
  "Joc del 7":
  {
    image: jocdel7Image,
    description:"Juego de cartas creado en Java.",
    tools: [javaImage],
    url: "https://github.com/mrcl29/Joc-del-7",
  },
};

// Importar las imágenes de todas mis experiencias
import alcortImage from "@/assets/experience/alcort.avif"
import lifeguardImage from "@/assets/experience/lifeguardImage.jpg"
export const ALCORT = alcortImage;

export const EXPERIENCES = {
  "Desarrollador Full Stack":
  {
    where: "Alcort Ingeniería y Asesoría",
    image: alcortImage,
    from: "01/07/2024",
    to: "Actualidad",
    description: "Realicé prácticas y posteriormente fui contratado para tareas como desarrollador Full Stack en una empresa especializada entre otras cosas en operación y mantenimiento de telecomunicaciones, donde trabajé con tecnologías como Python, Flask, Jinja, Linux shell, Grafana y otras herramientas.",
    url: "https://alcort.net/",
  },
  "Socorrista":
  {
    where: "Grupo Salvamento Acuático",
    image: lifeguardImage,
    from: "01/05/2022",
    to: "30/08/2023",
    description: "Trabajé dos veranos como socorrista, donde obtuve el certificado de primeros auxilios y mejoré mi nivel de inglés mediante la interacción diaria con clientes.",
    url: "https://www.salvamento.net/empresa",
  },
}

import uibImage from "@/assets/education/uib.svg"

export const EDUCATION = {
  "Grado en Ingeniería Informática":
  {
    where: "Universidad de las Islas Baleares (UIB)",
    image: uibImage,
    from: "2020",
    to: "2025",
    url: "https://estudis.uib.es/es/estudis-de-grau/grau/informatica/GIN3-E/21776/index.html",
  }
}