class ImageSlider {
  constructor(data, autoplaySpeed, pauseDuration) {
    this.imagesData = data;
    this.pauseDuration = pauseDuration; 
    this.isPaused = false;
    this.activeIndex = 0;
    this.autoplaySpeed = autoplaySpeed;
    this.cardImage = document.getElementById('card-image');
    this.cardTitle = document.getElementById('card-title');
    this.cardDescription = document.getElementById('card-description');
    this.cardCounter = document.getElementById('card-counter');
    this.nextButton = document.getElementById('next');
    this.previousButton = document.getElementById('previous');
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.threshold = 50;
    this.initSlider();
    this.attachEventListeners();
    this.startAutoplay();
  }
  initSlider() {
    this.updateCard(this.activeIndex);
  }
  updateCardContent(index) {
    const cardData = this.imagesData[index];
    this.cardCounter.textContent = `${index + 1} de ${this.imagesData.length}`;
    this.cardImage.src = cardData.url;
    this.cardTitle.textContent = cardData.title;
    this.cardDescription.textContent = cardData.description;
  }
  updateCard(index) {
    this.cardImage.classList.remove('opacity-100');
    this.cardImage.classList.add('opacity-0');
    setTimeout(() => {
      this.updateCardContent(index);
      this.cardImage.classList.remove('opacity-0');
      this.cardImage.classList.add('opacity-100');
    }, 150);
  }
  attachEventListeners() {
    this.nextButton.addEventListener('click', () => {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
      this.pauseAutoplay();
    });
    this.previousButton.addEventListener('click', () => {
      this.activeIndex = (this.activeIndex - 1 + this.imagesData.length) % this.imagesData.length;
      this.updateCard(this.activeIndex);
      this.pauseAutoplay();
    });
    this.cardImage.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.pauseAutoplay();
    });
    this.cardImage.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipeGesture();
    });
  }
  handleSwipeGesture() {
    if (this.touchStartX - this.touchEndX > this.threshold) {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    } else if (this.touchEndX - this.touchStartX > this.threshold) {
      this.activeIndex = (this.activeIndex - 1 + this.imagesData.length) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    }
    if (!this.isPaused) {
      setTimeout(() => this.startAutoplay(), this.pauseDuration);
    }
  }
  pauseAutoplay() {
    if (!this.isPaused) {
      this.stopAutoplay();
      this.isPaused = true;
      setTimeout(() => {
        this.isPaused = false;
        this.startAutoplay();
      }, this.pauseDuration);
    }
  }
  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.imagesData.length;
      this.updateCard(this.activeIndex);
    }, this.autoplaySpeed);
  }
  stopAutoplay() {
    clearInterval(this.autoplayInterval);
  }
  restartAutoplay() {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
const imagesData = [
  { url: './images/slider/1.png', title: 'PIZZA', description: '180ºC | 5-7 min' },
  { url: './images/slider/2.png', title: 'CAMARÃO', description: '180ºC | 12-15 min' },
  { url: './images/slider/3.png', title: 'PEIXE', description: '180ºC | 15-20 min' },
  { url: './images/slider/4.png', title: 'FRANGO', description: '200ºC | 20-25 min' },
  { url: './images/slider/5.png', title: 'BATATA FRITA', description: '180ºC | 15-20 min' },
  { url: './images/slider/6.png', title: 'CARNE', description: '180ºC | 12-15 min' },
  { url: './images/slider/7.png', title: 'BOLO', description: '180ºC | 40-45 min' },
  { url: './images/slider/8.png', title: 'PÃO DE QUEIJO', description: '180ºC | 15-20 min' },
  { url: './images/slider/9.png', title: 'LEGUMES', description: '180ºC | 11-15 min' },
];
const autoPlaySpeed = 5000; 
const pauseDuration = 5000; 
const slider = new ImageSlider(imagesData, autoPlaySpeed, pauseDuration);
