<script setup>
import { ref } from 'vue';
import { db } from '../../firebase';
import { ref as dbRef, set } from 'firebase/database';
import { defineProps } from 'vue';
import MemberForm from '@/components/MemberForm.vue';
import ChooseTrainer from './ChooseTrainer.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const activeView = ref('confirmation'); // Default to the confirmation page

const props = defineProps({
        fullName: String,
        contactPref: String,
        phone: Number,
        email: String,
        message: String,
    });

// Function to save the current booking data into localStorage
const saveDataToLocalStorage = () => {
  localStorage.setItem('selectedSession',JSON.stringify({
      sessionId: sessionId.value,
      sessionDetails: sessionDetails.value,
    }))
    localStorage.setItem('userSession', JSON.stringify({
      userDetails: userDetails.value,
    }))
};

const setActiveView = (view) => {
  activeView.value = view;
  saveDataToLocalStorage();
};

// ______________________________________________________________________

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
  } catch (error) {
    console.error("Error saving data:", error);
    alert("An error occurred while completing your signup. Please try again.");
  }
  confirm();
  router.push("/tak")
};



</script>


<template>
  <div v-if="activeView === 'confirmation'" class="text-gap-l stretch">
    <div class="flow-header">
        <p class="t1">Bookingoversigt</p>
        <hr />
    </div>
    <div class="text-gap-l stretch">
      <div class="btn-pair">
        <p class="t2">1. Personlige oplysninger</p>
        
        <button class="icon-tertiary-btn" @click="setActiveView('memberForm')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" class="chevron grey-i"/>
          </svg>
          Redigér
        </button>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Fornavn og efternavn</p>
        <p class="body-large">{{ userDetails.fullName || 'N/A' }}</p>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Email</p>
        <p class="body-large">{{ userDetails.email || 'N/A' }}</p>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Telefonnummer</p>
        <p class="body-large">{{ userDetails.phone || 'N/A' }}</p>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Besked</p>
        <p class="body-large">{{ userDetails.message || 'N/A' }}</p>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Du vil blive kontaktet gennem:</p>
        <p class="body-large">{{ userDetails.contactPref || 'N/A' }}</p>
      </div>
    </div>
    <hr>
    <div class="text-gap-l stretch">
      <div class="btn-pair">      
        <p class="t2">2. Træningsoplysninger</p>
        <button class="default-tertiary-btn" @click="setActiveView('chooseTrainer')">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" class="chevron grey-i"/>
          </svg>
          Redigér
        </button>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Træner</p>
        <p class="body-large">{{ sessionDetails.name || 'N/A' }}</p>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Dato</p>
        <p class="body-large">{{ sessionDetails.date || 'N/A' }}</p>
      </div>
      <div class="text-gap-xs">
        <p class="caption">Tid</p>
        <p class="body-large">{{ sessionDetails.time || 'N/A' }}</p>
      </div>
      <button class="default-success-btn stretch" @click="completeSignup()">ANMOD BOOKING</button>
    </div>
  </div>

  <!-- Member Form -->
  <MemberForm v-if="activeView === 'memberForm'" />

  <!-- Choose Trainer -->
  <ChooseTrainer v-if="activeView === 'chooseTrainer'" 
    :fullName="fullName"
    :contactPref="contactPref"
    :phone="phone"
    :email="email"
    :message="message"/>
</template>



<style scoped>

</style>
