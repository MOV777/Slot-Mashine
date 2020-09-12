window.onload = () => {
  const btn = document.querySelector(".btn");

  const slider = document.querySelector(".spin-box-slide");

  let image_1 = document.createElement("img");
  image_1.src = "img/SYM1.png";
  image_1.classList.add("spin-img");

  let image_2 = document.createElement("img");
  image_2.src = "img/SYM3.png";
  image_2.classList.add("spin-img");

  let image_3 = document.createElement("img");
  image_3.src = "img/SYM4.png";
  image_3.classList.add("spin-img");

  let image_4 = document.createElement("img");
  image_4.src = "img/SYM5.png";
  image_4.classList.add("spin-img");

  let image_5 = document.createElement("img");
  image_5.src = "img/SYM6.png";
  image_5.classList.add("spin-img");

  let image_6 = document.createElement("img");
  image_6.src = "img/SYM7.png";
  image_6.classList.add("spin-img");

  let arr = [];

  arr.push(image_1);
  arr.push(image_2);
  arr.push(image_3);
  arr.push(image_4);
  arr.push(image_5);
  arr.push(image_6);

  let rand;
  let randImage;
  let sl1;
  let sl2;
  for (let i = 0; i < 4; i++) {
    rand = Math.floor(Math.random() * arr.length);
    randImage = arr[rand];
    sl1 = slider.appendChild(randImage);
  }
  let check = document.getElementsByClassName("spin-img").length;
  if (check == 2 || check == 1) {
    sl2 = sl1.cloneNode(true);
    slider.appendChild(sl2);
  }

  const images = document.querySelectorAll(".spin-box-slide .spin-img");

  let counter = 0;
  const stepSize = images[0].clientHeight;
  console.log(stepSize);

  slider.style.transform = "translateY(" + `${-stepSize * counter}px)`;

  btn.onclick = () => {
    slider.classList.add("transformAnimation");
    counter++;
    slider.style.transform = "translateY(" + `${-stepSize * counter}px)`;

    let image_1 = document.createElement("img");
    image_1.src = "img/SYM1.png";
    image_1.className = "spin-img";

    let image_2 = document.createElement("img");
    image_2.src = "img/SYM3.png";
    image_2.className = "spin-img";

    let image_3 = document.createElement("img");
    image_3.src = "img/SYM4.png";
    image_3.className = "spin-img";

    let image_4 = document.createElement("img");
    image_4.src = "img/SYM5.png";
    image_4.className = "spin-img";

    let image_5 = document.createElement("img");
    image_5.src = "img/SYM6.png";
    image_5.className = "spin-img";

    let image_6 = document.createElement("img");
    image_6.src = "img/SYM7.png";
    image_6.className = "spin-img";

    let arr = [];

    arr.push(image_1);
    arr.push(image_2);
    arr.push(image_3);
    arr.push(image_4);
    arr.push(image_5);
    arr.push(image_6);

    let rand = Math.floor(Math.random() * arr.length);
    let randImage = arr[rand];

    slider.appendChild(randImage);
  };
};
