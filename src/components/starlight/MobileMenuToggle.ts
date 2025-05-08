
export default class StarlightMenuButton extends HTMLElement {
  btn = this.querySelector('button')!;

  constructor() {
    super();

    // Toggle `aria-expanded` state when a user clicks the button.
    this.btn.addEventListener('click', () => this.toggleExpanded());

    // Close the menu when a user presses the escape key.
    const parentNav = this.closest('nav');
    if (parentNav) {
      parentNav.addEventListener('keyup', (e) => this.closeOnEscape(e));
    }
  }

  setExpanded(expanded: boolean) {
    this.setAttribute('aria-expanded', String(expanded));
    document.body.toggleAttribute('data-mobile-menu-expanded', expanded);
  }

  toggleExpanded() {
    this.setExpanded(this.getAttribute('aria-expanded') !== 'true');
  }

  closeOnEscape(e: KeyboardEvent) {
    if (e.code === 'Escape') {
      this.setExpanded(false);
      this.btn.focus();
    }
  }
}

