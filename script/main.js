//  for main course introduction
export const course = [
  {
    id: 1,
    image: "images/course-image/what-erp.png",
    title: "Intro-to-ERP",
  },

  ,
  {
    id: 2,
    image: "images/course-image/what-is-server.png",
    title: "Server",
  },
  {
    id: 3,
    image: "images/course-image/What-is-database.png",
    title: "Database",
  },
  {
    id: 4,
    image: "images/course-image/What-is-HTML.jpg",
    title: "HTML",
  },
  {
    id: 5,
    image: "images/course-image/what-is-css.jpg ",
    title: "CSS",
  },
  {
    id: 6,
    image: "images/index-img/project-img.jpg",
    title: "project",
  },
];
const backendHolder = document.querySelector(".js-backend-container");
const holder1 = document.querySelector(".js-course-card-container");
let courses = "";
course.forEach((course) => {
  courses += `
  <div class="course-card">
     <section class="course-section">
        <img src="${course.image}" alt="html-picture">
        <p class="course-title"> ${course.title}</p>
        <div class="button-container">
          <button class="course-link" data-link-id=${course.id}>Enroll</button>
        </div>
      </secction>
  </div>
  `;
  holder1.innerHTML = courses;
});

// for iframe videos
const iframes = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/E4AdYbvrlag?si=aUcdAi-u5s-fQlel",
    headerTitle: "Introduction to ERP System",
    description:
      "please before going to any section of this course watch all the videos according to the order we put to undestand what we will learn in the future",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/lY1zKP0YJaM?si=NeDQzPtZUNz2aEt6",
  },
  {
    id: 1,
    src: "https://www.youtube.com/embed/Nxah_8YN-Kg?si=tO2wT_hwpaDFGCft",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/6_x435ysosU?si=eHwH7VEtXFY_teIo",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/JL9i2jG_31Y?si=auUlLsdAeIBV4v-m",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/vOOcNFzbPR8?si=gfIBwlLIVvBef9bF",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/vz2GrI6B-Eg?si=G6l-WsUDEcNhqFhz",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/jJ8bBnCbykU?si=v1GZcHF25SsrqaSi",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/UqPIF7dmsrc?si=zpgEwqObta_hyK5G",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/b398UwTzTQ8?si=_cNk-puNDtill1wd",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/WXAEWhTUG1w?si=Nin9G7lqvRvCGGL2",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/fk9K2xcD19g?si=s3LU4oqUb7tkgtKv",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/yClv2lv7sHQ?si=IaJ9dEiUgAwzhWx2",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/lYR_H7qP28s?si=kEDXyzAK7lvRHWyC",
  },
  ,
  {
    id: 5,
    src: "https://www.youtube.com/embed/w_lajNJudmU?si=uYjZ7PrH7UqlBuh7",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/hFZk_AoJbbY?si=UAzGHDNnrspFqfx8",
  },
  {
    id: 6,
    src: "https://www.youtube.com/embed/ZJDMamPJEYc?si=Q2Akaro39hXZEcOf",
  },
];
// make all buttton in main section interactive
const intro = document.querySelector(".js-intro-container");
const descriptionContainer = document.querySelector(".description-container");
const iframeHolder = document.querySelector(".js-iframe-container");
let frameVideo = "";
const link = document.querySelectorAll(".course-link");
link.forEach((links) => {
  const linkid = links.dataset.linkId;
  links.addEventListener("click", () => {
    iframes.forEach((iframes) => {
      if (iframes.id == linkid) {
        frameVideo += `

    <iframe width="560" height="315" src=${iframes.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

`;
        backendHolder.remove();
        intro.remove();
        holder1.remove();
        iframeHolder.innerHTML = frameVideo;
        iframeHolder.classList.add("js-iframe-holder");
        descriptionContainer.innerHTML = `
 <h1>
      Introduction to ERP System
    </h1>
    <p class="description">
      please before going to any section of this course <strong>watch all</strong> videos according to the order we put  to undestand what we will learn in the future
      </p>
 `;
      }
    });
  });
});

//  logout btn
const logout = document.querySelector(".js-logout");
logout.addEventListener("click", () => {
  window.open("login.html");
});


