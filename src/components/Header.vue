<template>
  <header>
    <nav class="header-nav">
      <article class="title-container">
        <h2>
          <router-link to="/" class="title"
            >Star Wars Novels Holocron</router-link
          >
        </h2>
      </article>
      <article class="nav-links">
        <router-link to="/books">Books</router-link>
        <router-link to="/authors">Authors</router-link>
        <!-- will need to add conditional rendering based on logged in status-->
        <router-link to="/books/new">Add Books</router-link>
        <!-- will need to add conditional rendering based on logged in status-->
        <router-link to="/authors/new">Add Author</router-link>
        <!-- will need to add conditional rendering based on logged in status-->
      </article>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
});
</script>

<style scoped>
header {
  margin: 0 2rem;
}

.header-nav {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}

.nav-links > *,
.title {
  color: var(--color-text-light);
  padding: 1rem;
  text-decoration: none;
}

/* Mobile device re-sizing */
@media screen and (max-width: 380px) {
  .nav-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>
