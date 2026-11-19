<template>
  <header>
    <b-navbar toggleable="lg" class="site-nav" aria-label="Main">
      <b-navbar-brand to="/" class="brand-lockup">
        <b-img
          fluid
          width="40px"
          :src="require('../assets/ishlab-icon.png')"
          class="brand-mark"
          alt=""
        />
        <span class="brand-text">
          <span class="brand-title">Venkatesh Lab</span>
          <span class="brand-subtitle">Axon Growth &amp; Regeneration &middot; CSIR-CCMB</span>
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" aria-label="Open navigation menu">
        <span class="mobile-menu-icon" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto nav-links">
          <b-nav-item to="/team" exact-active-class="active">Team</b-nav-item>
          <b-nav-item to="/publications" exact-active-class="active">Publications</b-nav-item>
          <b-nav-item to="/explorables" active-class="active">Explorables</b-nav-item>
          <b-nav-item to="/training" exact-active-class="active">Training</b-nav-item>
          <b-nav-item to="/social-media" exact-active-class="active">Social</b-nav-item>
          <b-nav-item-dropdown text="More" right class="more-menu">
            <b-dropdown-item to="/funding">Funding</b-dropdown-item>
            <b-dropdown-item to="/awards">Awards</b-dropdown-item>
            <b-dropdown-item to="/lab-retreat">Lab Retreat</b-dropdown-item>
            <b-dropdown-item
              href="https://docs.google.com/document/d/1MidvYKM1vxX2XK6MjtpegF370Rwq50Kc72tBSYR9-Ko/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resources <b-icon scale="0.7" icon="box-arrow-up-right"></b-icon>
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item to="/contact" exact-active-class="active" class="nav-cta">Contact</b-nav-item>
          <li class="nav-item theme-toggle-item">
            <button
              type="button"
              class="theme-toggle"
              :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
              @click="toggleTheme"
            >
              <svg v-if="isDark" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
              </svg>
              <svg v-else width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
const THEME_KEY = "theme";

export default {
  data() {
    return {
      isDark: false,
      mediaQuery: null,
      mediaListener: null,
    };
  },
  mounted() {
    this.initTheme();
  },
  beforeDestroy() {
    if (this.mediaQuery && this.mediaListener) {
      if (this.mediaQuery.removeEventListener) {
        this.mediaQuery.removeEventListener("change", this.mediaListener);
      } else if (this.mediaQuery.removeListener) {
        this.mediaQuery.removeListener(this.mediaListener);
      }
    }
  },
  methods: {
    initTheme() {
      let saved = null;
      try {
        saved = localStorage.getItem(THEME_KEY);
      } catch (e) {
        saved = null;
      }

      if (saved === "dark") {
        this.isDark = true;
        document.documentElement.setAttribute("data-theme", "dark");
      } else if (saved === "light") {
        this.isDark = false;
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        const systemPrefersDark =
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.isDark = systemPrefersDark;
        document.documentElement.setAttribute(
          "data-theme",
          systemPrefersDark ? "dark" : "light"
        );
      }

      if (window.matchMedia) {
        this.mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        this.mediaListener = (e) => {
          let hasSaved = false;
          try {
            hasSaved = Boolean(localStorage.getItem(THEME_KEY));
          } catch (err) {
            hasSaved = false;
          }
          if (!hasSaved) {
            this.isDark = e.matches;
            document.documentElement.setAttribute(
              "data-theme",
              e.matches ? "dark" : "light"
            );
          }
        };
        if (this.mediaQuery.addEventListener) {
          this.mediaQuery.addEventListener("change", this.mediaListener);
        } else if (this.mediaQuery.addListener) {
          this.mediaQuery.addListener(this.mediaListener);
        }
      }
    },
    toggleTheme() {
      this.isDark = !this.isDark;
      const theme = this.isDark ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {
        /* localStorage unavailable, preference just won't persist */
      }
    },
  },
};
</script>
<style scoped>
.site-nav {
  background-color: color-mix(in srgb, var(--color-bg) 92%, transparent);
  -webkit-backdrop-filter: saturate(160%) blur(10px);
  backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid var(--color-border);
  font-family: var(--font-body);
  left: 0;
  min-height: var(--nav-h);
  padding: 0 clamp(18px, 3vw, 40px);
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1030;
}

.brand-lockup { align-items: center; display: flex !important; gap: 12px; margin-right: 24px; padding: 0; }
.brand-mark { flex: 0 0 auto; }
.brand-text { display: flex; flex-direction: column; line-height: 1.2; }
.brand-title { color: var(--color-ink); font-family: var(--font-heading); font-size: 1.3rem; font-weight: 600; letter-spacing: -0.01em; white-space: nowrap; }
.brand-subtitle { color: var(--color-muted); font-size: 0.72rem; font-weight: 500; white-space: nowrap; }

.nav-item { margin: 0 !important; white-space: nowrap; }

a.nav-link, .more-menu >>> a.nav-link {
  color: var(--color-ink-soft) !important;
  font-size: 0.92rem;
  font-weight: 500;
  padding: 8px 13px !important;
  position: relative;
  transition: color 0.15s ease;
}
a.nav-link:hover, .more-menu >>> a.nav-link:hover { color: var(--color-ink) !important; }
a.nav-link.active { color: var(--color-ink) !important; font-weight: 600; }
a.nav-link.active::after {
  background: var(--color-accent);
  bottom: 2px;
  content: "";
  height: 2px;
  left: 13px;
  position: absolute;
  right: 13px;
}

.nav-cta .nav-link {
  background: var(--color-accent);
  border-radius: var(--radius-sm);
  color: var(--color-accent-contrast) !important;
  font-weight: 600;
  margin-left: 12px;
  padding: 8px 18px !important;
}
.nav-cta .nav-link:hover { background: var(--color-accent-dark); color: var(--color-accent-contrast) !important; }
.nav-cta .nav-link.active { color: var(--color-accent-contrast) !important; }
.nav-cta .nav-link.active::after { display: none; }

.more-menu >>> .dropdown-menu {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  margin-top: 8px;
  min-width: 190px;
  padding: 6px;
}
.more-menu >>> .dropdown-item { border-radius: var(--radius-sm); color: var(--color-ink-soft); font-size: 0.92rem; padding: 8px 12px; }
.more-menu >>> .dropdown-item:hover,
.more-menu >>> .dropdown-item:focus,
.more-menu >>> .dropdown-item.active { background: var(--color-accent-light); color: var(--color-accent-dark); }

.theme-toggle-item { align-items: center; border-left: 1px solid var(--color-border); display: flex; list-style: none; margin-left: 24px; padding-left: 24px; }
.theme-toggle {
  align-items: center;
  background: transparent;
  border: 1px solid var(--color-border-strong);
  border-radius: 999px;
  color: var(--color-ink-soft);
  cursor: pointer;
  display: flex;
  height: 34px;
  justify-content: center;
  padding: 0;
  transition: color 0.15s ease, border-color 0.15s ease;
  width: 34px;
}
.theme-toggle:hover { border-color: var(--color-accent); color: var(--color-accent); }

@media (max-width: 991px) {
  .site-nav { padding-bottom: 8px; padding-top: 8px; }
  .navbar-toggler {
    align-items: center;
    background: transparent;
    border: 1px solid var(--color-border-strong);
    border-radius: var(--radius-sm);
    display: flex;
    height: 40px;
    justify-content: center;
    padding: 8px;
    width: 44px;
  }
  .mobile-menu-icon { display: flex; flex-direction: column; gap: 5px; width: 20px; }
  .mobile-menu-icon span { background: var(--color-ink); border-radius: 2px; display: block; height: 2px; width: 100%; }
  .nav-links { padding: 10px 0 6px; }
  a.nav-link.active::after { display: none; }
  .nav-cta .nav-link { display: inline-block; margin: 6px 0 0; }
  .theme-toggle-item { border-left: 0; border-top: 1px solid var(--color-border); margin: 12px 0 0; padding-left: 0; padding-top: 12px; }
  .more-menu >>> .dropdown-menu { border: 0; box-shadow: none; margin: 0; padding-left: 12px; }
}

@media (max-width: 600px) {
  .brand-subtitle { display: none; }
  .brand-title { font-size: 1.15rem; }
}
</style>
