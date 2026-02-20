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
    this.dots = this.loader.querySelectorAll('.loader__dot');
    this.idots = this.loader.querySelectorAll('.loader__idot');
    this.runAnimation();
  }

  runAnimation() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      this.complete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => this.animateDotsToEyes()
    });

    tl.set(this.words, { opacity: 0, y: 60 });

    tl.to('.loader__word--hi', {
      opacity: 1,
      y: 0,
      duration: 0.45,
      ease: 'power3.out'
    });

    tl.to('.loader__word--hi', {
      scale: 0.9,
      duration: 0.15,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: 1
    }, '+=0.15');

    tl.to('.loader__word--iam', {
      opacity: 1,
      y: 0,
      duration: 0.35,
      ease: 'power3.out'
    }, '-=0.05');

    tl.to('.loader__word--name', {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power3.out'
    }, '-=0.2');

    tl.to({}, { duration: 0.75 });

    tl.to('.loader__word--hi', {
      opacity: 0,
      y: -40,
      duration: 0.25,
      ease: 'power2.in'
    }, 'exit');

    tl.to('.loader__word--iam', {
      opacity: 0,
      y: -30,
      duration: 0.2,
      ease: 'power2.in'
    }, 'exit+=0.04');

    tl.to('.loader__word--name', {
      opacity: 0,
      y: -50,
      duration: 0.3,
      ease: 'power2.in'
    }, 'exit+=0.06');

    this.animation = tl;
  }

  animateDotsToEyes() {
    const eyes = document.querySelectorAll('.eyes-menu .pupil');
    if (eyes.length < 2) {
      this.fadeOutLoader();
      return;
    }

    const idot1Rect = this.idots[0].getBoundingClientRect();
    const idot2Rect = this.idots[1].getBoundingClientRect();
    const eye1Rect = eyes[0].getBoundingClientRect();
    const eye2Rect = eyes[1].getBoundingClientRect();

    const dot1StartX = idot1Rect.left + idot1Rect.width / 2 - 4;
    const dot1StartY = idot1Rect.top - 8;
    const dot2StartX = idot2Rect.left + idot2Rect.width / 2 - 4;
    const dot2StartY = idot2Rect.top - 8;

    const dot1EndX = eye1Rect.left + eye1Rect.width / 2 - 4;
    const dot1EndY = eye1Rect.top + eye1Rect.height / 2 - 4;
    const dot2EndX = eye2Rect.left + eye2Rect.width / 2 - 4;
    const dot2EndY = eye2Rect.top + eye2Rect.height / 2 - 4;

    gsap.set(this.dots[0], {
      x: dot1StartX,
      y: dot1StartY,
      opacity: 1,
      scale: 1
    });

    gsap.set(this.dots[1], {
      x: dot2StartX,
      y: dot2StartY,
      opacity: 1,
      scale: 1
    });

    const dotTl = gsap.timeline({
      onComplete: () => this.fadeOutLoader()
    });

    dotTl.to(this.dots, {
      x: (i) => i === 0 ? dot1EndX : dot2EndX,
      y: (i) => i === 0 ? dot1EndY : dot2EndY,
      scale: 2,
      duration: 0.6,
      ease: 'power2.inOut',
      stagger: 0.1
    });

    dotTl.to(this.dots, {
      opacity: 0,
      scale: 0,
      duration: 0.3,
      ease: 'power2.in'
    });
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
