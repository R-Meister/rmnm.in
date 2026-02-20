import Loader from './loader.js';

class App {
  constructor() {
    this.loader = null;
    this.init();
  }

  async init() {
    await this.loadLoaderComponent();
    this.initializeLoader();
  }

  async loadLoaderComponent() {
    const container = document.getElementById('loader-container');
    if (!container) {
      console.warn('Loader container not found');
      return;
    }

    try {
      const response = await fetch('components/loader.html');
      if (!response.ok) {
        throw new Error(`Failed to load loader: ${response.status}`);
      }
      const html = await response.text();
      container.innerHTML = html;
    } catch (error) {
      console.error('Error loading loader component:', error);
    }
  }

  initializeLoader() {
    const loaderElement = document.getElementById('loader');
    if (!loaderElement) {
      console.warn('Loader element not found');
      return;
    }

    this.loader = new Loader();
    this.loader.init(loaderElement);

    this.loader.onComplete(() => {
      this.onLoaderComplete();
    });
  }

  onLoaderComplete() {
    document.body.classList.add('is-loaded');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});

export default App;
