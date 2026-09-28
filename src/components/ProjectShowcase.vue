<script setup>
import ScrollReveal from './ui/ScrollReveal.vue';
import ArrowLink from './ui/ArrowLink.vue';
import TerminalVisual from './visuals/TerminalVisual.vue';
import FlowDiagram from './visuals/FlowDiagram.vue';

// Editorial project showcase (plan §9): alternating image/content layout.
const props = defineProps({
  project: { type: Object, required: true },
  flipped: { type: Boolean, default: false },
});
</script>

<template>
  <ScrollReveal as="article" class="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
    <!-- Visual -->
    <div class="min-w-0" :class="props.flipped ? 'lg:order-2' : ''">
      <TerminalVisual v-if="props.project.visual === 'terminal'" />
      <FlowDiagram
        v-else-if="props.project.visual === 'flow'"
        :nodes="props.project.flowNodes"
        caption="Request → response flow"
      />
      <div
        v-else
        class="group overflow-hidden rounded-lg border border-line bg-surface"
      >
        <img
          :src="props.project.image"
          :alt="`${props.project.title} interface`"
          loading="lazy"
          width="1200"
          height="750"
          class="aspect-[8/5] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="min-w-0" :class="props.flipped ? 'lg:order-1' : ''">
      <p class="mb-3 flex items-center gap-3 font-mono text-xs text-faint">
        <span class="text-accent">{{ props.project.number }}</span>
        <span aria-hidden="true">—</span>
        <span class="uppercase tracking-[0.18em]">{{ props.project.category }}</span>
      </p>

      <h3
        class="font-display font-semibold tracking-tight"
        style="font-size: var(--text-project)"
      >
        {{ props.project.title }}
      </h3>

      <p class="mt-3 text-lg text-muted">{{ props.project.tagline }}</p>
      <p class="mt-4 leading-relaxed text-faint">{{ props.project.description }}</p>

      <dl class="mt-6 space-y-3 border-t border-line pt-5 text-sm">
        <div class="grid gap-1 sm:grid-cols-[7rem_1fr]">
          <dt class="font-mono text-xs uppercase tracking-wider text-faint">Role</dt>
          <dd class="text-muted">{{ props.project.role }}</dd>
        </div>
        <div class="grid gap-1 sm:grid-cols-[7rem_1fr]">
          <dt class="font-mono text-xs uppercase tracking-wider text-faint">Engineering</dt>
          <dd class="text-muted">{{ props.project.engineering }}</dd>
        </div>
      </dl>

      <p class="mt-5 font-mono text-xs text-faint">
        {{ props.project.technologies.join('  ·  ') }}
      </p>

      <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
        <ArrowLink
          v-for="link in props.project.links"
          :key="link.href"
          :href="link.href"
          external
          :label="link.label"
          class="text-sm"
        />
      </div>
    </div>
  </ScrollReveal>
</template>
