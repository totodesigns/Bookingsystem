<script setup>
import { ref } from "vue";
import { db } from "../firebase"; // Realtime databse setup
import { push, ref as dbRef } from "firebase/database";

const date = ref("");
const time = ref("");
const creatorName = ref(""); // Variable for the display name
const message = ref("");

// Reference to firebase db
const appointmentsRef = dbRef(db, "trainerInfo/sessions");

// async-await makes it so that it has to wait for addDoc before beign able to continue
async function postTime() {
  try {
    // Adds the info to firebase db
    await push(appointmentsRef, {
      date: date.value,
      time: time.value,
      isBooked: false, // run with not booked
      createdBy: creatorName.value || "Ingen Person Fundet",
    }); 
    //Reset fields
    message.value = "Time posted!";
    date.value = "";
    time.value = "";
    creatorName.value = "";
    //Error handling
  } catch (error) {
    console.error("Error posting time:", error);
    message.value = "Noget gik galt, prøv igen";
  }
}
</script>

<template>
  <div>
    <h2>Opret tider</h2>
    <form @submit.prevent="postTime">
      <input v-model="date" type="date" required />
      <input v-model="time" type="time" required />
      <input v-model="creatorName" type="text" placeholder="Angiv navn..." required/>
      <button type="submit">Opret tid</button>
    </form>
    <p v-if="message">{{ message }}</p>
  </div>
</template>

<style scoped>
 </style>
