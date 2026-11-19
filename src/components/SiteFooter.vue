<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-about">
        <p class="footer-name">Venkatesh Lab</p>
        <p class="footer-text">
          Axon Growth &amp; Regeneration<br />
          CSIR-Centre for Cellular and Molecular Biology<br />
          R&amp;D Building, 4th floor, Hyderabad, India
        </p>
      </div>
      <nav class="footer-links" aria-label="Footer">
        <router-link to="/team">Team</router-link>
        <router-link to="/publications">Publications</router-link>
        <router-link to="/training">Training</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
      <nav class="footer-links" aria-label="Follow the lab">
        <a href="https://twitter.com/Ishwariya13" target="_blank" rel="noopener noreferrer">X / Twitter</a>
        <a href="https://www.instagram.com/venkateshlabccmb/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/in/ishwariya-venkatesh-abb21621/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </nav>
    </div>
    <p class="footer-legal">&copy; {{ year }} Venkatesh Lab, CSIR-CCMB</p>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.site-footer { background: var(--color-surface-muted); border-top: 1px solid var(--color-border); padding: 48px 28px 28px; }
.footer-inner { display: grid; gap: 32px 48px; grid-template-columns: minmax(0, 2fr) repeat(2, minmax(0, 1fr)); margin: 0 auto; max-width: var(--container-max); }
.footer-name { color: var(--color-ink); font-family: var(--font-heading); font-size: 1.3rem; font-weight: 600; margin: 0 0 8px; }
.footer-text { color: var(--color-muted); font-size: 0.9rem; line-height: 1.7; margin: 0; }
.footer-links { display: flex; flex-direction: column; gap: 8px; }
.footer-links a { color: var(--color-ink-soft); font-size: 0.92rem; text-decoration: none; width: fit-content; }
.footer-links a:hover { color: var(--color-accent); text-decoration: underline; }
.footer-legal { border-top: 1px solid var(--color-border); color: var(--color-muted); font-size: 0.82rem; margin: 36px auto 0; max-width: var(--container-max); padding-top: 18px; }
@media (max-width: 700px) { .footer-inner { grid-template-columns: 1fr 1fr; } .footer-about { grid-column: 1 / -1; } }
</style>
