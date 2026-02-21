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
      "你好",
      "こんにちは",
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
        this.greetingElement.classList.add('flow');
        this.playFlowAnimation();
      }
    }, 320);
  }

  playFlowAnimation() {
    this.timeoutId = setTimeout(() => {
      this.transitionOut();
    }, 1500);
  }

  transitionOut() {
    // Create curtain panels for the split-reveal transition
    const curtainLeft = document.createElement('div');
    const curtainRight = document.createElement('div');
    curtainLeft.className = 'loader-curtain loader-curtain--left';
    curtainRight.className = 'loader-curtain loader-curtain--right';
    this.loader.appendChild(curtainLeft);
    this.loader.appendChild(curtainRight);

    const tl = gsap.timeline({
      onComplete: () => {
        this.hideLoader();
        this.complete();
      }
    });

    // 1. Scale up the greeting text and fade it out
    tl.to(this.greetingElement, {
      scale: 1.3,
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    });

    // 2. Set up the curtains: position the loader bg as two halves
    tl.set(this.loader, {
      background: 'transparent'
    });
    tl.set(curtainLeft, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '50%',
      height: '100%',
      background: '#f0ede8',
      zIndex: 10000,
    });
    tl.set(curtainRight, {
      position: 'fixed',
      top: 0,
      right: 0,
      width: '50%',
      height: '100%',
      background: '#f0ede8',
      zIndex: 10000,
    });

    // 3. Slide curtains apart to reveal the landing page
    tl.to(curtainLeft, {
      xPercent: -100,
      duration: 0.9,
      ease: 'power3.inOut'
    }, '+=0.1');

    tl.to(curtainRight, {
      xPercent: 100,
      duration: 0.9,
      ease: 'power3.inOut'
    }, '<');

    // 4. Clean up the loader
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
