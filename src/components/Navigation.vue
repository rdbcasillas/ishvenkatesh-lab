<template>
  <div>
    <b-navbar toggleable="lg" variant="info" sticky>
        <b-navbar-brand to="/" class="brand-lockup">
          <b-img
            fluid
            width="42px"
            :src="require('../assets/ishlab-icon.png')"
            class="d-inline-block align-top brand-mark"
            alt="Venkatesh Lab logo"
          />
          <span class="brand-text">
            <span class="brand-title">Venkatesh Lab</span>
            <span class="brand-subtitle">Axon Growth &amp; Regeneration &middot; CSIR-CCMB</span>
          </span>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item to="/team" exact-active-class="active">Team</b-nav-item>
            <b-nav-item to="/publications" exact-active-class="active"
              >Publications</b-nav-item
            >
            <b-nav-item to="/funding" exact-active-class="active"
              >Funding</b-nav-item
            >
            <b-nav-item to="/awards" exact-active-class="active"
              >Awards</b-nav-item
            >
            <b-nav-item to="/social-media" exact-active-class="active"
              >Social Media</b-nav-item
            >
            <b-nav-item to="/lab-retreat" exact-active-class="active"
              >Lab Retreat</b-nav-item
            >
            <b-nav-item
              target="_blank"
              href="https://docs.google.com/document/d/1MidvYKM1vxX2XK6MjtpegF370Rwq50Kc72tBSYR9-Ko/edit?usp=sharing"
            >
              Resources
              <b-icon scale="0.55" icon="box-arrow-up-right"></b-icon>
            </b-nav-item>
            <b-nav-item to="/contact" exact-active-class="active" class="nav-cta"
              >Contact</b-nav-item
            >
            <li class="nav-item theme-toggle-item">
              <button
                type="button"
                class="theme-toggle"
                :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
                @click="toggleTheme"
              >
                <svg
                  v-if="isDark"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
                <svg
                  v-else
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </button>
            </li>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
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
nav.bg-info {
  background-color: var(--color-surface) !important;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-ink) !important;
  font-family: var(--font-body) !important;
  left: 0 !important;
  padding: 10px 28px;
  position: fixed !important;
  right: 0 !important;
  top: 0 !important;
  width: 100% !important;
  z-index: 1030 !important;
}

.brand-lockup {
  align-items: center;
  display: flex !important;
  gap: 12px;
  margin-right: 32px;
}

.brand-mark {
  flex: 0 0 auto;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-title {
  color: var(--color-ink);
  font-family: var(--font-heading);
  font-size: 21px;
  font-weight: 600;
  white-space: nowrap;
}

.brand-subtitle {
  color: var(--color-muted);
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.nav-item {
  margin: 0 !important;
  white-space: nowrap;
}

a.nav-link {
  color: var(--color-ink-soft) !important;
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.01em;
  padding: 8px 14px !important;
  position: relative;
  transition: color 0.15s ease;
}

a.nav-link:hover {
  color: var(--color-accent) !important;
}

a.nav-link.active {
  color: var(--color-accent) !important;
  font-weight: 700;
}

a.nav-link.active::after {
  background: var(--color-accent);
  border-radius: 2px;
  bottom: 0;
  content: "";
  height: 2px;
  left: 14px;
  position: absolute;
  right: 14px;
}

.nav-cta .nav-link {
  background: var(--color-accent);
  border-radius: var(--radius-sm);
  color: var(--color-accent-contrast) !important;
  margin-left: 6px;
  padding: 8px 18px !important;
}

.nav-cta .nav-link:hover {
  background: var(--color-accent-dark);
  color: var(--color-accent-contrast) !important;
}

.nav-cta .nav-link.active {
  color: var(--color-accent-contrast) !important;
}

.theme-toggle-item {
  align-items: center;
  border-left: 1px solid var(--color-border);
  display: flex;
  list-style: none;
  margin-left: 20px;
  padding-left: 20px;
}

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
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;
  width: 34px;
}

.theme-toggle:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

@media (max-width: 1200px) {
  nav.bg-info {
    padding: 10px 18px;
  }

  a.nav-link {
    font-size: 14px;
    padding: 8px 10px !important;
  }
}

@media (max-width: 991px) {
  .nav-item {
    margin: 2px 0 !important;
  }

  .nav-cta {
    margin-top: 6px;
  }

  .nav-cta .nav-link {
    display: inline-block;
    margin-left: 0;
  }

  .theme-toggle-item {
    border-left: 0;
    border-top: 1px solid var(--color-border);
    justify-content: flex-start;
    margin-left: 0;
    margin-top: 14px;
    padding-left: 0;
    padding-top: 14px;
  }
}

@media (max-width: 600px) {
  .brand-subtitle {
    display: none;
  }

  .brand-title {
    font-size: 17px;
  }
}
</style>
