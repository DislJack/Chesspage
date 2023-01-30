// Переменные
const teamGrid = document.querySelector('.cards__team');
const teamLeft = document.querySelector('button[name=team-left]');
const teamRight = document.querySelector('button[name=team-right]');
const fightsLeft = document.querySelector('button[name=fights-left]');
const fightsRight = document.querySelector('button[name=fights-right]');
const fightsGrid = document.querySelector('.cards__fights');
const headerButton = document.querySelector('.header__button');
const footerButton = document.querySelector('.footer__button');
const registration = document.querySelector('.registration');
const teamSlider = document.querySelectorAll('.cards__item_type_team');
const fightsSlider = document.querySelectorAll('.cards__item_type_fights');
const cardPositionTeam = document.querySelectorAll('.cards__count_type_team');
const cardPositionFights = document.querySelectorAll('.cards__count_type_fights');
let step = 0;

// Функции
// Функция появления окна регистрации
function openRegistration() {
  if (registration.classList.contains('registration_type_opened') === false) {
    registration.classList.add('registration_type_opened');
  }
}

// Функция перемещения влево картинок на tablet разрешении
function moveLeft(element) {
  element.scrollTo({
    left: -370,
    behavior: 'smooth'
  });
}

// Функция премещения вправо картинок на tablet разрешении
function moveRight(element) {
  element.scrollTo({
    left: 370,
    behavior: 'smooth'
  });
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
      if (array[i].classList.contains('cards__count_type_opened')) {
        array[i].classList.remove('cards__count_type_opened');
      }
    }
    step = 0;
    arr[step].classList.add('cards__item_type_opened');
    array[step].classList.add('cards__count_type_opened');
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].classList.contains('cards__item_type_opened')) {
        arr[i].classList.remove('cards__item_type_opened');
      }
    }
    for (let i = 0; i < array.length; i++) {
      if (array[i].classList.contains('cards__count_type_opened')) {
        array[i].classList.remove('cards__count_type_opened');
      }
    }
    arr[step].classList.add('cards__item_type_opened');
    array[step].classList.add('cards__count_type_opened');
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
headerButton.addEventListener('click', openRegistration);
footerButton.addEventListener('click', openRegistration);

// Смена цвета кружочка показывающий позицию слайда
cardPositionTeam[step].classList.add('cards__count_type_opened');
cardPositionFights[step].classList.add('cards__count_type_opened');
// Клики и смена карточек на mobile версии
teamSlider[step].classList.add('team__card_type_opened');
fightsSlider[step].classList.add('fights__card_type_opened');
setInterval(() => {
  step++;
  moveNextSlide(teamSlider, cardPositionTeam);
  moveNextSlide(fightsSlider, cardPositionFights);
}, 3000);