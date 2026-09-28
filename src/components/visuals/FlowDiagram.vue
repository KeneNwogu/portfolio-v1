<script setup>
// Linear system-flow diagram (plan §11): node → node → node.
// Horizontal on desktop, vertical on mobile. Pure CSS.
const props = defineProps({
  nodes: { type: Array, required: true },
  caption: { type: String, default: '' },
});
</script>

<template>
  <figure class="rounded-lg border border-line bg-surface p-6 sm:p-8">
    <div
      class="flex flex-col items-stretch justify-center gap-0 md:flex-row md:items-center md:gap-0"
    >
      <template v-for="(node, i) in props.nodes" :key="node">
        <div
          class="rounded-md border border-line bg-canvas px-4 py-3 text-center font-mono text-xs text-ink transition-colors duration-300 hover:border-accent/40 md:px-5"
        >
          {{ node }}
        </div>
        <div
          v-if="i < props.nodes.length - 1"
          class="flex items-center justify-center py-1.5 text-faint md:px-2 md:py-0"
          aria-hidden="true"
        >
          <!-- down arrow (mobile) -->
          <svg class="h-5 w-5 md:hidden" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M8 2v11M4 9.5 8 13.5l4-4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <!-- right arrow (desktop) -->
          <svg class="hidden h-5 w-5 md:block" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M2 8h11M9.5 4l4 4-4 4" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </template>
    </div>
    <figcaption v-if="props.caption" class="mt-6 border-t border-line pt-4 text-center font-mono text-[11px] uppercase tracking-[0.15em] text-faint">
      {{ props.caption }}
    </figcaption>
  </figure>
</template>
