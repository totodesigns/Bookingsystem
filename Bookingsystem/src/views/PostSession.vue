<script setup>
import { ref } from "vue";
import { db } from "../firebase";
import { set, ref as dbRef } from "firebase/database";
import Back from '@/components/Back.vue';
const name = ref("");
const date = ref("");
const time = ref("");
const message = ref("");
const error = ref(""); 


// async-await makes it so that it has to wait for push before being able to continue
async function postTime() {
  try {
    if (!date.value || !time.value || !name.value) {
      error.value = "Please fill all input fields";
      return;
    }

    // Adds the info to Firebase DB under the specific trainer's sessions
    const sessionKey = `${date.value}__${time.value}`;
    const trainerSessionsRef = dbRef(db, `trainerInfo/${name.value.toLowerCase()}/sessions/${sessionKey}`);
    await set(trainerSessionsRef, {
      date: date.value,
      time: time.value,
      name: name.value,
    });

    // Reset fields and show success message
    message.value = "Time posted!";
    date.value = "";
    time.value = "";
    error.value = ""; // Reset any previous error

  } catch (err) {
    console.error("Error posting time:", err);
    error.value = "Something went wrong, please try again.";
  }
}

</script>

<template>
  <Back />
  <div>
    <h2>Opret tider</h2>
    <form @submit.prevent="postTime">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="time" type="time" required />
      <input v-model="date" type="date" required />
      <button type="submit">Opret tid</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>