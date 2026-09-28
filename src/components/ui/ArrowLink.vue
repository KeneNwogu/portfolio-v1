<script setup>
// Arrow link micro-interaction (plan §48): arrow shifts 4px on hover/focus.
const props = defineProps({
  href: { type: String, required: true },
  external: { type: Boolean, default: false },
  label: { type: String, default: '' },
});
</script>

<template>
  <a
    class="group inline-flex items-center gap-2 font-medium text-ink transition-colors duration-200 hover:text-accent focus-visible:text-accent"
    :href="props.href"
    :target="props.external ? '_blank' : undefined"
    :rel="props.external ? 'noopener noreferrer' : undefined"
  >
    <slot>{{ props.label }}</slot>
    <svg
      class="h-4 w-4 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </a>
</template>
