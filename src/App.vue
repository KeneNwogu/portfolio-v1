<template>
  <div
    class="min-h-screen bg-gradient-to-br from-zinc-950 via-neutral-900 to-zinc-900 text-gray-100"
  >
    <!-- Navigation -->
    <nav
      class="fixed top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-900/80 backdrop-blur-md"
    >
      <div class="mx-auto max-w-7xl px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <svg
              class="h-8 w-8 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span
              class="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-bold text-transparent"
            >
              Kenechukwu
            </span>
          </div>

          <div class="hidden items-center space-x-8 md:flex">
            <a v-for="item in navItems" :key="item" :href="`#${item.toLowerCase()}`">
              <button
                :key="item"
                :class="[
                  'rounded-lg px-4 py-2 transition-all duration-300',
                  activeNav === item
                    ? 'border border-white/20 bg-white/10 text-white'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white',
                ]"
                @click="activeNav = item"
              >
                {{ item }}
              </button>
            </a>
          </div>

          <div class="flex items-center space-x-4">
            <a href="https://github.com/KeneNwogu" target="_blank">
              <svg
                class="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>

            <a href="https://linkedin.com/in/kenenwogu" target="_blank">
              <svg
                class="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                />
              </svg>
            </a>

            <a href="mailto:nwogujoseph1111@gmail.com" target="_blank">
              <svg
                class="h-5 w-5 cursor-pointer text-gray-400 transition-colors hover:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="mx-auto max-w-7xl px-6 pt-20">
      <div class="grid min-h-[80vh] items-center gap-12 lg:grid-cols-2">
        <!-- Left Side - Profile Card -->
        <div class="space-y-8">
          <div
            class="border border-gray-700/50 bg-gradient-to-br from-gray-800/50 to-slate-800/50 p-8 shadow-2xl backdrop-blur-sm"
          >
            <!-- Profile Image -->
            <!-- <div class="flex justify-center mb-6">
              <div class="relative">
                <div class="w-32 h-32 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl p-1">
                  <div class="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center">
                    <div class="w-24 h-24 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center text-gray-900 font-bold text-2xl">
                      ST
                    </div>
                  </div>
                </div>
                <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                  <div class="w-3 h-3 bg-emerald-300 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div> -->

            <!-- Profile Info -->
            <div class="space-y-4">
              <h2 class="text-2xl font-bold text-gray-100">Kenechukwu Nwogu</h2>
              <p class="font-medium text-red-700">Full-Stack Developer</p>

              <div class="space-y-2 text-sm text-gray-400">
                <div class="flex items-center justify-start space-x-2">
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Lagos, Nigeria</span>
                </div>
                <!-- <div class="flex items-center justify-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>+90 XXX XXX XXXX</span>
                </div> -->
              </div>

              <div class="pt-4">
                <button
                  class="w-full bg-white px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105"
                  @click="downloadCV"
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Main Content -->
        <div class="mt-6">
          <div class="space-y-6">
            <h1 class="text-5xl font-bold leading-tight lg:text-6xl">
              <span class="text-gray-100">Hey,</span><br />
              <span
                class="bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent"
              >
                I'm Ken, </span
              ><br />
              <span class="text-3xl text-gray-300 lg:text-4xl"
                >Full-Stack Developer</span
              >
            </h1>

            <p class="max-w-xl text-lg leading-relaxed text-gray-400">
              I am a software engineer with a versatile tech stack. I work to ensure fast delivery of functional and responsive applications. 
              If you're looking for a developer that likes to get stuff done, feel free to reach out.
            </p>

            <div class="flex items-center space-x-4 pt-4">
              <a href="#contact">
                <button
                  class="rounded-xl bg-white px-8 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-gray-200"
                >
                  Let's Talk 💬
                </button>
              </a>
              <a href="#work-experience">
                <button
                  class="rounded-xl border border-gray-600 px-8 py-3 font-semibold text-gray-400 transition-all duration-300 hover:border-white hover:text-white"
                >
                  View Work
                </button>
              </a>
            </div>
          </div>

          <!-- Stats Cards -->
          <!-- <div class="grid grid-cols-3 gap-4 pt-8">
            <div
              v-for="stat in stats"
              :key="stat.label"
              class="bg-zinc-900/40 backdrop-blur-lg border border-zinc-800/50 rounded-xl hover:border-white/20 transition-all duration-300"
            >
              <div :class="['text-2xl font-bold', stat.color]">{{ stat.value }}</div>
              <div class="text-xs text-gray-500 mt-1">{{ stat.label }}</div>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Let's Connect Section -->
      <div id="contact" class="mt-16 border-t border-gray-700/30 py-16">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-2xl font-bold text-gray-100">Let's Connect</h3>
          <p class="text-gray-400">Reach out on any of these platforms.</p>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="line-clamp-2 flex max-w-sm items-center gap-4 rounded-xl border border-gray-800/50 bg-gray-900/40 p-4 backdrop-blur-lg transition-all duration-300 hover:border-red-900/30"
          >
            <div
              class="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800/50"
            >
              <img :src="social.icon" class="h-5 w-5 text-red-600" />
            </div>
            <div class="flex flex-col">
              <span class="text-sm font-medium text-gray-300">{{
                social.name
              }}</span>
              <span class="text-xs text-gray-500">{{ social.handle }}</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Work Experience Section -->
      <div id="work-experience" class="mt-16 border-t border-gray-700/30 py-16">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-2xl font-bold text-gray-100">Work Experience</h3>
          <p class="text-gray-400">
            I have been developing software in various industries since 2020/21. Here are a few of my most recent work experiences.
          </p>
        </div>

        <div class="grid gap-8">
          <div
            v-for="job in workExperience"
            :key="job.company"
            class="rounded-xl border border-gray-800/50 bg-gray-900/40 p-6 backdrop-blur-lg transition-all duration-300 hover:border-white/20"
          >
            <div class="flex flex-col gap-6 md:flex-row md:items-start">
              <!-- Company Logo/Image -->
              <div class="shrink-0">
                <div
                  class="flex h-16 w-16 items-center justify-center rounded-lg border border-gray-700/30 bg-gray-800/50"
                >
                  <img
                    :src="job.logo"
                    :alt="job.company"
                    class="h-12 w-12 object-contain"
                  />
                </div>
              </div>

              <!-- Job Details -->
              <div class="grow space-y-4">
                <div
                  class="flex flex-col justify-between gap-2 md:flex-row md:items-center"
                >
                  <div>
                    <h4 class="text-lg font-semibold text-gray-100">
                      {{ job.role }}
                    </h4>
                    <p class="text-red-400">{{ job.company }}</p>
                  </div>
                  <div class="text-sm text-gray-400">
                    {{ job.period }}
                  </div>
                </div>

                <p class="leading-relaxed text-gray-400">
                  {{ job.description }}
                </p>

                <!-- Tech Stack -->
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in job.technologies"
                    :key="tech"
                    class="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs text-gray-300"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- Website Link -->
                <a
                  v-if="job.website"
                  :href="job.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm text-red-400 transition-colors hover:text-emerald-300"
                >
                  <span>Visit Website</span>
                  <svg
                    class="ml-1 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Section -->
      <div id="projects" class="mt-16 border-t border-gray-700/30 py-16">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-2xl font-bold text-gray-100">
            Featured Projects
          </h3>
          <p class="text-gray-400">These are my personal and open-source projects that I have developed.</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="project in projects"
            :key="project.title"
            class="group overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:border-red-900/30"
          >
            <!-- Project Image -->
            <div class="relative h-48 overflow-hidden">
              <img
                :src="project.image"
                :alt="project.title"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              >
                <a v-if="project.link" :href="project.link" target="_blank">
                  <button
                    class="rounded-lg border border-white/20 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  >
                    View Project
                  </button>
                </a>
              </div>
            </div>

            <!-- Project Info -->
            <div class="space-y-4 p-6">
              <h4 class="text-lg font-semibold text-gray-100">
                {{ project.title }}
              </h4>
              <p class="line-clamp-2 text-sm text-gray-400">
                {{ project.description }}
              </p>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="rounded-full border border-zinc-700/50 bg-zinc-800/50 px-3 py-1 text-xs text-gray-300"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Section -->
      <div class="mt-16 border-t border-gray-700/30 py-16">
        <div class="mb-12 text-center">
          <h3 class="mb-4 text-2xl font-bold text-gray-100">Latest Articles</h3>
          <p class="text-gray-400">I also write technical articles in my leisure time. Here are a few...</p>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="article in articles"
            :key="article.title"
            :href="article.url"
            target="_blank"
            rel="noopener noreferrer"
            class="group overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/40 backdrop-blur-lg transition-all duration-300 hover:border-red-500/30"
          >
            <!-- Article Cover Image -->
            <div class="relative h-48">
              <img
                :src="article.cover"
                :alt="article.title"
                class="h-full w-full object-cover"
              />
            </div>

            <!-- Article Content -->
            <div class="space-y-4 p-6">
              <h4
                class="text-lg font-semibold text-gray-100 transition-colors group-hover:text-red-600"
              >
                {{ article.title }}
              </h4>
              <p class="line-clamp-2 text-sm text-gray-400">
                {{ article.excerpt }}
              </p>

              <!-- Article Metadata -->
              <div class="flex items-center justify-between text-sm">
                <div class="flex items-center gap-2 text-gray-400">
                  <svg
                    class="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{{ article.readTime }} min read</span>
                </div>
                <!-- <div class="flex items-center gap-2 text-gray-400">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  <span>{{ article.views }}</span>
                </div> -->
              </div>
            </div>
          </a>
        </div>

        <!-- View All Articles Button -->
        <div class="mt-12 text-center">
          <a
            href="https://kcee.hashnode.dev/"
            target="_blank"
            class="inline-flex items-center gap-2 rounded-xl border border-gray-700/50 bg-gray-800/50 px-6 py-3 text-gray-300 transition-all duration-300 hover:bg-gray-800/80 hover:text-red-600"
          >
            View All Articles
            <svg
              class="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import chowdeckImage from "./assets/chowdeck.webp";
import twitterImage from "./assets/twitter.jpg";
import ecxLogo from "./assets/ecx.svg";
import NatalBondLogo from "./assets/natalbond.svg";
import seedXLogo from "./assets/seedx.png";
import itmoLogo from "./assets/itmo.png";
import dietBloomLogo from "./assets/dietbloom.png";
import triviaStationLogo from "./assets/triviastation.png";
import buyItHero from "./assets/buyitHero.webp";
import streamlitLogo from "./assets/streamlit.jpg";
import kofyImagesLogo from "./assets/kofyimages.png";
import XLogo from './assets/x.png';
import LinkedInLogo from './assets/linkedin.png';
import GitHubLogo from './assets/github.png';
import GmailLogo from './assets/gmail.png';
import Resume from './assets/resume.pdf';

const downloadCV = () => {
  const link = document.createElement("a");
  link.href = Resume;
  link.download = "resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Reactive data
const activeNav = ref("Home");

const navItems = ["Projects", "Services", "Contact"];

// const stats = [
//   { value: '4', label: 'Programming Languages', color: 'text-white' },
//   { value: '6', label: 'Development Tools', color: 'text-gray-300' },
//   { value: '8', label: 'Years of Experience', color: 'text-gray-400' }
// ]

// const techStack = [
//   { name: 'Vue.js', icon: '⚡' },
//   { name: 'React', icon: '⚛️' },
//   { name: 'Node.js', icon: '🚀' },
//   { name: 'TypeScript', icon: '📘' },
//   { name: 'Python', icon: '🐍' },
//   { name: 'MongoDB', icon: '🍃' },
//   { name: 'PostgreSQL', icon: '🐘' },
//   { name: 'Docker', icon: '🐳' }
// ]

const projects = [
  {
    title: "SpeakToDocs",
    description:
      "Contributed to an open-source project (speaktodocs) to develop an interactive platfom for users toask questions about their uploaded documents through speech or text.",
    image: streamlitLogo,
    technologies: [
      "Python",
      "StreamLit",
      "Azure Speech Recognition and Generation Service",
      "Langchain",
      "RAG",
    ],
    link: "https://speak-to-docs.streamlit.app/",
  },
  {
    title: "Chowdeck Clone",
    description:
      "Built a clone of chowdeck, A modern e-commerce platform that connects users to restaurants. Added payment integrations with Paystack, and real-time order updates with Server-Side Events.",
    image: chowdeckImage,
    technologies: [
      "Vue.js",
      ".NET Core",
      "PostgreSQL",
      "Python",
      "Docker",
      "Azure",
    ],
    link: "https://github.com/KeneNwogu/chowdeck"
  },
  {
    title: "Tweeter!",
    description: "Social Media Application inspired by Twitter (now X)",
    image: twitterImage,
    technologies: ["Flask", "Python", "MongoDB"],
    link: "https://tweetercloneapp.netlify.app/",
  },
  {
    title: "BuyIt",
    description:
      "E-commerce Platform for a clothing store. Integrated payments with paystack.",
    image: buyItHero,
    technologies: ["Python", "Django", "MongoDB", "Vue.js"],
    link: "https://buyit-shop.netlify.app/",
  },
];

const workExperience = [
  {
    role: "Software Engineer (Contract)",
    company: "ITMO Unilag",
    period: "May 2025 - Aug 2025",
    description:
      "Developed an interactive AI-driven platform to provide a seamless process for graduates to kick-off the patent filing process at the Innovation and Technology Management Office (ITMO) in the University of Lagos (UNILAG).",
    technologies: [
      "Vue.js",
      "Axios",
      "OpenAI",
      "Express.js",
      "LangChain",
      "Docker",
    ],
    logo: itmoLogo,
    website: "https://innovation.unilag.edu.ng/",
  },
  {
    role: "Software Engineer",
    company: "NatalBond",
    period: "Sept 2022 - Present",
    description:
      "Developed an interactive community platform for over 1000 women to receive healthcare and antenatal advice from qualified medical professionals.",
    technologies: ["Nest.js", "MongDB", "Typescript"],
    logo: NatalBondLogo,
    website: "https://natalbond.com/",
  },
  {
    role: "Development Lead",
    company: "ECX",
    period: "Sept 2024 - Aug 2025",
    description:
      "Led the development team for Engineering Career Expo (ECX) to build core infrastructure for ECX's operations. Like batch email service and the ECX Merch website.",
    technologies: ["Next.js", "Django", "Express", "MongoDB", "PostgreSQL"],
    logo: ecxLogo,
    website: "https://www.linkedin.com/company/engineering-career-expo/",
  },
  {
    role: "Backend Engineer (Contract)",
    company: "SeedX",
    period: "Jun 2024 - Aug 2024",
    description:
      "Implemented core infrastructure for a real-estate firm, that offered services like periodic payments for real-estate assets.",
    technologies: ["Express", "MongoDB"],
    logo: seedXLogo,
    website: "https://seedx.africa/",
  },
  {
    role: "Backend Engineer",
    company: "DietBloom",
    period: "March 2023 - March 2025",
    description:
      "Collaborated with the data science team to integrate key features like calorie calculations and auto-generated meal plans to rapidly improve the food culture in Africa.",
    technologies: ["Nest.js", "MongoDB", "Python"],
    logo: dietBloomLogo,
    website: "https://dietbloom.com/",
  },
  {
    role: "Backend Developer",
    company: "KofyImages",
    period: "Nov 2021 - Dec 2023",
    description:
      "Developed Admin functionality for inventory and content management for an Arts and Images E-commerce application. Integrated Stripe for online payments.",
    technologies: ["Django", "Python", "Redis", "DigitalOcean", "Stripe"],
    logo: kofyImagesLogo,
    website: "https://kofyimages.com/",
  },
  {
    role: "Full-stack Developer (Contract)",
    company: "TriviaStation",
    period: "Jan 2020 - Jul 2020",
    description:
      "Integrated payment services (flutterwave and paystack) into an online-trivia platform. Developed core in-game features.",
    technologies: ["JQuery", "Python", "Flask", "MongoDB"],
    logo: triviaStationLogo,
  },
];

const socialLinks = [
  {
    name: "Twitter (Now X)",
    handle: "@lazy_kcee",
    url: "https://x.com/lazy_kcee",
    icon: XLogo,
  },
  {
    name: "LinkedIn",
    handle: "Kenechukwu Nwogu",
    url: "https://linkedin.com/in/kenenwogu",
    icon: LinkedInLogo,
  },
  {
    name: "GitHub",
    handle: "KeneNwogu",
    url: "https://github.com/KeneNwogu",
    icon: GitHubLogo,
  },
  {
    name: "Gmail",
    handle: "nwogujoseph1111@gmail.com",
    url: "mailto:nwogujoseph1111@gmail.com",
    icon: GmailLogo,
  },
];

const articles = [
  {
    title: "Enhance Your Express Applications with Zod Library",
    url: "https://kcee.hashnode.dev/enhance-your-express-applications-with-zod-library",
    platform: "Hashnode",
    platformIcon: "mdi:hashnode",
    cover:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1729282626855/9350ca84-00c9-4292-a0d4-9b77b485f851.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    excerpt:
      "Express.js is a great framework for building web applications. It offers flexibility, and ease of use whilst being very robust. In this article, we will use Zod to enhance the features of a web API built with Express.",
    readTime: 6,
    // views: 120
  },
  {
    title:
      "Implementing JSON Web Token Authentication with Django-REST Framework",
    url: "https://kcee.hashnode.dev/implementing-json-web-token-authentication-with-django-rest-framework",
    platform: "Hashnode",
    platformIcon: "mdi:hashnode",
    cover:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/p-l8OjDH9eE/upload/b3c36809af21dea3e89f16d79fd2acf4.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    excerpt:
      "Authentication is the process of identifying users accessing a web service. This article explains how to implement JSON Web Token (JWT) Authentication in a Django application.",
    readTime: 9,
    // views: 95
  },
  {
    title:
      "Passing Data from Child to Parent Components in Vue.js: A Comprehensive Guide",
    url: "https://kcee.hashnode.dev/passing-data-from-child-to-parent-components-in-vuejs-a-comprehensive-guide",
    platform: "Hashnode",
    platformIcon: "mdi:hashnode",
    cover:
      "https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/d_3EKbSg1tg/upload/685be60f707f15cd6fb4adaa7031d78f.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    excerpt:
      "Like most other front-end frameworks, components can be considered modular UI elements that provide their own data and logic. Vue allows data to be passed from parent components to child components as props.",
    readTime: 11,
    // views: 150
  },
];
</script>

<style scoped></style>
