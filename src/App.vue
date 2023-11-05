<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import { reactive } from "vue";
import type User from "./types/User";
import type Entry from "./types/Entry";

const user: User = reactive({
  id: 1,
  name: "mandril888",
  settings: [],
});
console.log(user.id);

const journalEntries: Entry[] = reactive([
  {
    id: 1,
    text: "Today I enjoyed walking the dog in the park.",
    emoji: "happy",
    createdAt: new Date(),
    userId: 1,
    username: "danielkelly_io",
  },
  {
    id: 2,
    text: "Clean the floor.",
    emoji: "crying",
    createdAt: new Date(),
    userId: 2,
    username: "madboy_12",
  },
]);

const handleCreateEntry = (entry: Entry) => {
  journalEntries.push(entry);
};
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor @@create="handleCreateEntry" />
    <ul>
      <li v-for="entry in journalEntries" :key="entry.id">
        <EntryCard :entry="entry" />
      </li>
    </ul>
  </main>
</template>
