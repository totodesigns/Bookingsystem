<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue, remove } from 'firebase/database';
import NavBar from '@/components/NavBar.vue'
import { useRouter } from 'vue-router';
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

        sessions.push({
          sessionKey,
          fullName: userDetails._value.fullName,
          date: sessionDetails._value.date,
          time: sessionDetails._value.time,
          message: userDetails._value.message,
          contactPref: userDetails._value.contactPref,
          phone: userDetails._value.phone,
          email: userDetails._value.email,
          name: sessionDetails._value.name,
        });
      }

      bookedSessions.value = sessions;
    } else {
      // Handle case where no sessions exist in the database
      bookedSessions.value = [];
    }
  });
};
// Call function to fetch data on component creation
fetchBookedSessions();

const removeTrainerCard = (sessionKey) =>{
  const deleteSessionRef = dbRef(db, `trainerInfo/booked-sessions/${sessionKey}`)
  remove(deleteSessionRef);
}


// forbedring
const router = useRouter();
let goToChooseOption = () => {
    router.push("/ChooseOption");
};

</script>

<template>  
<NavBar></NavBar>
  

  <div class="screenWrapper">
    <button class="backButton" @click="goToChooseOption">< Tilbage til Oversigt </button>
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
        <button @click="removeTrainerCard(session.sessionKey)"> Fjern Tid</button>
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
    margin-left: 4vw;
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

  .backButton{
    display: flex;
    align-items: center;
    padding: 5px;
    text-decoration: underline;
  }

</style>
