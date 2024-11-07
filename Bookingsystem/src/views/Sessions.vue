<script setup>
import Back from '@/components/Back.vue';

import { ref } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue } from 'firebase/database';

import { defineProps } from 'vue';

const props = defineProps({
        fullName: String,
        contactPref: String,
        phone: Number,
        email: String,
        message: String,
    });

const bookedSessionsRef = dbRef(db, `trainerInfo/allan/booked-sessions`);
const bookedSessions = ref([]);

onValue(bookedSessionsRef, (snapshot) => {
    if (snapshot.exists()) {

        // Hvis der findes et objekt i databasen (snapshot), så smid det i sessions-array.
        bookedSessions.value = snapshot.val();
    } 
})

</script>

<template>
    <Back />
    <div class="screenWrapper">
        <h1> Se dine kommende tider </h1>
        <ul class="trainerCardWrapper">
            <li v-for="bookedSession in bookedSessions" class="trainerCard">
                <p><b>Medlem: {{ bookedSession.memberName }} </b></p>
                <p>Dato: {{ bookedSession.date }} </p>
                <p>Tid: {{ bookedSession.time }} </p>
                <p>Besked til træner: {{ bookedSession.message }} </p>
                <br>
                <p><b>Kontaktoplysninger:</b></p>
                <p>Foretrækker at blive kontaktet på: {{ bookedSession.contactPref }} </p>  
                <p>Telefonnummer: {{ bookedSession.phone }} </p>  
                <p>Email: {{ bookedSession.email }} </p>  
            </li>
        </ul>
    </div>
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
            gap: 20px;
        }

        .trainerCardWrapper {
            display: flex;
            gap: 12px;
        }

        .trainerCard {
            padding: 16px;
            border: 1px solid black;
            width: fit-content;
        }
</style>