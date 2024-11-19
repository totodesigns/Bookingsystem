<script setup>
import { ref } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue, set, remove } from 'firebase/database';
import { defineProps } from 'vue';
import ChooseTrainer from '@/views/ChooseTrainer.vue';

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
const sessionsRef = dbRef(db, `trainerInfo/allan/sessions`)

onValue(sessionsRef, (snapshot) => {
    if (snapshot.exists()) {

        // Hvis der findes et objekt i databasen (snapshot), så smid det i sessions-array.
        sessions.value = snapshot.val();
    } 
})

const selectedSession = ref(null);
// Function to handle session selection and update Firebase
const selectSession = (sessionId) => {
    selectedSession.value = sessionId;
};

const submitSession = () => {
    if (!selectedSession.value) return;

    const sessionId = selectedSession.value;
    const sessionRef = dbRef(db, `trainerInfo/allan/sessions/${sessionId}`);
  
    // Find selected session
    const selectedSession = sessions.value[sessionId]; // Access directly by ID
    if (selectedSession) {
        selectedSession.memberName = props.fullName;
        selectedSession.contactPref = props.contactPref;
        selectedSession.phone = props.phone;
        selectedSession.email = props.email;

        // Smid ny data ind i ny value under træneren
        const sessionBookedRef = dbRef(db, `trainerInfo/allan/booked-sessions/${sessionId}`)
        set(sessionBookedRef, selectedSession);

        // Slet det samme data fra "sessions", der så fjerner det fra display.
        remove(sessionRef, selectedSession)
    };
}


</script>

<template>
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
            <button :disabled="!selectedSession"@click="submitSession">Fortsæt</button>
        </div>
    </div>
    <ChooseTrainer v-if="showTrainerView"/>
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