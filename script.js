// Инициализация AOS (анимации при скролле)
AOS.init();

// Инициализация календаря flatpickr для выбора даты
flatpickr("#date-picker", {
  dateFormat: "Y-m-d",
  minDate: "today"
});

// Кнопка "Узнать больше"
document.querySelector(".explore-more")?.addEventListener("click", () => {
  alert("Мы предлагаем уникальный опыт проживания в юртах на берегу Иссык-Куля. Погрузитесь в атмосферу традиционной культуры и наслаждайтесь природой!");
});

// Функция смены основного изображения в галерее
function changeImage(src) {
  document.getElementById("main-image").src = src;
}

// Модальные окна: открытие
document.querySelectorAll(".btn[data-target]").forEach(button => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const modal = document.getElementById(targetId);
    if(modal) modal.style.display = "block";
  });
});

// Модальные окна: закрытие по кнопке
document.querySelectorAll(".close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal");
    if(modal) modal.style.display = "none";
  });
});

// Закрытие модального окна при клике вне контента
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};


// Функция показа/скрытия формы бронирования с плавной прокруткой
function toggleForm() {
  const form = document.getElementById('booking-form');
  const isVisible = form.classList.contains('show');

  if (!isVisible) {
    form.classList.add('show');
    setTimeout(() => {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  } else {
    form.classList.remove('show');
  }
}


document.querySelectorAll('.book-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Показываем форму
    const formSection = document.getElementById('booking-form2');
    formSection.style.display = 'block';
    
    // Автоматически выбираем нужную юрту в форме, исходя из нажатой кнопки
    const yurtTitle = button.parentElement.querySelector('h3').textContent;
    const select = document.getElementById('yurt-type');
    
    if (yurtTitle.includes('1 человека')) select.value = '2_person';
    else if (yurtTitle.includes('2 человека')) select.value = '3_person';
    else if (yurtTitle.includes('3 и более человека')) select.value = '4_person';
    else select.value = '';
    
    // Скроллим к форме (опционально)
    formSection.scrollIntoView({behavior: 'smooth'});
  });
});

