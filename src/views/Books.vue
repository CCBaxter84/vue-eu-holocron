<template>
  <main>
    <h1 class="main-title">Search Books</h1>
    <form action="/books" method="GET">
      <section class="label-n-input">
        <label>Title</label>
        <input
          autofocus
          type="text"
          class="text-box"
          name="title"
          value="{{"
          searchOptions.title
          }}
        />
      </section>
      <section class="split-inputs">
        <section class="label-n-input">
          <label>Keywords</label>
          <input
            type="text"
            class="text-box"
            name="keywords"
            value="{{ searchOptions.keywords }}"
          />
        </section>
        <!-- {{> selectBookEra eras=eras book=book searchOptions=searchOptions}} -->
      </section>
      <section class="split-inputs">
        <section class="label-n-input">
          <label>Published After</label>
          <input
            type="date"
            class="text-box"
            name="publishedAfter"
            value="{{ searchOptions.publishedAfter }}"
          />
        </section>
        <section class="label-n-input">
          <label>Published Before</label>
          <input
            type="date"
            class="text-box"
            name="publishedBefore"
            value="{{ searchOptions.publishedBefore }}"
          />
        </section>
      </section>
      <!-- {{> submitSearch }} -->
    </form>
    <br />
    <BookGrid></BookGrid>
    <!-- {{> bookGrid books=books }} -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BookGrid from "/components/BookGrid.vue";
export default defineComponent({
  name: "App",
  components: { BookGrid },
});
</script>

<style></style>
