class Loader {
  constructor() {
    this.loader = null;
    this.greetingElement = null;
    this.isComplete = false;
    this.onCompleteCallback = null;
    this.greetings = [
      "Hello",
      "Hola",
      "Bonjour",
      "Hallo",
      "你好",
      "こんにちは",
      "Ciao",
      "Здравствуйте",
      "مرحبا",
      "Olá",
      "안녕하세요",
      "नमस्ते"
    ];
    this.currentIndex = 0;
    this.intervalId = null;
    this.timeoutId = null;
  }

  init(loaderElement) {
    this.loader = loaderElement;
    this.greetingElement = document.getElementById('greeting-text');
    this.runAnimation();
  }

  runAnimation() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      this.complete();
      return;
    }

    this.greetingElement.textContent = this.greetings[0];

    this.intervalId = setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex < this.greetings.length) {
        this.greetingElement.textContent = this.greetings[this.currentIndex];
      }
      if (this.currentIndex >= this.greetings.length - 1) {
        clearInterval(this.intervalId);
      }
    }, 320);

    this.timeoutId = setTimeout(() => {
      this.fadeOutLoader();
    }, 3800);
  }

  fadeOutLoader() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.hideLoader();
        this.complete();
      }
    });

    tl.to(this.loader, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut'
    });

    tl.set(this.loader, { display: 'none' });
  }

  complete() {
    this.isComplete = true;
    if (this.onCompleteCallback) {
      this.onCompleteCallback();
    }
  }

  hideLoader() {
    if (this.loader) {
      this.loader.classList.add('is-hidden');
    }
  }

  onComplete(callback) {
    this.onCompleteCallback = callback;
    if (this.isComplete) {
      callback();
    }
  }

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.loader && this.loader.parentNode) {
      this.loader.parentNode.removeChild(this.loader);
    }
    this.loader = null;
  }
}

export default Loader;
