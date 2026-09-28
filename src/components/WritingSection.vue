<script setup>
import { articles } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.vue';
import ScrollReveal from './ui/ScrollReveal.vue';

// Writing section — preserves the existing blog content (Rule 6).
</script>

<template>
  <section id="writing" class="mx-auto max-w-content scroll-mt-24 px-5 sm:px-8">
    <SectionHeader
      eyebrow="Writing"
      title="Latest articles."
      description="I write technical articles in my leisure time — mostly on backend patterns and framework deep-dives."
    />

    <div class="grid gap-5 md:grid-cols-3">
      <ScrollReveal v-for="(article, i) in articles" :key="article.url" :delay="i * 60">
        <a
          :href="article.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface transition-colors duration-300 hover:border-faint/50"
        >
          <div class="overflow-hidden bg-canvas">
            <img
              :src="article.cover"
              :alt="`Cover image for ${article.title}`"
              loading="lazy"
              width="800"
              height="420"
              class="aspect-[16/8.4] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <div class="flex flex-1 flex-col p-5">
            <h3
              class="font-display text-base font-semibold leading-snug tracking-tight text-ink transition-colors duration-200 group-hover:text-accent"
            >
              {{ article.title }}
            </h3>
            <p class="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
              {{ article.excerpt }}
            </p>
            <p class="mt-4 flex items-center gap-2 border-t border-line pt-4 font-mono text-[11px] text-faint">
              <svg class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                <circle cx="8" cy="8" r="6" />
                <path d="M8 4.5V8l2.25 2.25" stroke-linecap="round" />
              </svg>
              {{ article.readTime }} min read
              <span class="ml-auto">Hashnode</span>
            </p>
          </div>
        </a>
      </ScrollReveal>
    </div>

    <ScrollReveal class="mt-10 text-center">
      <a
        href="https://kcee.hashnode.dev/"
        target="_blank"
        rel="noopener noreferrer"
        class="group inline-flex min-h-[44px] items-center gap-2 rounded-md border border-line px-6 py-2.5 text-sm font-medium text-muted transition-colors duration-200 hover:border-faint hover:text-ink"
      >
        View all articles
        <svg
          class="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
          viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"
        >
          <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </ScrollReveal>
  </section>
</template>
