<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Scroll-reveal abstraction (plan §25/§40).
// opacity 0 → 1, translateY 16px → 0, triggered once by IntersectionObserver.
const props = defineProps({
  delay: { type: Number, default: 0 },
  as: { type: String, default: 'div' },
});

const el = ref(null);
let observer = null;

onMounted(() => {
  if (!el.value) return;
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        el.value.classList.add('is-visible');
        observer.disconnect();
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  observer.observe(el.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <component
    :is="props.as"
    ref="el"
    class="reveal"
    :style="props.delay ? { transitionDelay: `${props.delay}ms` } : undefined"
  >
    <slot />
  </component>
</template>
