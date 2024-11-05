<script setup>
import { ref } from "vue";
import { db } from "../firebase"; // Firestore databse setup
import { addDoc, collection } from "firebase/firestore"; // Firestore functions

const date = ref("");
const time = ref("");

// Reference to firesore collection
const appointmentsCollection = collection(db, "appointments");

// async-await makes it so that it has to wait for addDoc before beign able to continue
async function postTime() {
  try {
    // Adds the info to firestore db
    await addDoc(appointmentsCollection, {
      date: date.value,
      time: time.value,
      isBooked: false, // run with not booked
    }); 
    //Reset fields
    message.value = "Time posted successfully!";
    date.value = "";
    time.value = "";
    //Error handling
  } catch (error) {
    console.error("Error posting time:", error);
  }
}
</script>

<template>
  <div>
    <h2>Opret tider</h2>
    <form @submit.prevent="postTime">
      <input v-model="date" type="date" required />
      <input v-model="time" type="time" required />
      <button type="submit">Opret tid</button>
    </form>
  </div>
</template>

<style scoped>
 </style>
