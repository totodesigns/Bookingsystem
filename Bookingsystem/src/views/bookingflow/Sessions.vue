<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue, remove } from 'firebase/database';
import Back from '@/components/Back.vue';
const bookedSessions = ref([]);

// Fetch booked sessions dynamically based on the unique keys (date__time)
const fetchBookedSessions = () => {
  const bookedSessionsRef = dbRef(db, 'trainerInfo/booked-sessions/');
  
  onValue(bookedSessionsRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      const sessions = [];

      // Loop through each session key (dynamic key)
      for (const sessionKey in data) {
        const sessionData = data[sessionKey];
        const sessionDetails = sessionData.sessionDetails || {};
        const userDetails = sessionData.userDetails || {};

        // Conditional check to ensure properties exist
        const fullName = userDetails._value?.fullName || 'Unknown Member';
        const date = sessionDetails._value?.date || 'Unknown Date';
        const time = sessionDetails._value?.time || 'Unknown Time';
        const message = userDetails._value?.message || '';
        const contactPref = userDetails._value?.contactPref || 'Unknown';
        const phone = userDetails._value?.phone || 'N/A';
        const email = userDetails._value?.email || 'N/A';
        const name = sessionDetails._value?.name || 'Unknown Trainer';

        sessions.push({
          id: sessionKey, // Add the session key to uniquely identify the session
          fullName,
          date,
          time,
          message,
          contactPref,
          phone,
          email,
          name,
        });
      }

      bookedSessions.value = sessions;
    } else {
      // Handle case where no sessions exist in the database
      bookedSessions.value = [];
    }
  });
};
// remove trainer cards on click
const removeTrainerCard = async (sessionId) => {
  try {
    const sessionRef = dbRef(db, `trainerInfo/booked-sessions/${sessionId}`);
    await remove(sessionRef); // Remove the session from Firebase

    bookedSessions.value = bookedSessions.value.filter(session => session.id !== sessionId); // Remove it from the local array
    alert('Trainer session removed successfully!');
  } catch (error) {
    console.error('Error removing session:', error);
    alert('Failed to remove the trainer session. Please try again.');
  }
};
// Call function to fetch data on component creation
fetchBookedSessions();

</script>

<template>  
<back/>
  <div class="screenWrapper">
    <h1> Se alle kommende tider </h1>
    
    <!-- Loop through and display all booked sessions -->
    <ul class="trainerCardWrapper">
      <li v-for="(session, index) in bookedSessions" :key="index" class="trainerCard">
        <p><b>Medlem: {{ session.fullName }} </b></p>
        <p>Træner: {{ session.name }}</p>
        <p>Dato: {{ session.date }} </p>
        <p>Tid: {{ session.time }} </p>
        <p>Besked til træner: {{ session.message }} </p>
        <br>
        <p><b>Kontaktoplysninger:</b></p>
        <p>Foretrækker at blive kontaktet på: {{ session.contactPref }} </p>  
        <p>Telefonnummer: {{ session.phone }} </p>  
        <p>Email: {{ session.email }} </p>  
        <button class="remove-btn" @click="removeTrainerCard(session.id)">Remove</button>
      </li>
    </ul>
  </div>

</template>

<style scoped>
  * {
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  .screenWrapper {
    margin: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .trainerCardWrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
  }
  .trainerCard {
    padding: 16px;
    border: 1px solid black;
    width: fit-content;
  }
</style>
