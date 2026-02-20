class Loader {
  constructor() {
    this.loader = null;
    this.animation = null;
    this.isComplete = false;
    this.onCompleteCallback = null;
  }

  init(loaderElement) {
    this.loader = loaderElement;
    this.words = this.loader.querySelectorAll('.loader__word');
    this.runAnimation();
  }

  runAnimation() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      this.complete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => this.complete()
    });

    tl.set(this.words, { opacity: 0, y: 60 });

    tl.to('.loader__word--hi', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out'
    });

    tl.to('.loader__word--hi', {
      scale: 0.9,
      duration: 0.3,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, '+=0.3');

    tl.to('.loader__word--iam', {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.1');

    tl.to('.loader__word--name', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4');

    tl.to({}, { duration: 1.5 });

    tl.to('.loader__word--hi', {
      opacity: 0,
      y: -40,
      duration: 0.5,
      ease: 'power2.in'
    }, 'exit');

    tl.to('.loader__word--iam', {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in'
    }, 'exit+=0.08');

    tl.to('.loader__word--name', {
      opacity: 0,
      y: -50,
      duration: 0.6,
      ease: 'power2.in'
    }, 'exit+=0.12');

    tl.to(this.loader, {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.inOut'
    }, '-=0.3');

    tl.set(this.loader, { display: 'none' });

    this.animation = tl;
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
    this.complete();
  }

  onComplete(callback) {
    this.onCompleteCallback = callback;
    if (this.isComplete) {
      callback();
    }
  }

  destroy() {
    if (this.animation) {
      this.animation.kill();
    }
    if (this.loader && this.loader.parentNode) {
      this.loader.parentNode.removeChild(this.loader);
    }
    this.loader = null;
  }
}

export default Loader;
