<script setup>
import ScrollReveal from './ui/ScrollReveal.vue';

// Consistent section heading: mono eyebrow + display title + optional blurb.
const props = defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
});
</script>

<template>
  <ScrollReveal class="mb-12 md:mb-16">
    <p class="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
      {{ props.eyebrow }}
    </p>
    <h2
      class="font-display font-semibold leading-[1.05] tracking-tight"
      style="font-size: var(--text-section); text-wrap: balance"
    >
      {{ props.title }}
    </h2>
    <p v-if="props.description" class="mt-4 max-w-xl text-muted">
      {{ props.description }}
    </p>
  </ScrollReveal>
</template>
