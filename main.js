// Весь код работает после загрузки страници
window.onload = () => {
  // Функция меню загрузки перед игрой
  let timerId = setTimeout(function tick() {
    let loading = document.querySelector(".loading");
    loading.remove();
  }, 4000);

  // Достаем нужные нам переменные
  const btn = document.querySelector(".btn");
  let btn_bet = document.querySelector(".place_a_bet");
  let money_span = document.querySelector(".money_span");
  let win_span = document.querySelector(".win");

  // Делаем кнопку вращение барабана нерабочей и присваиваем ей серый цвет
  btn.setAttribute("disabled", "disabled");
  btn.classList.add("btn_d");

  // Создаем глобальные переменные
  let money_num;
  let rate_num;
  let money;
  let rate;

  // Работаем над кнопкой которая считывает значение денег и ставки
  // и приводит в активность кнопку вращения
  // Так же функция делает проверку на правильность введенных данных
  btn_bet.onclick = () => {
    money = document.getElementById("money").value;
    rate = document.getElementById("rate").value;
    money_num = +money;
    rate_num = +rate;
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
      money_span.innerHTML = "$" + (money_num - rate_num);
      btn.removeAttribute("disabled");
      btn.classList.remove("btn_d");
    }
  };

  // Достаем блоки в которых будут добавлятся элементы которые будем вращать
  const slider = document.querySelector(".spin-box-slide");
  const slider2 = document.querySelector(".spin-box-slide-2");
  const slider3 = document.querySelector(".spin-box-slide-3");

  // Создаем элементы которые будем вращать, для каждого блока(блок 1)
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

  //Блок 2

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

  //Блок 3

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

  // Создаем для каждого блока массив
  let arr = [];
  let arr2 = [];
  let arr3 = [];

  // Добавляем элементы в массив
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

  // Создаем переменные для работы с элементами в массивах
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

  // Создаем функции для каждого блока который будет заполняться рандомными элементами
  // Количество начальных элементов, перед вращением, по 3 на каждый блок
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

  // Вызываем функции создание элементов
  func1();
  func2();
  func3();

  // Создаем переменную где достаем все элементы первого блока
  const images = document.querySelectorAll(".spin-box-slide .spin-img");

  // Создаем счетчик для перемещения элементов
  let counter = 0;

  // Создаем счетчик побед
  let counter_win = 0;

  // Создаем счетчик поражений
  let counter_loses = 0;

  // Создаем шаг с которым будут двигаться наши элементы
  const stepSize = images[0].clientHeight;

  // Добавляем стиль передвижения элементов каждого блока с плавной анимацей(слайдер)
  slider.style.transform = "translateY(" + `${-stepSize * counter}px)`;
  slider2.style.transform = "translateY(" + `${-stepSize * counter}px)`;
  slider3.style.transform = "translateY(" + `${-stepSize * counter}px)`;

  // Работаем над кнопкой вращения элементов
  btn.onclick = () => {
    // Получаем значение денег после сделаной ставки
    document.getElementById("money").value = money_num - rate_num;

    // Делаем вращение элементов цыклически
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

      //блок 1
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

      //блок 2

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

      //блок 3

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

      // Так как у нас вначале создано по 3 элемента в блоках то во время вращения нужно добавлять
      // новые элементы в каждый блок
      // Для этого создаем функцию добавления рандомных элементов
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

      // Вызываем функцию добавления рандомных элементов для каждого блока
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
    }

    // Создаем функцию обработки результатов вращения
    let timerMath = setTimeout(function Math_result() {
      // Достаем все элементы из каждого блока
      let images_game1 = document.querySelectorAll(".spin-img");
      let images_game2 = document.querySelectorAll(".spin-img2");
      let images_game3 = document.querySelectorAll(".spin-img3");

      // Достаем элементы которые проверяем на выигрыш или проигрыш
      // Сравнение делаем по пути нахождения элементов
      let images_check1 = images_game1[72].getAttribute("src");
      let images_check2 = images_game2[72].getAttribute("src");
      let images_check3 = images_game3[72].getAttribute("src");

      // Создаем функцию победной комбинации
      let func_win = () => {
        // Достаем табличку с надписью выигрыша
        let win_box = document.querySelector(".win_box");
        // Прячем элементы которые не находятся в нужной комбинации
        images_game1[71].classList.add("hide");
        images_game1[73].classList.add("hide");
        images_game2[71].classList.add("hide");
        images_game2[73].classList.add("hide");
        images_game3[71].classList.add("hide");
        images_game3[73].classList.add("hide");

        // Добавляем класс в котором показуем табличку выигрыша
        win_box.classList.add("show_box");

        // Обнуляем счетчик поражений
        counter_loses = 0;

        // Записываем деньги на счет
        money_span.innerHTML = "$" + (money_num + rate_num * 2);
        // Добавляем счетчик побед
        counter_win++;

        // записываем количество побед в необходимый блок
        win_span.innerHTML = counter_win;

        // записываем деньги с которых будем в дальнейшем делать ставку
        document.getElementById("money").value = money_num + rate_num * 2;

        // Создаем функцию которая спустя 3 секунды создает новую комбинацию из 3 блоков по 3 элемента
        setTimeout(function () {
          // Ддаляем табличку победы
          win_box.classList.remove("show_box");
          // Делаем ввод ставки и кнопки подверждения ставки снова доступным
          document.getElementById("rate").removeAttribute("disabled");
          document.querySelector(".place_a_bet").removeAttribute("disabled");

          // Создаем цыкл в котором удаляем комбинацию предыдущего выигрыша
          // и создаем новую комбинацию элементов 3 на 3
          for (let y = 0; y < 74; y++) {
            images_game1[y].remove();
            images_game2[y].remove();
            images_game3[y].remove();
            slider.classList.remove("transformAnimation");
            slider2.classList.remove("transformAnimation");
            slider3.classList.remove("transformAnimation");
            counter = 0;
            slider.style.transform = "translateY(" + `0px)`;
            slider2.style.transform = "translateY(" + `0px)`;
            slider3.style.transform = "translateY(" + `0px)`;
          }
        }, 3000);
      };

      // Создаем функцию проигрышной комбинации
      let func_lose = () => {
        let lose_box = document.querySelector(".lose_box");
        images_game1[71].classList.add("hide");
        images_game1[73].classList.add("hide");
        images_game2[71].classList.add("hide");
        images_game2[73].classList.add("hide");
        images_game3[71].classList.add("hide");
        images_game3[73].classList.add("hide");
        lose_box.classList.add("show_box");

        // Добавляем счетчик поражений
        counter_loses++;
        // Проверяем если количество поражений равно 5 то останавливаем игру
        // и перезагружаем страницу
        if (counter_loses == 5) {
          alert("You have run out of attempts");
          location.reload();
        }
        setTimeout(function () {
          lose_box.classList.remove("show_box");
          document.getElementById("rate").removeAttribute("disabled");
          document.querySelector(".place_a_bet").removeAttribute("disabled");
          for (let y = 0; y < 74; y++) {
            images_game1[y].remove();
            images_game2[y].remove();
            images_game3[y].remove();
            slider.classList.remove("transformAnimation");
            slider2.classList.remove("transformAnimation");
            slider3.classList.remove("transformAnimation");
            counter = 0;
            slider.style.transform = "translateY(" + `0px)`;
            slider2.style.transform = "translateY(" + `0px)`;
            slider3.style.transform = "translateY(" + `0px)`;
          }
        }, 3000);
      };

      // Делаем проверку комбинаций по тех заданию
      // В случае победы вызываем функцию победы и функции создания новых элементов 3 на 3
      // В случае поражения вызываем функцию поражения и функции создания новых элементов 3 на 3
      if (images_check1 == images_check2 && images_check2 == images_check3) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check1 == "img/SYM1.png" &&
        images_check2 == images_check3
      ) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check1 == "img/SYM1.png" &&
        images_check2 == images_check3
      ) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check2 == "img/SYM1.png" &&
        images_check1 == images_check3
      ) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check3 == "img/SYM1.png" &&
        images_check1 == images_check2
      ) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check1 == "img/SYM1.png" &&
        images_check2 == "img/SYM1.png" &&
        images_check3
      ) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check1 == "img/SYM1.png" &&
        images_check3 == "img/SYM1.png" &&
        images_check2
      ) {
        func_win();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else if (
        images_check1 == "img/SYM1.png" &&
        images_check2 == "img/SYM1.png" &&
        images_check3 == "img/SYM1.png"
      ) {
        func_lose();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      } else {
        func_lose();
        setTimeout(func1, 3000);
        setTimeout(func2, 3000);
        setTimeout(func3, 3000);
      }
    }, 8000);
  };
};
