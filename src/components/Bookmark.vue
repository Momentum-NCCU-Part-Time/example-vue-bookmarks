<template>
  <li class="mb-4">
    <div
      class="flex max-w-2xl gap-6 overflow-hidden text-gray-800 divide-x divide-gray-300 rounded-lg shadow-md bookmark-item-card bg-gray-50"
    >
      <div class="flex flex-col flex-1 p-2 border-l-8 border-slate-600 bookmark-text">
        <div v-if="editing">
          <input
            type="text"
            v-model="newBookmarkTitle"
            class="w-full p-2 text-xl text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:border-rose-200 focus:ring-1 focus:ring-rose-200"
          />

          <div
            class="flex items-center px-4 text-xs text-gray-600 uppercase border-gray-300 button-group"
          ></div>
        </div>
        <div v-else>
          <div class="text-2xl bookmark-title">{{ bookmark.title }}</div>
          <div class="text-xs text-gray-600 bookmark-body">{{ bookmark.body }}</div>
          <FormattedDate :date="bookmark.createdAt" class="mt-2"/>
        </div>

      </div>
      <div
        v-if="confirmDelete"
        class="flex items-center px-4 text-xs text-gray-600 uppercase border-gray-300 button-group"
      >
        <button @click="removeBookmark(bookmark.id)" class="px-4 font-semibold uppercase text-rose-600">
          Confirm delete
        </button>
        <button @click="confirmDelete = false" class="px-4 uppercase text-zinc-600">Cancel</button>
      </div>
      <div
        v-else-if="editing"
        class="flex items-center px-4 text-xs text-gray-600 uppercase border-gray-300 button-group"
      >
        <button
          @click="() => saveBookmark(bookmark.id)"
          class="px-4 font-semibold uppercase text-emerald-500"
        >
          Save
        </button>
        <button @click="() => (editing = false)" class="px-4 uppercase text-zinc-600">
          Cancel
        </button>
      </div>
      <div v-else class="flex items-center px-4 text-xs border-gray-300 button-group">
        <button @click="() => (editing = true)" class="px-4 text-gray-600 uppercase">Edit</button>
        <button @click="initiateDelete" class="px-4 uppercase text-rose-600">Delete</button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'
import { updateBookmark, deleteBookmark } from '@/requests'
import FormattedDate from './BaseRelativeDate.vue'
const props = defineProps({
  bookmark: Object
})

const emit = defineEmits(['bookmarkUpdated', 'bookmarkDeleted'])

const editing = ref(false)
const newBookmarkTitle = ref(props.bookmark.title)
const confirmDelete = ref(false)

const saveBookmark = (bookmarkId) => {
  console.log('saveBookmark', bookmarkId)
  if (!newBookmarkTitle.value) return
  updateBookmark({ id: bookmarkId, title: newBookmarkTitle.value }).then(
    (res) => {
      if (res.error) {
        console.error(res.error)
      } else {
        emit('bookmarkUpdated', res)
        editing.value = false
      }
      
    }
  )
}

const initiateDelete = () => {
  confirmDelete.value = true
}

const removeBookmark = (bookmarkId) => {
  // TODO: add confirmation dialog
  deleteBookmark(bookmarkId).then(() => {
    emit('bookmarkDeleted', bookmarkId)
  })
}
</script>

<style></style>
