<template>
  <main>
    <h1 class="main-title">Search Books</h1>
    <BookForm :books="books" @search="search" />
    <br />
    <BookGrid></BookGrid>
    <!-- {{> bookGrid books=books }} -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookForm from "@/components/BookForm.vue";
import BookGrid from "@/components/BookGrid.vue";

export default defineComponent({
  name: "App",
  components: { BookForm, BookGrid },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async search(): Promise<void> {
      // Ajax call to backend based off search parameters

      // Update books with result of Ajax call
      this.books = [];

      // Add try catch block for error handling
    },
  },
});
</script>

<style></style>
