window.onload = () => {
  const btn = document.querySelector(".btn");

  const slider = document.querySelector(".spin-box-slide");
  const slider2 = document.querySelector(".spin-box-slide-2");
  const slider3 = document.querySelector(".spin-box-slide-3");

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

  //images2

  let image_11 = document.createElement("img");
  image_11.src = "img/SYM1.png";
  image_11.classList.add("spin-img2");

  let image_22 = document.createElement("img");
  image_22.src = "img/SYM3.png";
  image_22.classList.add("spin-img2");

  let image_33 = document.createElement("img");
  image_33.src = "img/SYM4.png";
  image_33.classList.add("spin-img2");

  let image_44 = document.createElement("img");
  image_44.src = "img/SYM5.png";
  image_44.classList.add("spin-img2");

  let image_55 = document.createElement("img");
  image_55.src = "img/SYM6.png";
  image_55.classList.add("spin-img2");

  let image_66 = document.createElement("img");
  image_66.src = "img/SYM7.png";
  image_66.classList.add("spin-img2");

  //images3

  let image_111 = document.createElement("img");
  image_111.src = "img/SYM1.png";
  image_111.classList.add("spin-img3");

  let image_222 = document.createElement("img");
  image_222.src = "img/SYM3.png";
  image_222.classList.add("spin-img3");

  let image_333 = document.createElement("img");
  image_333.src = "img/SYM4.png";
  image_333.classList.add("spin-img3");

  let image_444 = document.createElement("img");
  image_444.src = "img/SYM5.png";
  image_444.classList.add("spin-img3");

  let image_555 = document.createElement("img");
  image_555.src = "img/SYM6.png";
  image_555.classList.add("spin-img3");

  let image_666 = document.createElement("img");
  image_666.src = "img/SYM7.png";
  image_666.classList.add("spin-img3");

  let arr = [];
  let arr2 = [];
  let arr3 = [];

  arr.push(image_1);
  arr.push(image_2);
  arr.push(image_3);
  arr.push(image_4);
  arr.push(image_5);
  arr.push(image_6);

  arr2.push(image_11);
  arr2.push(image_22);
  arr2.push(image_33);
  arr2.push(image_44);
  arr2.push(image_55);
  arr2.push(image_66);

  arr3.push(image_111);
  arr3.push(image_222);
  arr3.push(image_333);
  arr3.push(image_444);
  arr3.push(image_555);
  arr3.push(image_666);

  let rand;
  let randImage;
  let randImage2;
  let randImage3;
  let sl1;
  let sl2;
  let sl12;
  let sl22;
  let sl221;
  let sl33;
  let sl331;
  let sl23;
  let sl32;
  let func1 = () => {
    for (let i = 0; i < 3; i++) {
      rand = Math.floor(Math.random() * arr.length);
      randImage = arr[rand];
      sl1 = slider.appendChild(randImage);
    }
    let check = document.getElementsByClassName("spin-img").length;
    if (check == 2) {
      sl2 = sl1.cloneNode(true);
      slider.appendChild(sl2);
    } else if (check == 1) {
      sl2 = sl1.cloneNode(true);
      sl12 = sl2.cloneNode(true);
      slider.appendChild(sl2);
      slider.appendChild(sl12);
    }
  };

  let func2 = () => {
    for (let i = 0; i < 3; i++) {
      rand = Math.floor(Math.random() * arr2.length);
      randImage2 = arr2[rand];
      sl22 = slider2.appendChild(randImage2);
    }
    let check = document.getElementsByClassName("spin-img2").length;
    if (check == 2) {
      sl23 = sl22.cloneNode(true);
      slider2.appendChild(sl23);
    } else if (check == 1) {
      sl23 = sl22.cloneNode(true);
      sl221 = sl23.cloneNode(true);
      slider2.appendChild(sl23);
      slider2.appendChild(sl221);
    }
  };

  let func3 = () => {
    for (let i = 0; i < 3; i++) {
      rand = Math.floor(Math.random() * arr3.length);
      randImage3 = arr3[rand];
      sl32 = slider3.appendChild(randImage3);
    }
    let check = document.getElementsByClassName("spin-img3").length;
    if (check == 2) {
      sl33 = sl32.cloneNode(true);
      slider3.appendChild(sl33);
    } else if (check == 1) {
      sl33 = sl32.cloneNode(true);
      sl331 = sl33.cloneNode(true);
      slider3.appendChild(sl33);
      slider3.appendChild(sl331);
    }
  };

  func1();
  func2();
  func3();

  const images = document.querySelectorAll(".spin-box-slide .spin-img");

  let counter = 0;
  const stepSize = images[0].clientHeight;
  console.log(stepSize);

  slider.style.transform = "translateY(" + `${-stepSize * counter}px)`;

  btn.onclick = () => {
    for (let i = 0; i <= 50; i++) {
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
      // slider.removeChild(slider.firstChild);
      slider.appendChild(randImage);
    }
  };
};
