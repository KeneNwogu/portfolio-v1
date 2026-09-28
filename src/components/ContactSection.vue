<script setup>
import { ref, onBeforeUnmount } from 'vue';
import { profile, socialLinks } from '../data/portfolio.js';
import ScrollReveal from './ui/ScrollReveal.vue';

// Contact CTA (plan §21–22): strong closing section + copy-email confirmation.
const copied = ref(false);
let copiedTimer = null;

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(profile.email);
  } catch {
    // clipboard unavailable — fall back to nothing, mailto link still works
    return;
  }
  copied.value = true;
  clearTimeout(copiedTimer);
  copiedTimer = setTimeout(() => (copied.value = false), 1800);
};

onBeforeUnmount(() => clearTimeout(copiedTimer));
</script>

<template>
  <section id="contact" class="relative mx-auto max-w-content scroll-mt-24 px-5 sm:px-8">
    <ScrollReveal class="border-t border-line pt-16 md:pt-24">
      <div class="flex flex-col items-start gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p class="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2
            class="font-display font-bold tracking-tight"
            style="font-size: var(--text-section); line-height: 1.02; text-wrap: balance"
          >
            Let's build something.
          </h2>
          <p class="mt-5 max-w-md text-lg text-muted">
            Have a project, an opportunity, or an interesting problem?
            I'm a message away.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              :href="`mailto:${profile.email}`"
              class="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md bg-ink px-7 py-3 text-sm font-semibold text-canvas transition-all duration-200 ease-out hover:bg-white active:scale-[0.98]"
            >
              Send a message
              <svg
                class="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1"
                viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"
              >
                <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
            <button
              class="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-md border border-line px-6 py-3 font-mono text-xs text-muted transition-colors duration-200 hover:border-faint hover:text-ink"
              :aria-label="`Copy email address ${profile.email}`"
              @click="copyEmail"
            >
              <template v-if="!copied">
                <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
                  <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
                  <path d="M10.5 5.5v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2" />
                </svg>
                Copy email
              </template>
              <template v-else>
                <svg class="h-4 w-4 text-emerald-400" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
                  <path d="M3 8.5 6.5 12 13 4.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span class="text-emerald-400">Email copied</span>
              </template>
            </button>
          </div>
        </div>

        <!-- Social links (§21: don't overwhelm — 4 platforms) -->
        <ul class="flex flex-col gap-1 md:items-end">
          <li v-for="social in socialLinks" :key="social.name">
            <a
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex min-h-[44px] max-w-full items-center gap-3 rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white/[0.03]"
            >
              <span class="shrink-0 text-sm text-muted transition-colors duration-200 group-hover:text-ink">
                {{ social.name }}
              </span>
              <span class="min-w-0 truncate font-mono text-xs text-faint transition-colors duration-200 group-hover:text-accent">
                {{ social.handle }}
              </span>
              <svg
                class="h-3.5 w-3.5 shrink-0 text-faint transition-all duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"
              >
                <path d="M4 12 12 4M6 4h6v6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </ScrollReveal>
  </section>
</template>
