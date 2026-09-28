<script setup>
import { capabilityGroups, primaryStack, workingWith } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.vue';
import ScrollReveal from './ui/ScrollReveal.vue';

// Capabilities (plan §13–15): grouped rows with hover detail + PRIMARY / WORKING WITH split.
// No percentage bars, no skill scores.
</script>

<template>
  <section id="capabilities" class="mx-auto max-w-content scroll-mt-24 px-5 sm:px-8">
    <SectionHeader
      eyebrow="Capabilities"
      title="What I bring to a team."
      description="Six years of building across startups, contracts and open source — here's the working picture."
    />

    <div class="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
      <!-- Capability rows -->
      <ScrollReveal>
        <ul class="border-t border-line">
          <li
            v-for="group in capabilityGroups"
            :key="group.label"
            class="group border-b border-line"
          >
            <div class="flex min-h-[64px] cursor-default flex-col justify-center py-4 transition-colors duration-200 hover:bg-white/[0.02] sm:flex-row sm:items-center sm:gap-8 sm:px-4">
              <span
                class="shrink-0 font-display text-lg font-semibold tracking-tight text-ink transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-accent sm:w-44"
              >
                {{ group.label }}
              </span>
              <span
                class="mt-1 font-mono text-xs leading-relaxed text-faint transition-colors duration-200 group-hover:text-muted sm:mt-0"
              >
                {{ group.detail }}
              </span>
            </div>
          </li>
        </ul>
      </ScrollReveal>

      <!-- Skills presentation (plan §15) -->
      <ScrollReveal :delay="100" class="space-y-10">
        <div>
          <p class="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Primary</p>
          <ul class="space-y-2.5">
            <li
              v-for="tech in primaryStack"
              :key="tech"
              class="font-display text-lg font-medium tracking-tight text-ink"
            >
              {{ tech }}
            </li>
          </ul>
        </div>

        <div>
          <p class="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-faint">
            Working with
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tech in workingWith"
              :key="tech"
              class="rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted transition-colors duration-200 hover:border-accent/40 hover:text-ink"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
