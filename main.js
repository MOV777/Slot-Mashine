window.onload = () => {
  let timerId = setTimeout(function tick() {
    let loading = document.querySelector(".loading");
    loading.remove();
  }, 4000);
  const btn = document.querySelector(".btn");
  let btn_bet = document.querySelector(".place_a_bet");
  let money_span = document.querySelector(".money_span");
  btn.setAttribute("disabled", "disabled");
  btn.classList.add("btn_d");

  let mathematic = () => {
    let btn_bet = document.querySelector(".place_a_bet");

    btn_bet.onclick = () => {
      let money = document.getElementById("money").value;
      let rate = document.getElementById("rate").value;
      let money_num = +money;
      let rate_num = +rate;
      if (money_num < rate_num) {
        alert("Rate cant be more than money");
        btn.setAttribute("disabled", "disabled");
        btn.classList.add("btn_d");
      } else if (
        money == "" ||
        rate == "" ||
        money_num == 0 ||
        rate_num == 0 ||
        money_num < 0 ||
        rate_num < 0
      ) {
        alert("Please enter the required values");
        btn.setAttribute("disabled", "disabled");
        btn.classList.add("btn_d");
      } else {
        money_span.innerHTML = "$" + money_num;
        btn.removeAttribute("disabled");
        btn.classList.remove("btn_d");
      }
    };
  };

  mathematic();

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
  slider2.style.transform = "translateY(" + `${-stepSize * counter}px)`;
  slider3.style.transform = "translateY(" + `${-stepSize * counter}px)`;

  btn.onclick = () => {
    // btn.setAttribute("disabled", "disabled");
    for (let i = 0; i <= 70; i++) {
      btn_bet.setAttribute("disabled", "disabled");
      btn.setAttribute("disabled", "disabled");
      btn.classList.add("btn_d");

      let money = document.getElementById("money");
      let rate = document.getElementById("rate");
      money.setAttribute("disabled", "disabled");
      rate.setAttribute("disabled", "disabled");

      slider.classList.add("transformAnimation");
      slider2.classList.add("transformAnimation");
      slider3.classList.add("transformAnimation");
      counter++;
      slider.style.transform = "translateY(" + `${-stepSize * counter}px)`;
      slider2.style.transform = "translateY(" + `${-stepSize * counter}px)`;
      slider3.style.transform = "translateY(" + `${-stepSize * counter}px)`;

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
      // slider.removeChild(slider.firstChild);
      let func_slide = (
        elem1,
        elem2,
        elem3,
        elem4,
        elem5,
        elem6,
        arr_create,
        slider_param
      ) => {
        arr_create.push(elem1);
        arr_create.push(elem2);
        arr_create.push(elem3);
        arr_create.push(elem4);
        arr_create.push(elem5);
        arr_create.push(elem6);
        let rand = Math.floor(Math.random() * arr_create.length);
        let randImage = arr_create[rand];
        slider_param.appendChild(randImage);
      };

      func_slide(
        image_1,
        image_2,
        image_3,
        image_4,
        image_5,
        image_6,
        arr,
        slider
      );
      func_slide(
        image_11,
        image_22,
        image_33,
        image_44,
        image_55,
        image_66,
        arr2,
        slider2
      );
      func_slide(
        image_111,
        image_222,
        image_333,
        image_444,
        image_555,
        image_666,
        arr3,
        slider3
      );
      // let kids;
      // let func_delete = (elem, kid) => {
      //   kid = document.querySelectorAll("img");
      //   elem.removeChild(kid[0]);
      // };

      // func_delete(slider, kids);
    }

    // let timerId = setTimeout(function tick() {
    //   btn_bet.removeAttribute("disabled");
    // }, 4000);
  };
};
