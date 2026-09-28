import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Scroll-spy for anchor navigation (plan §42 "active section").
 * Observes section elements and returns the id currently in view.
 */
export function useScrollSpy(sectionIds) {
  const activeId = ref('');
  let observer = null;
  const visible = new Set();

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // pick the first section (in document order) currently visible
        activeId.value = sectionIds.find((id) => visible.has(id)) || '';
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
  });

  onBeforeUnmount(() => observer?.disconnect());

  return { activeId };
}
