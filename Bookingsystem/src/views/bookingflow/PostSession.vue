<script setup>
import { ref } from "vue";
import { db } from "../../firebase";
import { set, ref as dbRef } from "firebase/database";
import Back from '@/components/Back.vue';
const name = ref("");
const date = ref("");
const time = ref("");
const message = ref("");
const error = ref(""); 
//______________________________________________________________________
const minDate = ref(""); // Minimum date (yyyy-mm-dd)
const minTime = ref(""); // Minimum time (hh:mm)

// Set the minimum date and time when the component is created
const setMinDateTime = () => {
  const now = new Date();
  
  // date formatting = yyyy-mm-dd
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  minDate.value = `${year}-${month}-${day}`;
  
  // time formatting = hh:mm
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  minTime.value = `${hours}:${minutes}`;
};
setMinDateTime();
// ______________________________________________________________________
// async-await makes it so that it has to wait for push before being able to continue
async function postTime() {
    if (!date.value || !time.value || !name.value) {
      error.value = "Udfyld alle felter";
      return;
    }
//_______________________________________________________________________
// is the selectedDateTime before now?
    const selectedDateTime = new Date(`${date.value}T${time.value}`);
    const now = new Date();
    if (selectedDateTime < now) {
      error.value = "Denne tid er ikke tilgængelig";
      return;
    }
//_______________________________________________________________________
    // Adds the info to Firebase DB under the specific trainer's sessions
    const sessionKey = `${date.value}__${time.value}`;
    const trainerSessionsRef = dbRef(db, `trainerInfo/${name.value.toLowerCase()}/sessions/${sessionKey}`);
    await set(trainerSessionsRef, {
      date: date.value,
      time: time.value,
      name: name.value,
    });

    message.value = "Time posted!";
    date.value = "";
    time.value = "";
    error.value = ""; // Reset any previous error
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
    <p v-if="error" style="color: red;">{{ error }}</p>
    <p v-if="message" style="color: green;">{{ message }}</p>
  </div>
</template>