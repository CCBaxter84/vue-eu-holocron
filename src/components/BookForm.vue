<template>
  <form>
    <section class="label-n-input">
      <label>Title</label>
      <input
        autofocus
        type="text"
        class="text-box"
        name="title"
        v-model="searchOptions.title"
      />
    </section>
    <section class="split-inputs">
      <section class="label-n-input">
        <label>Keywords</label>
        <input
          type="text"
          class="text-box"
          name="keywords"
          v-model="searchOptions.keywords"
        />
      </section>
      <!-- Add dropdown for selecting era -->
      <!-- {{> selectBookEra eras=eras book=book searchOptions=searchOptions}} -->
    </section>
    <section class="split-inputs">
      <section class="label-n-input">
        <label>Published After</label>
        <input
          type="date"
          class="text-box"
          name="publishedAfter"
          v-model="searchOptions.publishedAfter"
        />
      </section>
      <section class="label-n-input">
        <label>Published Before</label>
        <input
          type="date"
          class="text-box"
          name="publishedBefore"
          v-model="searchOptions.publishedBefore"
        />
      </section>
    </section>
    <!-- Add submit search button -->
    <!-- {{> submitSearch }} -->
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookForm",
  data() {
    return {
      searchOptions: {
        title: "",
        keywords: "",
        publishedAfter: null,
        publishedBefore: null,
      },
    };
  },
});
</script>

<style scoped>
form {
  margin-left: 5rem;
  width: 95%;
}

.split-inputs {
  display: flex;
}

.split-inputs > * {
  width: 48%;
}

label {
  font-size: 1.25rem;
}

.label-n-input {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  margin-left: 2rem;
  flex-grow: 1;
  flex-basis: 0;
}

.label-n-input-no-grow {
  flex-grow: 0;
}

input,
.select-box {
  margin-top: 0.25rem;
}

.text-box,
.select-box,
textarea,
input {
  background-color: var(--color-input-background);
  border: 1px solid white;
  border-radius: 0.25rem;
  color: white;
  font-family: "Sawarabi Gothic", sans-serif;
  font-size: large;
  height: 2rem;
}

/* Mobile device re-sizing */
@media screen and (max-width: 380px) {
  .split-inputs {
    align-items: center;
    flex-direction: column;
    margin: 0;
  }

  .split-inputs > * {
    width: 100%;
  }

  .label-n-input {
    margin: 0.5rem 0;
  }

  textarea {
    height: 15rem;
  }
}
</style>
