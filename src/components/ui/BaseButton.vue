<script setup>
// Button system (plan §55): primary / secondary / ghost variants,
// with hover, active and focus-visible states (plan §42).
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost'].includes(v),
  },
  as: { type: String, default: 'button' },
  href: { type: String, default: '' },
});

const classes = {
  primary:
    'bg-ink text-canvas hover:bg-white active:scale-[0.98] border border-transparent',
  secondary:
    'border border-line bg-transparent text-ink hover:border-faint hover:bg-white/[0.03] active:scale-[0.98]',
  ghost:
    'border border-transparent text-muted hover:text-ink hover:bg-white/[0.04] active:scale-[0.98]',
};
</script>

<template>
  <component
    :is="props.href ? 'a' : props.as"
    :href="props.href || undefined"
    class="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold tracking-tight transition-all duration-200 ease-out"
    :class="classes[props.variant]"
  >
    <slot />
  </component>
</template>
