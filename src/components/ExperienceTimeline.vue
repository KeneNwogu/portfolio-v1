<script setup>
import { experience } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.vue';
import ScrollReveal from './ui/ScrollReveal.vue';

// Vertical timeline (plan §16–17): date column + thin line with nodes on desktop,
// simple stacked timeline on mobile. Each entry reveals via IntersectionObserver.
</script>

<template>
  <section id="experience" class="mx-auto max-w-content scroll-mt-24 px-5 sm:px-8">
    <SectionHeader
      eyebrow="Experience"
      title="Building software across industries since 2020."
      description="Fintech, healthtech, e-commerce, education and open data — mostly on the backend, often full-stack."
    />

    <ol class="relative">
      <!-- vertical line (desktop) -->
      <div
        class="absolute bottom-0 left-[7.5rem] top-2 hidden w-px bg-line md:block"
        aria-hidden="true"
      />

      <ScrollReveal
        v-for="job in experience"
        :key="job.company + job.period"
        as="li"
        class="group relative grid gap-2 pb-12 md:grid-cols-[7.5rem_1fr] md:gap-10"
      >
        <!-- date -->
        <div class="hidden pt-1 md:block">
          <p class="font-mono text-xs text-faint transition-colors duration-200 group-hover:text-muted">
            {{ job.period }}
          </p>
        </div>

        <!-- node on the line -->
        <div
          class="absolute left-[7.5rem] top-2 hidden h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-faint bg-canvas transition-colors duration-300 group-hover:border-accent group-hover:bg-accent md:block"
          aria-hidden="true"
        />

        <!-- content -->
        <div class="md:pl-10">
          <p class="mb-1 font-mono text-xs text-faint md:hidden">{{ job.period }}</p>
          <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 class="font-display text-lg font-semibold tracking-tight text-ink">
              {{ job.role }}
            </h3>
            <span class="text-sm text-accent">{{ job.company }}</span>
          </div>
          <p class="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {{ job.description }}
          </p>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              v-for="tech in job.technologies"
              :key="tech"
              class="rounded-full border border-line bg-surface px-2.5 py-0.5 font-mono text-[11px] text-faint"
            >
              {{ tech }}
            </span>
            <a
              v-if="job.website"
              :href="job.website"
              target="_blank"
              rel="noopener noreferrer"
              class="ml-1 inline-flex items-center gap-1 font-mono text-[11px] text-muted transition-colors duration-200 hover:text-accent"
            >
              Visit site
              <svg class="h-3 w-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </ScrollReveal>
    </ol>
  </section>
</template>
