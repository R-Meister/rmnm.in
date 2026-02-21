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

  getEyeSize() {
    const eye = this.eyes[0];
    if (!eye) return 100;
    return eye.offsetWidth;
  }

  getPupilMaxMove() {
    return this.getEyeSize() * 0.18;
  }

  init() {
    this.menu.addEventListener('mouseenter', () => this.expand());
    this.menu.addEventListener('mouseleave', () => this.collapse());
    document.addEventListener('mousemove', (e) => this.trackCursor(e));
    this.randomBlink();
    this.startIdleAnimation();
  }

  getCollapsedWidth() {
    const eyeSize = this.getEyeSize();
    const gap = eyeSize * 0.22;
    const padding = eyeSize * 0.25;
    return eyeSize * 2 + gap + padding * 2;
  }

  getExpandedWidth() {
    const eyeSize = this.getEyeSize();
    const padding = eyeSize * 0.25;
    return eyeSize * 8 + padding * 2;
  }

  expand() {
    if (this.expanded) return;
    this.expanded = true;
    this.menu.classList.add('expanded');

    const eyeSize = this.getEyeSize();
    const expandedWidth = this.getExpandedWidth();
    const expandedGap = eyeSize * 6;

    gsap.killTweensOf(this.menu);
    gsap.killTweensOf(this.menu.querySelector('.eyes'));
    gsap.killTweensOf(this.nav);
    gsap.killTweensOf(this.navLinks);

    gsap.to(this.menu, {
      width: expandedWidth,
      duration: 0.8,
      ease: 'elastic.out(1,0.6)'
    });

    gsap.to(this.menu.querySelector('.eyes'), {
      gap: expandedGap,
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
    this.menu.classList.remove('expanded');

    const collapsedWidth = this.getCollapsedWidth();
    const eyeSize = this.getEyeSize();
    const collapsedGap = eyeSize * 0.22;

    gsap.killTweensOf(this.menu);
    gsap.killTweensOf(this.menu.querySelector('.eyes'));
    gsap.killTweensOf(this.nav);
    gsap.killTweensOf(this.navLinks);

    gsap.to(this.menu, {
      width: collapsedWidth,
      duration: 0.28,
      ease: 'power3.out'
    });

    gsap.to(this.menu.querySelector('.eyes'), {
      gap: collapsedGap,
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
    const max = this.getPupilMaxMove();
    
    this.eyes.forEach((eye, i) => {
      const rect = eye.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

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
    const eyeSize = this.getEyeSize();
    const idleMove = eyeSize * 0.02;
    
    gsap.to(this.pupils, {
      x: `+=${idleMove}`,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: 'sine.inOut'
    });
  }
}

window.EyesMenu = EyesMenu;
