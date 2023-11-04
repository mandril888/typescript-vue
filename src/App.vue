<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
import EntryEditor from "./components/EntryEditor.vue";
import EntryCard from "@/components/EntryCard.vue";
import type User from "./types/User";
import { reactive } from "vue";

const user: User = reactive({
  id: 1,
  name: "mandril888",
  settings: [],
});

console.log(user.id);
</script>

<template>
  <main class="container m-auto p-10">
    <TheHeader />
    <EntryEditor />
    <ul>
      <li>
        <EntryCard />
      </li>
    </ul>
  </main>
</template>
