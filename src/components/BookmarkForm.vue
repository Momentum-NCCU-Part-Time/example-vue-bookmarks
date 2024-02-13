<template>
  <section class="my-8 new-bookmark">
    <form @submit.prevent="addBookmark" class="container flex flex-col">
      <fieldset class="grid grid-cols-4 gap-6 rounded-md shadow-sm bg-gray-50">
        <div class="grid grid-cols-2 gap-2 col-span-full lg:col-span-3">
          <div class="col-span-full sm:col-span-3">
            <label for="bookmark-title" class="text-sm text-gray-400">New bookmark title</label>
            <input
              type="text"
              v-model.trim="newBookmarkTitle"
              class="w-full p-1 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300"
            />
          </div>
          <div class="col-span-full sm:col-span-3">
            <button
              type="submit"
              :disabled="!newBookmarkTitle"
              class="px-8 py-3 font-semibold border rounded border-rose-300 text-slate-600"
            >
              Add bookmark
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { createBookmark } from '@/requests'
const newBookmarkTitle = ref('')

const emit = defineEmits(['bookmarkCreated'])

const addBookmark = () => {
  if (!newBookmarkTitle.value) return
  createBookmark({ title: newBookmarkTitle.value }).then((createdBookmark) => {
    emit('bookmarkCreated', createdBookmark)
    resetForm()
  })
}

const resetForm = () => {
  newBookmarkTitle.value = ''
}
</script>

<style></style>
