// Создаем элемент горизонтальной полоски индикатора прокрутки
    const scrollIndicator = document.createElement('div');
    scrollIndicator.id = 'scroll-indicator';
    scrollIndicator.style.position = 'fixed';
    scrollIndicator.style.top = '0';
    scrollIndicator.style.left = '0';
    scrollIndicator.style.width = '0%';
    scrollIndicator.style.height = '2px';
    scrollIndicator.style.backgroundColor = '#FDDD34';
    scrollIndicator.style.transition = 'width 0.3s';
    scrollIndicator.style.zIndex = '9999';
    
    // Добавляем индикатор на страницу
    document.body.appendChild(scrollIndicator);

    // Показываем индикатор при прокрутке страницы
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;
      
      scrollIndicator.style.width = scrollPercentage + '%';

      if (scrollPercentage > 5) {
        scrollIndicator.style.display = 'block';
      } else {
        scrollIndicator.style.display = 'none';
      }
    });


var menu_btn = document.querySelector(".nav-hamburger__btn");

menu_btn.onclick = function(e) {
	e.preventDefault();
	menu_btn.classList.toggle('is-active');
	document.querySelector('.header__navigation').classList.toggle('is-active');
};

window.onload = function() {
  // Проверка ширины окна перед добавлением класса
  if (window.matchMedia("(min-width: 991px)").matches) {
    var minOffset = 50;

    window.addEventListener("scroll", function() {
      let hasClass = document.body.classList.contains("is_scrolled");

      if (minOffset < document.documentElement.scrollTop) {
        if (!hasClass) {
          document.body.classList.add("is_scrolled");
        }
      } else if (hasClass) {
        document.body.classList.remove("is_scrolled");
      }
    });
  }

  // Плавный скролл по якорям
  const anchors = document.querySelectorAll('a[href*="#"]');
  const animationTime = 400;
  const framesCount = 20;

  anchors.forEach(function(anchor) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();

      let targetId = anchor.getAttribute('href').substr(1);
      let targetElement = document.getElementById(targetId);

      if (targetElement) {
        let targetY = targetElement.getBoundingClientRect().top + window.pageYOffset;
        let scrollBy = (targetY - window.pageYOffset) / framesCount;

        let scroller = setInterval(function() {
          if (scrollBy > window.pageYOffset - targetY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
            window.scrollBy(0, scrollBy);
          } else {
            window.scrollTo(0, targetY);
            clearInterval(scroller);
          }
        }, animationTime / framesCount);
      }
    });
  });

  // Инициализация Bootstrap тултипов (если используется Bootstrap)
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Отображение/скрытие кнопки прокрутки вверх
  var scrollTopButton = document.getElementById("scrollTop");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      scrollTopButton.style.display = "flex";
      scrollTopButton.style.opacity = "1";
    } else {
      scrollTopButton.style.opacity = "0";
    }
  });

  scrollTopButton.addEventListener("click", function() {
    var scrollDuration = 400;
    var scrollStep = -window.scrollY / (scrollDuration / 15);
    var scrollInterval = setInterval(function() {
      if (window.scrollY != 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  });

  // Добавление баннера
  var newLink = document.createElement('a');
  newLink.target = '_blank';
  newLink.className = 'stop-war';
  newLink.href = 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi';

  // Вставка ссылки перед закрывающимся тегом body
  document.body.appendChild(newLink);
};
