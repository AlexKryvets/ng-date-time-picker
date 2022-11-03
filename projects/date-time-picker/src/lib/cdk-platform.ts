/**
 * Gets the currently-focused element on the page while
 * also piercing through Shadow DOM boundaries.
 */
export function _getFocusedElementPierceShadowDom(): HTMLElement | null {
  let activeElement =
    typeof document !== 'undefined' && document
      ? (document.activeElement as HTMLElement | null)
      : null;

  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement as HTMLElement | null;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }

  return activeElement;
}
