class EyesMenu {
  constructor(selector = '.eyes-menu') {
    this.menu = document.querySelector(selector);
    if (!this.menu) return;
    
    this.nav = this.menu.querySelector('.nav');
    this.navLinks = this.menu.querySelectorAll('.nav a');
    this.pupils = this.menu.querySelectorAll('.pupil');
    this.eyes = this.menu.querySelectorAll('.eye');
    this.eyelids = this.menu.querySelectorAll('.eyelid');
    this.expanded = false;
    
    this.init();
  }

  init() {
    this.menu.addEventListener('mouseenter', () => this.expand());
    this.menu.addEventListener('mouseleave', () => this.collapse());
    document.addEventListener('mousemove', (e) => this.trackCursor(e));
    this.randomBlink();
    this.startIdleAnimation();
  }

  expand() {
    if (this.expanded) return;
    this.expanded = true;

    gsap.killTweensOf(this.menu);
    gsap.killTweensOf(this.menu.querySelector('.eyes'));
    gsap.killTweensOf(this.nav);
    gsap.killTweensOf(this.navLinks);

    gsap.to(this.menu, {
      width: 700,
      duration: 0.8,
      ease: 'elastic.out(1,0.6)'
    });

    gsap.to(this.menu.querySelector('.eyes'), {
      gap: 500,
      duration: 0.8,
      ease: 'elastic.out(1,0.6)'
    });

    gsap.to(this.nav, {
      opacity: 1,
      duration: 0.2,
      delay: 0.2
    });

    gsap.to(this.navLinks, {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.4,
      delay: 0.2,
      ease: 'power3.out'
    });
  }

  collapse() {
    if (!this.expanded) return;
    this.expanded = false;

    gsap.killTweensOf(this.menu);
    gsap.killTweensOf(this.menu.querySelector('.eyes'));
    gsap.killTweensOf(this.nav);
    gsap.killTweensOf(this.navLinks);

    gsap.to(this.menu, {
      width: 170,
      duration: 0.28,
      ease: 'power3.out'
    });

    gsap.to(this.menu.querySelector('.eyes'), {
      gap: 6,
      duration: 0.28,
      ease: 'power3.out'
    });

    gsap.to(this.nav, {
      opacity: 0,
      duration: 0.15
    });

    gsap.to(this.navLinks, {
      y: 10,
      opacity: 0,
      duration: 0.2
    });
  }

  trackCursor(e) {
    this.eyes.forEach((eye, i) => {
      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const max = 10;

      gsap.to(this.pupils[i], {
        x: Math.cos(angle) * max,
        y: Math.sin(angle) * max,
        rotation: 18,
        duration: 0.2,
        ease: 'power2.out'
      });
    });
  }

  blink() {
    this.eyelids.forEach((lid, i) => {
      gsap.to(lid, {
        height: '100%',
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        delay: i * 0.05
      });
    });
  }

  randomBlink() {
    this.blink();
    gsap.delayedCall(gsap.utils.random(2, 5), () => this.randomBlink());
  }

  startIdleAnimation() {
    gsap.to(this.pupils, {
      x: '+=2',
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: 'sine.inOut'
    });
  }
}

window.EyesMenu = EyesMenu;
