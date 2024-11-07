<script setup>
import { ref } from 'vue';
import { db } from '../firebase';
import { ref as dbRef, set } from 'firebase/database';

import ChooseTrainer from '@/views/ChooseTrainer.vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref(null);
const contactPref = ref('call');
const errorMessage = ref('');
const showTrainerView = ref(false);

const submitForm = () => {

// Tjek for input
if (!name.value || !email.value || !phone.value) {
    errorMessage.value = 'Please fill in all required fields.';
    return;
    
    } else {

        // Dato for signup!
        let signInDate = new Date();
        let year = signInDate.getFullYear();
        let month = signInDate.getMonth();
        let day = signInDate.getDate();

        // Send the new unique userName to the database
        set(dbRef(db, 'Medlemmere/' + name.value), {
            Email: email.value,
            Phone: phone.value,
            Message: message.value,
            Contact: contactPref.value,
            Signed: `${day}-${month}-${year}`,
        });

        // Skift væk fra form
        showTrainerView.value = true;
    } 
};

let skip = () => {
    showTrainerView.value = true;
};

</script>

<template>
    <div v-if="!showTrainerView" class="form-wrapper">
        <div class="form">
            <label for="fullName">Fulde navn*</label>
            <input v-model="name" type="text" placeholder="Fx Anders Andersen" id="fullName" />
        </div>
        <div class="form">
            <label for="email">Email*</label>
            <input v-model="email" type="text" placeholder="Fx andersen@gmail.com" id="email" />
        </div>
        <div class="form">
            <label for="phone">Telefon*</label>
            <input v-model="phone" type="number" placeholder="xxxxxxxx" id="phone" />
        </div>
        <div class="form">
            <label for="message">Noget vi skal vide? (valgfrit)</label>
            <textarea v-model="message" cols="30" rows="5" placeholder="Skriv her..." id="message"></textarea>
        </div>
        <div class="form">
            <label for="contactPreference">Hvordan vil du kontaktes?*</label>
            <select v-model="contactPref" id="contactPreference">
                <option value="call">På telefon</option>
                <option value="email">På email</option>
            </select>
        </div>
        <button type="button" @click="submitForm">Opret medlem</button>
        <p id="error-color" v-if="errorMessage">{{ errorMessage }}</p>

        <button type="button" @click="skip">Skip</button>
    </div>

    <ChooseTrainer v-if="showTrainerView" 
        :fullName="name" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />
</template>

<style scoped>
    .form-wrapper {
        margin: 20px;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .form {
        display: flex;
        flex-direction: column;
    }

    #error-color {
        color: red;
    }
</style>