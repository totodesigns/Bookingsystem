<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue } from 'firebase/database';
import { defineProps } from 'vue';
import ChooseTrainer from '@/views/ChooseTrainer.vue';
import Confirmation from '@/views/Confirmation.vue';

const showConfirmationView = ref(false);
let confirm = () => {
  showConfirmationView.value = true;
}
const showTrainerView = ref(false);
let prev = () => {
    showTrainerView.value = true;
};

const props = defineProps({
    fullName: String,
    contactPref: String,
    phone: Number,
    email: String,
    message: String,
});

// "sessions" er et tomt array, der holder alle sessions fra db2.
const sessions = ref([]);
const sessionsRef = dbRef(db, `trainerInfo/allan/sessions`);

onValue(sessionsRef, (snapshot) => {
    if (snapshot.exists()) {
        // Hvis der findes et objekt i databasen (snapshot), så smid det i sessions-array.
        sessions.value = snapshot.val();
    }
});

const selectedSession = ref(null);

// Function to handle session selection
const selectSession = (sessionId) => {
    selectedSession.value = sessionId;
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

        // Optional: Navigate to another view or update the UI
        alert('Session saved locally for future use!');
    }
    confirm();
};
</script>

<template>
  <div v-if="!showConfirmationView">
    <h1 v-if="!showTrainerView">Allans Kalender</h1>
    <div v-if="!showTrainerView" class="screenWrapper">
        <h2> Hej {{ fullName }}. Vælg ønsket tid </h2>
        <ul class="trainerCardWrapper">
            <li v-for="(session, id) in sessions" :key="id" class="trainerCard">
                <p>Dato: {{ session.date }} </p>
                <p>Tid: {{ session.time }} </p>
                <button @click="selectSession(id)">Vælg tid</button>
            </li>
        </ul>
        <div>
            <button @click="prev">Tilbage til trænere</button>
            <button :disabled="!selectedSession" @click="submitSession">Fortsæt</button>
        </div>
    </div>
  </div>
    <ChooseTrainer v-if="showTrainerView"/>
    <Confirmation v-if="showConfirmationView"/>
</template>

<style scoped>
li {
    list-style: none;
}

* {
    box-sizing: border-box;
}

.screenWrapper {
    margin: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;
}

.trainerCardWrapper {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.trainerCard {
    padding: 16px;
    border: 1px solid black;
    width: fit-content;
}
</style>
