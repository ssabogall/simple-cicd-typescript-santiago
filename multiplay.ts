/**
 * 
 * @param a 
 * @param b 
 * @returns a * b
 */
function multiplay(a: number, b: number): number {
  if (a === 0 || b === 0) {
    return 0;
  }
  return a * b;
}

// Expose to window so the HTML script can call it
(window as unknown as { multiplay: typeof multiplay }).multiplay = multiplay;