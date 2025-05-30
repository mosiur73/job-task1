
  const slides = document.querySelectorAll('.nasalclip-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  let currentIndex = 0;

  function updateSlides(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides(currentIndex);
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides(currentIndex);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlides(currentIndex);
    });
  });


          document.addEventListener('DOMContentLoaded', () => {
            const faqQuestions = document.querySelectorAll('.faq-question');

            faqQuestions.forEach(question => {
                question.addEventListener('click', () => {
                    const faqItem = question.closest('.faq-item');
                    const faqAnswer = faqItem.querySelector('.faq-answer');
                    const toggleIcon = question.querySelector('.toggle-icon');

                    // Toggle the 'open' class on the faq-item
                    faqItem.classList.toggle('open');

                    // Adjust max-height for smooth transition
                    if (faqItem.classList.contains('open')) {
                        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                        toggleIcon.textContent = '-';
                    } else {
                        faqAnswer.style.maxHeight = '0';
                        toggleIcon.textContent = '+';
                    }
                });
            });
        });

