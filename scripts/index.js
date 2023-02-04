// Переменные
const teamGrid = document.querySelector('.team__cards');
const teamLeft = document.querySelector('.button_team_left');
const teamRight = document.querySelector('.button_team_right');
const fightsLeft = document.querySelector('.button_fights_left');
const fightsRight = document.querySelector('.button_fights_right');
const fightsGrid = document.querySelector('.fights__cards');
const registrationButtons = document.querySelectorAll('.button_registration_opened');
const registration = document.querySelector('.registration');
const teamSlider = document.querySelectorAll('.cards__item_type_team');
const fightsSlider = document.querySelectorAll('.cards__item_type_fights');
const cardPositionTeam = document.querySelectorAll('.quantity__count_type_team');
const cardPositionFights = document.querySelectorAll('.quantity__count_type_fights');
let step = 0;

// Функции
// Функция появления окна регистрации
function openRegistration() {
  if (registration.classList.contains('registration_type_opened') === false) {
    registration.classList.add('registration_type_opened');
  }
}

// Функция закрытия окна регистрации
function closeRegistration() {
  if (registration.classList.contains('registration_type_opened') === true) {
    registration.classList.remove('registration_type_opened');
  }
}

// Функция перемещения влево картинок на tablet разрешении
function moveLeft(element) {
  element.scrollLeft += -370; 
}

// Функция премещения вправо картинок на tablet разрешении
function moveRight(element) {
  element.scrollLeft += 370;
}

// Функция перелистывания карточек
function moveNextSlide(arr, array) {
  if (step >= arr.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains('cards__item_type_opened')) {
        arr[i].classList.remove('cards__item_type_opened');
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains('quantity__count_type_opened')) {
        array[i].classList.remove('quantity__count_type_opened');
      }
    }
    step = 0;
    arr[step].classList.add('cards__item_type_opened');
    array[step].classList.add('quantity__count_type_opened');
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains('cards__item_type_opened')) {
        arr[i].classList.remove('cards__item_type_opened');
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains('quantity__count_type_opened')) {
        array[i].classList.remove('quantity__count_type_opened');
      }
    }
    arr[step].classList.add('cards__item_type_opened');
    array[step].classList.add('quantity__count_type_opened');
  }
}

// Слушатели и код
// Клики на кнопочки на tablet версии для пролистывания слайдов
teamLeft.addEventListener('click', () => {
  moveLeft(teamGrid);
});
teamRight.addEventListener('click', () => {
  moveRight(teamGrid);
})
fightsLeft.addEventListener('click', () => {
  moveLeft(fightsGrid);
});
fightsRight.addEventListener('click', () => {
  moveRight(fightsGrid);
})

// Клики на кнопку Регистрации
registrationButtons.forEach((button) => {
  button.addEventListener('click', openRegistration);
});

// Закрытие формы регистрации
registration.addEventListener('click', (evt) => {
  if (evt.target === registration) {
    closeRegistration();
  }
});

// Смена цвета кружочка показывающий позицию слайда
cardPositionTeam[step].classList.add('quantity__count_type_opened');
cardPositionFights[step].classList.add('quantity__count_type_opened');
// Клики и смена карточек на mobile версии
teamSlider[step].classList.add('cards__item_type_opened');
fightsSlider[step].classList.add('cards__item_type_opened');
setInterval(() => {
  step++;
  moveNextSlide(teamSlider, cardPositionTeam);
  moveNextSlide(fightsSlider, cardPositionFights);
}, 3000);