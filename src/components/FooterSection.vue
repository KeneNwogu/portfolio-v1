<script setup>
import { profile } from '../data/portfolio.js';

// Minimal footer (plan §23). No navigation duplicates.
const year = new Date().getFullYear();
</script>

<template>
  <footer class="mx-auto max-w-content px-5 pb-12 pt-24 sm:px-8 md:pt-32">
    <div class="border-t border-line pt-8">
      <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-display text-base font-bold tracking-tight">
            <span class="text-accent" aria-hidden="true">&lt;</span>
            KCEE
            <span class="text-accent" aria-hidden="true">/&gt;</span>
          </p>
          <p class="mt-1.5 text-sm text-faint">
            Software engineer building reliable systems.
          </p>
        </div>

        <div class="flex items-center gap-6 font-mono text-xs text-faint">
          <a
            href="https://github.com/KeneNwogu"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-ink"
          >GitHub</a>
          <a
            href="https://linkedin.com/in/kenenwogu"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors duration-200 hover:text-ink"
          >LinkedIn</a>
          <a
            :href="`mailto:${profile.email}`"
            class="transition-colors duration-200 hover:text-ink"
          >Email</a>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] text-faint sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} {{ profile.name }}</p>
        <p>Built with Vue, Vite &amp; Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>
