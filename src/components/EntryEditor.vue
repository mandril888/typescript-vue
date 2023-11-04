<script lang="ts" setup>
import EmojiField from "@/components/EmojiField.vue";
import ArrowCircleRight from "@/assets/icons/arrow-circle-right.svg";
import Emoji from "@/types/Emoji";
import Entry from "@/types/Entry";
import { ref, computed } from "vue";

// data
const maxCharsTextArea = 280;
const text = ref("");
const emoji = ref<Emoji | null>(null);
const chartCount = computed(() => text.value.length);

// events
defineEmits<{
  (event: "@create", entry: Entry): void;
}>();

// methods
const handleTextInput = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxCharsTextArea) text.value = textarea.value;
  else text.value = textarea.value = textarea.value.slice(0, maxCharsTextArea);
};
</script>
<template>
  <form
    class="entry-form"
    @submit.prevent="
      $emit('@create', {
        text,
        emoji,
        createdAt: new Date(),
        userId: 1,
        id: +Math.random().toFixed(2) * 100,
      })
    "
  >
    <textarea
      :value="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry for danielkelly_io"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ chartCount }} / {{ maxCharsTextArea }}</span>
      <button>Remember <ArrowCircleRight width="20" /></button>
    </div>
  </form>
</template>
