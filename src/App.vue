<script setup>
import BookmarkCollection from './components/BookmarkCollection.vue';
import BaseLayout from './layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <template #header>
      <h1 class="m-2 font-serif text-3xl font-bold">⭐ 🦄 🔖 Bookmarks 🔖 🦄 ⭐</h1>
    </template>
    <template #default>
      <BookmarkCollection />
    </template>
    <template #footer>
      <p>Made with ❤️ at Momentum 👩‍💻</p>
    </template>
  </BaseLayout>
</template>

<style scoped></style>
