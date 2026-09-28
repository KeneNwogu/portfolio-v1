<script setup>
import { featuredProjects, moreProjects } from '../data/portfolio.js';
import SectionHeader from './SectionHeader.vue';
import ProjectShowcase from './ProjectShowcase.vue';
import ProjectCard from './ProjectCard.vue';
import ScrollReveal from './ui/ScrollReveal.vue';
</script>

<template>
  <section id="work" class="mx-auto max-w-content scroll-mt-24 px-5 sm:px-8">
    <SectionHeader
      eyebrow="Selected Work"
      title="Things I've built, shipped and maintained."
      description="A few projects that show how I think — from payment flows and realtime systems to AI-driven products."
    />

    <div class="flex flex-col" style="gap: var(--section-gap)">
      <ProjectShowcase
        v-for="(project, i) in featuredProjects"
        :key="project.title"
        :project="project"
        :flipped="i % 2 === 1"
      />
    </div>

    <!-- Additional projects (plan §10) -->
    <div class="mt-24 md:mt-32">
      <ScrollReveal class="mb-8 flex items-baseline justify-between">
        <h3 class="font-display text-xl font-semibold tracking-tight">More projects</h3>
        <a
          href="https://github.com/KeneNwogu"
          target="_blank"
          rel="noopener noreferrer"
          class="group inline-flex items-center gap-1.5 font-mono text-xs text-faint transition-colors duration-200 hover:text-accent"
        >
          All on GitHub
          <svg
            class="h-3.5 w-3.5 transition-transform duration-200 ease-out group-hover:translate-x-1"
            viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"
          >
            <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </ScrollReveal>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ScrollReveal
          v-for="(project, i) in moreProjects"
          :key="project.title"
          :delay="i * 60"
        >
          <ProjectCard :project="project" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
