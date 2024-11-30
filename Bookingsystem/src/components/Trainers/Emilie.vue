<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue } from 'firebase/database';
import { defineProps } from 'vue';
import ChooseTrainer from '@/views/bookingflow/ChooseTrainer.vue';
import Confirmation from '@/views/bookingflow/Confirmation.vue';

const wrapper = ref(true);

// Routing
const showConfirmationView = ref(false);
let confirm = () => {
  showConfirmationView.value = true;
};
const showTrainerView = ref(false);
let prev = () => {
  showTrainerView.value = true;
};

// Props
const props = defineProps({
  fullName: String,
  contactPref: String,
  phone: Number,
  email: String,
  message: String,
});

// Sessions and database handling
const sessions = ref([]);
const sessionsRef = dbRef(db, `trainerInfo/emilie/sessions`);

onValue(sessionsRef, (snapshot) => {
  if (snapshot.exists()) {
    sessions.value = snapshot.val();
  }
});

// Selected session
const selectedSession = ref(null);

const selectSession = (sessionId) => {
  selectedSession.value = sessionId;
};

// Function to get button class based on selection
const getSessionClass = (sessionId) => {
  return selectedSession.value === sessionId ? 'clicked-radio-btn' : 'default-radio-btn';
};

// Save selected session to local storage
const submitSession = () => {
  if (!selectedSession.value) return;

  const sessionId = selectedSession.value;
  const sessionData = sessions.value[sessionId]; // Access session details by ID

  if (sessionData) {
    const bookingData = {
      sessionId,
      sessionDetails: sessionData,
      userDetails: {
        fullName: props.fullName,
        contactPref: props.contactPref,
        phone: props.phone,
        email: props.email,
        message: props.message,
      },
    };

    // Save booking data to local storage
    localStorage.setItem('selectedSession', JSON.stringify(bookingData));
    console.log('Session data saved to local storage:', bookingData);
  }
  confirm();
};
</script>

<template>
  <div class="content">
    <div class="flow-block">
      <div v-if="!showConfirmationView" class="stretch choose-card">
        <div class="flow-header">
          <p class="t1">Emuilies Kalender</p>
          <hr />
        </div>
        <div v-if="!showTrainerView" class="stretch">
          <ul class="time-cards">
            <li v-for="(session, id) in sessions" :key="id" class="time-card">
              <p><b>Dato:</b> {{ session.date }}</p>
              <p><b>Tid:</b> {{ session.time }}</p>
              <button :class="getSessionClass(id)" @click="selectSession(id)">
                Vælg tid
              </button>
            </li>
          </ul>
        </div>
        <div class="flow-btns" v-if="wrapper">
          <button type="button" @click="prev" class="default-secondary-btn">VÆLG EN ANDEN TRÆNER</button>
          <button :disabled="!selectedSession" @click="submitSession" class="default-primary-btn">GÅ TIL BOOKINGOVERSIGT</button>
        </div>
      </div>
      <ChooseTrainer v-if="showTrainerView" />
      <Confirmation
        v-if="showConfirmationView"
        :fullName="fullName"
        :contactPref="contactPref"
        :phone="phone"
        :email="email"
        :message="message"
      />
    </div>
  </div>
</template>
