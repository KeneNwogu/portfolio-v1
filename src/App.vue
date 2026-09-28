<script setup>
import SiteNav from './components/SiteNav.vue';
import HeroSection from './components/HeroSection.vue';
import SelectedWorkSection from './components/SelectedWorkSection.vue';
import CapabilitiesSection from './components/CapabilitiesSection.vue';
import ExperienceTimeline from './components/ExperienceTimeline.vue';
import AboutSection from './components/AboutSection.vue';
import WritingSection from './components/WritingSection.vue';
import ContactSection from './components/ContactSection.vue';
import FooterSection from './components/FooterSection.vue';

// Page structure per plan §4:
// Navbar → Hero → Selected Work → Capabilities → Experience → About → Writing → Contact → Footer
</script>

<template>
  <div class="min-h-screen bg-canvas text-ink">
    <a
      href="#top"
      class="sr-only z-[60] rounded-md bg-ink px-4 py-2 text-sm font-semibold text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>

    <SiteNav />

    <main>
      <HeroSection />

      <div class="flex flex-col" style="gap: var(--section-gap)">
        <SelectedWorkSection />
        <CapabilitiesSection />
        <ExperienceTimeline />
        <AboutSection />
        <WritingSection />
        <ContactSection />
      </div>
    </main>

    <FooterSection />
  </div>
</template>
