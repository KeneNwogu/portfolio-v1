<script setup>
import { profile } from '../data/portfolio.js';
import { useMouseGlow } from '../composables/useMouseGlow.js';

// Hero (plan §6–8): entrance sequence with 50–100ms stagger, CSS-only.
useMouseGlow();

const downloadCV = () => {
  const link = document.createElement('a');
  link.href = profile.resume;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const heroStack = ['Python', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'];
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <!-- Background: faint grid + radial glow (subordinate to text, §30) -->
    <div class="bg-grid absolute inset-0" aria-hidden="true" />
    <div class="hero-glow absolute inset-0" aria-hidden="true" />
    <div
      class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-canvas"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto flex max-w-content flex-col justify-center px-5 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-48 lg:pb-40 lg:pt-56"
    >
      <!-- 1. Eyebrow -->
      <p
        class="hero-rise mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.22em] text-muted"
        style="animation-delay: 80ms"
      >
        <span class="text-accent">{{ profile.role }}</span>
        <span class="text-faint" aria-hidden="true">/</span>
        <span>{{ profile.location }}</span>
      </p>

      <!-- 2. Heading: line-masked reveal (§50) -->
      <h1
        class="max-w-4xl font-display font-bold tracking-tight"
        style="font-size: var(--text-hero); line-height: 1.02; text-wrap: balance"
      >
        <span class="hero-line-mask">
          <span style="animation-delay: 150ms">I build reliable systems</span>
        </span>
        <span class="hero-line-mask">
          <span style="animation-delay: 230ms" class="text-faint">and products people use.</span>
        </span>
      </h1>

      <!-- 3. Description -->
      <p
        class="hero-rise mt-8 max-w-xl text-lg leading-relaxed text-muted"
        style="animation-delay: 380ms"
      >
        I'm <span class="text-ink">Ken</span> — a software engineer with a versatile stack,
        focused on backend systems, APIs and full-stack products. I care about fast delivery
        without giving up on reliability, observability and clean design.
      </p>

      <!-- 4. CTAs -->
      <div
        class="hero-rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
        style="animation-delay: 470ms"
      >
        <a
          href="#work"
          class="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-ink px-7 py-3 text-sm font-semibold text-canvas transition-all duration-200 ease-out hover:bg-white active:scale-[0.98]"
        >
          View selected work
          <svg
            class="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
            viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"
          >
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
        <a
          href="#contact"
          class="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line px-7 py-3 text-sm font-semibold text-ink transition-all duration-200 ease-out hover:border-faint hover:bg-white/[0.03] active:scale-[0.98]"
        >
          Get in touch
        </a>
      </div>

      <!-- 5. Supporting metadata -->
      <div
        class="hero-rise mt-14 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between"
        style="animation-delay: 560ms"
      >
        <p class="font-mono text-xs text-faint">
          <template v-for="(tech, i) in heroStack" :key="tech">
            <span v-if="i > 0" class="mx-1.5 text-line" aria-hidden="true">•</span>
            <span class="text-muted">{{ tech }}</span>
          </template>
        </p>
        <button
          class="inline-flex min-h-[44px] items-center gap-2 self-start font-mono text-xs text-muted transition-colors duration-200 hover:text-accent sm:self-auto"
          @click="downloadCV"
        >
          <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
            <path d="M8 2v8m0 0 3-3m-3 3L5 7M2.5 12.5h11" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          Download CV
        </button>
      </div>
    </div>
  </section>
</template>
