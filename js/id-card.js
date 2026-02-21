export class IdCard {
  constructor() {
    this.container = document.querySelector('.id-card-container');
    this.card = document.querySelector('.id-card');
    this.lanyard = document.querySelector('.lanyard');
    
    if (this.container && this.card) {
      this.init();
    }
  }

  init() {
    this.setupInitialState();
    this.animate();
    this.setupHoverEffect();
  }

  setupInitialState() {
    gsap.set(this.container, {
      opacity: 0,
      y: 60,
    });

    gsap.set(this.lanyard, {
      opacity: 0,
      y: -40
    });

    gsap.set(this.card, {
      rotateX: 12,
      scale: 0.9,
    });
  }

  animate() {
    const tl = gsap.timeline({ delay: 1.5 });

    tl.to(this.container, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .to(this.lanyard, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'back.out(1.7)'
    }, '-=0.6')
    .to(this.card, {
      rotateX: 0,
      scale: 1,
      duration: 0.9,
      ease: 'power2.out'
    }, '-=0.5');

    this.addFloatingAnimation();
    this.addLanyardSwing();
  }

  addFloatingAnimation() {
    gsap.to(this.card, {
      y: -6,
      duration: 2.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }

  addLanyardSwing() {
    gsap.to(this.lanyard, {
      rotateZ: 1,
      duration: 3.5,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }

  setupHoverEffect() {
    if (!this.card || !this.container) return;

    this.container.addEventListener('mouseenter', () => {
      gsap.to(this.card, {
        rotateY: 8,
        rotateX: -4,
        scale: 1.04,
        duration: 0.4,
        ease: 'power2.out'
      });
    });

    this.container.addEventListener('mouseleave', () => {
      gsap.to(this.card, {
        rotateY: 0,
        rotateX: 0,
        scale: 1,
        duration: 0.6,
        ease: 'elastic.out(1, 0.5)'
      });
    });

    this.container.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(this.card, {
        rotateY: x * 18,
        rotateX: -y * 12,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }
}
