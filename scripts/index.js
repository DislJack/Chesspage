const teamGrid = document.querySelector('.team__grid');
const teamLeft = document.querySelector('button[name=team-left]');
const teamRight = document.querySelector('button[name=team-right]');
const fightsLeft = document.querySelector('button[name=fights-left]');
const fightsRight = document.querySelector('button[name=fights-right]');
const fightsGrid = document.querySelector('.fights__grid');
const headerButton = document.querySelector('.header__button');
const footerButton = document.querySelector('.footer__button');
const registration = document.querySelector('.registration');

function openRegistration() {
  if (registration.classList.contains('registration_type_opened') === false) {
    registration.classList.add('registration_type_opened');
  }
}

teamLeft.addEventListener('click', () => {
  teamGrid.scrollTo({
    left: -370,
    behavior: 'smooth'
  });
});

teamRight.addEventListener('click', () => {
  teamGrid.scrollTo({
    left: 370,
    behavior: 'smooth'
  });
})

fightsLeft.addEventListener('click', () => {
  fightsGrid.scrollTo({
    left: -370,
    behavior: 'smooth'
  });
});

fightsRight.addEventListener('click', () => {
  fightsGrid.scrollTo({
    left: 370,
    behavior: 'smooth'
  });
})

headerButton.addEventListener('click', openRegistration);
footerButton.addEventListener('click', openRegistration);