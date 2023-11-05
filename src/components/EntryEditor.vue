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
const emit = defineEmits<{
  (event: "@create", entry: Entry): void;
}>();

// methods
const handleTextInput = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  if (textarea.value.length <= maxCharsTextArea) text.value = textarea.value;
  else text.value = textarea.value = textarea.value.slice(0, maxCharsTextArea);
};
const handleSubmitForm = () => {
  emit("@create", {
    text: text.value,
    emoji: emoji.value,
    createdAt: new Date(),
    userId: 3,
    id: +Math.random().toFixed(2) * 100,
    username: "mandril888",
  });
  text.value = "";
  emoji.value = null;
};
</script>
<template>
  <form class="entry-form" @submit.prevent="handleSubmitForm">
    <textarea
      :value="text"
      @keyup="handleTextInput"
      placeholder="New Journal Entry"
    ></textarea>
    <EmojiField v-model="emoji" />
    <div class="entry-form-footer">
      <span>{{ chartCount }} / {{ maxCharsTextArea }}</span>
      <button :disabled="chartCount < 3" :class="{ disabled: chartCount < 3 }">
        Remember <ArrowCircleRight width="20" />
      </button>
    </div>
  </form>
</template>
<style scoped>
.disabled {
  background-color: grey;
}
</style>
