<script setup>
// Compact secondary project card (plan §10).
// Hover: title shifts 4px, arrow moves right, image scales 1.03, border brightens.
const props = defineProps({
  project: { type: Object, required: true },
});
</script>

<template>
  <a
    :href="props.project.href"
    target="_blank"
    rel="noopener noreferrer"
    class="hover:border-faint/50 focus-visible:border-faint/50 group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-300"
    :aria-label="`${props.project.title} — ${props.project.description}`"
  >
    <div class="overflow-hidden bg-canvas">
      <img
        :src="props.project.image"
        :alt="`${props.project.title} preview`"
        loading="lazy"
        width="800"
        height="450"
        class="aspect-[16/9] w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        :class="
          props.project.imageIsLogo
            ? 'object-contain p-10'
            : 'object-cover object-top'
        "
      />
    </div>

    <div class="flex flex-1 flex-col p-5">
      <p class="mb-2 font-mono text-[11px] text-faint">
        <span class="text-accent">{{ props.project.number }}</span>
      </p>
      <h3
        class="font-display text-lg font-semibold tracking-tight text-ink transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        {{ props.project.title }}
      </h3>
      <p class="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {{ props.project.description }}
      </p>
      <div class="mt-4 flex items-center justify-between border-t border-line pt-4">
        <span class="font-mono text-[11px] text-faint">{{ props.project.primaryTech }}</span>
        <svg
          class="h-4 w-4 text-faint transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-accent"
          viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"
        >
          <path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>
  </a>
</template>
