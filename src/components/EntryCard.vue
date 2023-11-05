<script lang="ts" setup>
import DateDisplay from "./DateDisplay.vue";
import UseEmojis from "@/composables/UseEmojis";
import type Entry from "@/types/Entry";
const { findEmoji } = UseEmojis();
const props = defineProps<{
  entry: Entry;
}>();
const emojiVal = props.entry.emoji === null ? "happy" : props.entry.emoji;
</script>
<template>
  <div class="entry-card">
    <div class="entry-card-body">
      <component width="75" :is="findEmoji(emojiVal)"></component>
      <div class="entry-text">{{ entry.text }}</div>
    </div>
    <div class="entry-footer">
      <DateDisplay :date="entry.createdAt" class="mr-2" />
      |
      <span class="ml-2">{{ entry.username }}</span>
    </div>
  </div>
</template>
