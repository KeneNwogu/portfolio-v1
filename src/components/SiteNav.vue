<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { navSections, profile } from '../data/portfolio.js';
import { useScrollSpy } from '../composables/useScrollSpy.js';

// Compact sticky navbar (plan §5): transparent at top, blur + border after scroll.
const scrolled = ref(false);
const menuOpen = ref(false);
const { activeId } = useScrollSpy(navSections.map((s) => s.id));

const onScroll = () => {
  scrolled.value = window.scrollY > 24;
};

const onKeydown = (e) => {
  if (e.key === 'Escape') menuOpen.value = false;
};

// body scroll lock while the mobile menu is open
watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll);
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-200 ease-out"
    :class="
      scrolled
        ? 'border-b border-line bg-canvas/80 shadow-[0_1px_20px_rgba(0,0,0,0.25)] backdrop-blur-md'
        : 'border-b border-transparent bg-transparent'
    "
  >
    <nav
      class="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8"
      :class="scrolled ? 'h-14' : 'h-16 md:h-20'"
      aria-label="Main"
    >
      <!-- Brand -->
      <a
        href="#top"
        class="flex min-h-[44px] items-center gap-2 font-display text-lg font-bold tracking-tight"
        @click="menuOpen = false"
      >
        <span class="text-accent" aria-hidden="true">&lt;</span>
        KCEE
        <span class="text-accent" aria-hidden="true">/&gt;</span>
        <span class="sr-only">{{ profile.name }}</span>
      </a>

      <!-- Desktop links -->
      <div class="hidden items-center gap-8 md:flex">
        <a
          v-for="section in navSections"
          :key="section.id"
          :href="`#${section.id}`"
          class="group relative py-2 text-sm text-muted transition-colors duration-200 hover:text-ink"
          :class="activeId === section.id && 'text-ink'"
          :aria-current="activeId === section.id ? 'true' : undefined"
        >
          {{ section.label }}
          <span
            class="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100"
            :class="activeId === section.id && 'scale-x-100'"
            aria-hidden="true"
          />
        </a>
      </div>

      <div class="hidden items-center gap-6 lg:flex">
        <span class="flex items-center gap-2 font-mono text-xs text-faint">
          <span
            class="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-emerald-400"
            aria-hidden="true"
          />
          Available for opportunities
        </span>
      </div>

      <!-- Mobile menu button -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-md text-ink transition-colors duration-200 hover:bg-white/5 md:hidden"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
        @click="menuOpen = !menuOpen"
      >
        <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true">
          <template v-if="!menuOpen">
            <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
          </template>
          <template v-else>
            <path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
          </template>
        </svg>
      </button>
    </nav>

    <!-- Mobile full-screen menu (plan §34) -->
    <Transition name="menu">
      <div
        v-if="menuOpen"
        id="mobile-menu"
        class="bg-canvas/95 fixed inset-0 z-40 flex flex-col px-5 pb-10 pt-24 backdrop-blur-lg md:hidden"
      >
        <a
          v-for="section in navSections"
          :key="section.id"
          :href="`#${section.id}`"
          class="border-b border-line py-5 font-display text-2xl font-semibold tracking-tight text-ink transition-colors duration-200 hover:text-accent"
          @click="menuOpen = false"
        >
          {{ section.label }}
        </a>
        <p class="mt-8 flex items-center gap-2 font-mono text-xs text-faint">
          <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Available for opportunities
        </p>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
