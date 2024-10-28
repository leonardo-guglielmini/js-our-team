const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const teamList = document.getElementById("team-list");

function displayListMembers(list, parentEl) {
  const outerRowEl = document.createElement("div");
  outerRowEl.classList.add("row", "d-flex", "space-around", "mx-2")

  for (let i = 0; i < list.length; i++) {
    let outerCol4El = document.createElement("div");
    outerCol4El.classList.add("col-4", "px-4", "py-2");

    let innerRowEl = document.createElement("div");
    innerRowEl.classList.add("row");

    let innerCol3El = document.createElement("div");
    innerCol3El.classList.add("col-3", "g-0");

    let innerCol9El = document.createElement("div");
    innerCol9El.classList.add("col-9", "bg-black", "text-white", "ps-4");


    let imgEl = document.createElement("img");
    imgEl.classList.add("w-100", "h-100");
    imgEl.src = list[i].img;

    // let ulEl = document.createElement("ul");
    // ulEl.classList.add("h-100");
    // ulEl.classList.add("d-flex", "flex-wrap");

    // for (let key in list[i]) {
    //   if (key === "img") {
    //     continue;
    //   }

    //   let liEl = document.createElement("li");
    //   liEl.classList.add("w-100");
    //   liEl.textContent = list[i][key];

    //   if (key === "name") {
    //     liEl.classList.add("fw-bold", "fs-4");

    //   } else if (key === "email") {
    //     liEl.textContent = "";
    //     let emailEl = document.createElement("a");
    //     emailEl.href = "#";
    //     emailEl.classList.add("text-primary");
    //     emailEl.textContent = list[i][key];
    //     liEl.appendChild(emailEl);
    //   }
    //   console.log(liEl);
    //   ulEl.appendChild(liEl);
    // }

    for (key in list[i]) {
      if (key === "img") {
        continue;
      }

      let tempEl;

      if (key === "name") {
        tempEl = document.createElement("h1");
        tempEl.classList.add("fw-bold", "fs-4", "pt-2");
      } else if (key === "role") {
        tempEl = document.createElement("p");
        tempEl.classList.add("mb-1");
      } else {
        tempEl = document.createElement("a");
        tempEl.href = "#";
        tempEl.classList.add("text-primary")
      }
      tempEl.textContent = list[i][key];
      innerCol9El.appendChild(tempEl);

    }

    innerCol3El.appendChild(imgEl);
    //innerCol9El.appendChild(ulEl);

    innerRowEl.appendChild(innerCol3El);
    innerRowEl.appendChild(innerCol9El);

    outerCol4El.appendChild(innerRowEl);

    outerRowEl.appendChild(outerCol4El);
    console.log(list[i]);
  }
  parentEl.appendChild(outerRowEl);
}

displayListMembers(teamMembers, teamList);

