import { onMounted, onBeforeUnmount } from 'vue';

/**
 * Cursor-following radial glow (plan §8).
 * Writes CSS variables on documentElement inside a rAF loop —
 * never touches reactive state per pointer event.
 * Disabled on touch/coarse pointers and when reduced motion is preferred.
 */
export function useMouseGlow() {
  let frame = 0;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let active = false;

  const reduced = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const loop = () => {
    if (!active) return;
    // spring-ish interpolation toward the pointer
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;
    document.documentElement.style.setProperty('--mouse-x', `${currentX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${currentY}px`);
    frame = requestAnimationFrame(loop);
  };

  const onMove = (e) => {
    if (reduced()) return;
    targetX = e.clientX;
    targetY = e.clientY;
    if (!active) {
      active = true;
      currentX = targetX;
      currentY = targetY;
      frame = requestAnimationFrame(loop);
    }
  };

  onMounted(() => {
    if (window.matchMedia('(pointer: coarse)').matches || reduced()) return;
    window.addEventListener('pointermove', onMove, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener('pointermove', onMove);
    cancelAnimationFrame(frame);
    active = false;
  });
}
