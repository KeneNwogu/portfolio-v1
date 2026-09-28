<script setup>
import SectionHeader from './SectionHeader.vue';
import ScrollReveal from './ui/ScrollReveal.vue';

// About (plan §18–20): short, human copy + one technical easter egg (terminal card).
</script>

<template>
  <section id="about" class="mx-auto max-w-content scroll-mt-24 px-5 sm:px-8">
    <SectionHeader eyebrow="About" title="Engineer first, generalist by choice." />

    <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
      <ScrollReveal class="min-w-0 space-y-5 text-lg leading-relaxed text-muted">
        <p>
          I like turning complicated requirements into simple systems that are
          <span class="text-ink">reliable, observable and easy to maintain</span>.
          Most of my work lives on the backend — order flows, payment integrations,
          data pipelines, background processing — but I'm comfortable owning a feature
          from database schema to the button the user clicks.
        </p>
        <p>
          I've been building software across fintech, healthtech, e-commerce and
          education since 2020, usually in small teams where shipping matters and
          there's nowhere to hide behind process.
        </p>
        <p>
          Lately I've been exploring AI engineering — RAG pipelines, LLM orchestration
          and speech interfaces — and writing technical articles when I'm not building.
        </p>

        <dl class="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 text-sm sm:grid-cols-3">
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-faint">Based in</dt>
            <dd class="mt-1 text-ink">Lagos, Nigeria</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-faint">Building since</dt>
            <dd class="mt-1 text-ink">2020</dd>
          </div>
          <div>
            <dt class="font-mono text-xs uppercase tracking-wider text-faint">Writing</dt>
            <dd class="mt-1">
              <a
                href="https://kcee.hashnode.dev/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-ink transition-colors duration-200 hover:text-accent"
              >kcee.hashnode.dev</a>
            </dd>
          </div>
        </dl>
      </ScrollReveal>

      <!-- Easter egg: small terminal card (§20) -->
      <ScrollReveal :delay="100" class="min-w-0">
        <div class="overflow-hidden rounded-lg border border-line bg-[#0d0d10]">
          <div class="flex items-center justify-between border-b border-line bg-surface px-4 py-2.5">
            <span class="font-mono text-[11px] text-faint">kcee@portfolio — bash</span>
            <span class="flex gap-1.5" aria-hidden="true">
              <span class="h-2 w-2 rounded-full bg-[#3a3a42]" />
              <span class="h-2 w-2 rounded-full bg-[#3a3a42]" />
              <span class="h-2 w-2 rounded-full bg-[#3a3a42]" />
            </span>
          </div>
          <pre
            class="overflow-x-auto p-4 font-mono text-[11.5px] leading-loose text-muted sm:text-xs"
            role="img"
            aria-label="A playful terminal session: whoami prints kcee, stack prints python, typescript and node, status prints open to interesting problems"
          ><code><span class="text-accent">kcee</span><span class="text-faint">~/</span> $ whoami
<span class="text-ink">kenechukwu nwogu — software engineer</span>

<span class="text-accent">kcee</span><span class="text-faint">~/</span> $ stack --daily
<span class="text-ink">python · typescript · node · postgres · mongo</span>

<span class="text-accent">kcee</span><span class="text-faint">~/</span> $ cat ./now
<span class="text-ink">backend systems · ai engineering · writing</span>

<span class="text-accent">kcee</span><span class="text-faint">~/</span> $ status
<span class="text-emerald-300">open to interesting problems</span><span class="animate-pulse text-ink">▊</span></code></pre>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
