<script setup>
import { ref } from 'vue';
import { db } from '../firebase';
import { ref as dbRef, set } from 'firebase/database';

//Routing stuff
import Thanks from './Thanks.vue';
const showThanksView = ref(false);
let confirm = () => {
  showThanksView.value = true;
}

const bookingData = JSON.parse(localStorage.getItem('selectedSession'));

// Safely extract fields for display
const sessionId = ref(bookingData?.sessionId);
const sessionDetails = ref(bookingData?.sessionDetails || {});
const userDetails = ref(bookingData?.userDetails || {});

const completeSignup = async () => {
  if (!sessionId.value || !sessionDetails || !userDetails) {
    console.error("Incomplete booking data.");
    return;
  }
  
  // Clean sessionDetails and userDetails to remove unwanted fields like `dep`
  const cleanedSessionDetails = { ...sessionDetails };
  if (cleanedSessionDetails.dep) delete cleanedSessionDetails.dep;
  const cleanedUserDetails = { ...userDetails };
  if (cleanedUserDetails.dep) delete cleanedUserDetails.dep;
  // Data to save
  const dataToSave = {
    sessionDetails: cleanedSessionDetails,
    userDetails: cleanedUserDetails,
  };

  try {    
    // Remove the session from the available sessions list in Firebase using the sessionId
    const sessionRefToDelete = dbRef(db, `trainerInfo/sessions/${sessionId.value}`);
    await set(sessionRefToDelete, null);  // This deletes the session from the list

    // Sets the session data to a new place in db (booked-sessions)
    const sessionRef = dbRef(db, `trainerInfo/booked-sessions/${sessionId.value}`);
    await set(sessionRef, dataToSave);


    console.log("Signup data saved successfully!");
    alert("Signup complete!");
  } catch (error) {
    console.error("Error saving data:", error);
    alert("An error occurred while completing your signup. Please try again.");
  }
  confirm();
};

</script>


<template>
<div v-if="!showThanksView"> 
  <div>
    <h1>Booking Confirmation</h1>
    <div>
      <h2>Session Details</h2>
      <button> rediger</button>
    </div>
    <p><strong>Session ID:</strong> {{ bookingData.sessionId || 'N/A' }}</p>

    <p><strong>Trainer:</strong> {{ sessionDetails.name || 'N/A' }}</p>
    <p><strong>Date:</strong> {{ sessionDetails.date || 'N/A' }}</p>
    <p><strong>Time:</strong> {{ sessionDetails.time || 'N/A' }}</p>
    <div>
      <h2>User Details</h2>
      <button> Rediger</button>
    </div>
    <p><strong>Full Name:</strong> {{ userDetails.fullName || 'N/A' }}</p>
    <p><strong>Contact Preference:</strong> {{ userDetails.contactPref || 'N/A' }}</p>
    <p><strong>Phone:</strong> {{ userDetails.phone || 'N/A' }}</p>
    <p><strong>Email:</strong> {{ userDetails.email || 'N/A' }}</p>
    <p><strong>Message:</strong> {{ userDetails.message || 'N/A' }}</p>
  </div>
  <button @click="completeSignup(), confirm()">Complete Signup</button>
</div>
<Thanks v-if="showThanksView"/>
</template>


<style scoped>
</style>
