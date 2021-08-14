<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "@/components/Header.vue";
export default defineComponent({
  name: "App",
  components: { Header },
});
</script>

<style>
:root {
  --color-background-hue: 255;
  --color-background-dark: hsl(var(--color-background-hue), 100%, 4%);
  --color-background-light: hsl(var(--color-background-hue), 100%, 12%);
  --color-input-background: midnightblue;
  --color-text-light: hsl(50, 100%, 70%);

  --color-btn-light: hsl(210, 100%, 85%);
  --color-btn-dark: hsl(210, 100%, 70%);
}

:root {
  color: var(--color-text-light);
}

body {
  background: linear-gradient(
    to right,
    var(--color-background-dark),
    var(--color-background-light)
  );
  font-family: "Sawarabi Gothic", sans-serif;
  height: 100%;
}

main {
  max-height: 100%;
  min-height: 80vh;
  margin: 2rem 5rem;
}

main > * {
  margin: 2rem 0;
}

.star {
  position: absolute;
  width: 1px;
  height: 1px;
  background-color: white;
  z-index: -1;
}

p {
  font-size: 1.2rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding: 0;
}

.main-title {
  text-align: center;
}

.login-title {
  margin-left: 5rem;
}

/* Mobile Device re-sizing */
@media screen and (max-width: 380px) {
  header {
    margin: 0.5rem;
  }

  .title-container,
  .nav-links,
  footer {
    margin: 0 auto;
    text-align: center;
  }

  main {
    margin: 1rem;
  }

  .book-cover-large {
    --book-cover-width: 200px;
  }

  .book-grid {
    grid-template-columns: auto;
  }
}
</style>
