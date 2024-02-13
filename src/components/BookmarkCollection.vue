<template>
  <ul class="mb-6 bookmark-bookmark" v-if="collection.length > 0">
    <Bookmark
      v-for="bookmark in collection"
      :key="bookmark.id"
      :bookmark="bookmark"
      @bookmarkUpdated="($event) => addUpdatedBookmarkToCollection($event)"
      @bookmarkDeleted="($event) => removeDeletedBookmarkFromCollection($event)"
    />
  </ul>
  <div v-else>No bookmarks to display</div>
  <BookmarkForm @bookmarkCreated="addBookmarkToCollection" />
</template>

<script setup>
import { ref } from 'vue'
import { getBookmarks } from '@/requests'
import BookmarkForm from './BookmarkForm.vue'
import Bookmark from './Bookmark.vue'

const collection = ref([])
getBookmarks().then((data) => {
  collection.value = data
})

const addUpdatedBookmarkToCollection = (updatedBookmark) => {
  collection.value = collection.value.map((bookmark) => {
    if (bookmark.id === updatedBookmark.id) {
      return updatedBookmark
    }
    return bookmark
  })
}

const addBookmarkToCollection = (bookmark) => {
  collection.value = [...collection.value, bookmark]
}

const removeDeletedBookmarkFromCollection = (bookmarkId) => {
  collection.value = collection.value.filter((bookmark) => bookmark.id !== bookmarkId)
}
</script>

<style></style>
