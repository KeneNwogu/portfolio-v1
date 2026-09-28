<script setup>
// Terminal-style visual for backend projects (plan §11) — pure HTML/CSS, no JS cost.
// Content reflects the real Chowdeck Clone stack and features only (Rule 5).
</script>

<template>
  <div class="overflow-hidden rounded-lg border border-line bg-[#0d0d10] shadow-2xl shadow-black/40">
    <!-- title bar -->
    <div class="flex items-center gap-2 border-b border-line bg-surface px-4 py-3">
      <span class="h-2.5 w-2.5 rounded-full bg-[#3a3a42]" aria-hidden="true" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#3a3a42]" aria-hidden="true" />
      <span class="h-2.5 w-2.5 rounded-full bg-[#3a3a42]" aria-hidden="true" />
      <span class="ml-3 font-mono text-[11px] text-faint">chowdeck — zsh</span>
    </div>

    <pre
      class="overflow-x-auto p-4 font-mono text-[11.5px] leading-relaxed text-muted sm:px-5 sm:text-xs"
      role="img"
      aria-label="Terminal session showing the Chowdeck Clone stack: Docker services, an order API call, and real-time Server-Sent Events for order status"
    ><code><span class="text-ink">$ docker compose up -d</span>
<span class="text-faint">[+] Running 3/3</span>
 <span class="text-emerald-400">✔</span> api      <span class="text-faint">.NET Core order service</span>
 <span class="text-emerald-400">✔</span> db       <span class="text-faint">PostgreSQL</span>
 <span class="text-emerald-400">✔</span> client   <span class="text-faint">Vue.js storefront</span>

<span class="text-ink">$ curl -X POST localhost:5000/api/orders</span>
{ <span class="text-accent">"orderId"</span>: <span class="text-emerald-300">"ord_9f2k"</span>, <span class="text-accent">"status"</span>: <span class="text-emerald-300">"pending_payment"</span> }

<span class="text-ink">$ curl -N localhost:5000/api/orders/ord_9f2k/stream</span>  <span class="text-faint"># SSE</span>
<span class="text-faint">event:</span> payment_verified   <span class="text-faint">data:</span> { <span class="text-accent">"provider"</span>: <span class="text-emerald-300">"paystack"</span> }
<span class="text-faint">event:</span> order_confirmed    <span class="text-faint">data:</span> { <span class="text-accent">"eta"</span>: <span class="text-emerald-300">"35 min"</span> }
<span class="text-faint">event:</span> rider_assigned     <span class="text-faint">data:</span> { <span class="text-accent">"status"</span>: <span class="text-emerald-300">"en route"</span> }<span class="animate-pulse text-ink">▊</span></code></pre>
  </div>
</template>
