const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const numberOfSlides = slides.length;
let slideNumber = 0;

// Hàm chuyển slide
function goToSlide(index) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideNumber = index;
    slides[slideNumber].classList.add('active');
}

// Chuyển đến slide tiếp theo
nextBtn.onclick = () => {
    const nextSlide = (slideNumber + 1) % numberOfSlides;
    goToSlide(nextSlide);
};

// Chuyển đến slide trước đó
prevBtn.onclick = () => {
    const prevSlide = (slideNumber - 1 + numberOfSlides) % numberOfSlides;
    goToSlide(prevSlide);
};

// Tự động chuyển slide
function startSlider() {
    setInterval(() => {
        const nextSlide = (slideNumber + 1) % numberOfSlides;
        goToSlide(nextSlide);
    }, 3000); // Thay đổi mỗi 5 giây
}

// Bắt đầu slider khi tài liệu đã sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
    goToSlide(slideNumber); // Đảm bảo rằng slide đầu tiên được hiển thị khi trang tải
    startSlider();
});

/*package*/


/*package*/