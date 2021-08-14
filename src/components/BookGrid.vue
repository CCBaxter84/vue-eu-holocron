<template>
  <section class="book-grid" :class="hasLargeStyling">
    <router-link v-for="book in books" :key="book.id" :to="'books/' + book.id">
      <img :src="book.coverImageUrl" alt="" class="book-cover" />
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookGrid",
  props: {
    books: {
      type: Array,
      default: () => [],
    },
    isLargeGrid: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    hasLargeStyling(): string {
      return this.isLargeGrid ? "book-grid-large" : "";
    },
  },
});
</script>

<style scoped>
.book-grid {
  display: grid;
  justify-content: center;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, var(--book-cover-width));
}

.book-grid-large {
  grid-template-columns: repeat(auto-fill, var(--book-cover-width-large));
}
</style>
