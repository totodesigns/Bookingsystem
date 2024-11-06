<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Access the router for navigation
const router = useRouter();

import { db } from '../firebase';
import { ref as dbRef, set } from 'firebase/database';

import ChooseTrainer from '@/views/ChooseTrainer.vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref('');
const contactPref = ref('call'); // Default preference
const successMessage = ref('');
const errorMessage = ref('');

const submitForm = async () => {

    if (!name.value || !email.value || !phone.value) {
        errorMessage.value = 'Please fill in all required fields.';
        return;
    }

    const userId = allowedName(name.value); // Sanitize the name for use as a key

    try {
        await set(dbRef(db, 'Medlemmere/' + userId), {
            email: email.value,
            phone: phone.value,
            message: message.value,
            contactPref: contactPref.value,
        });
    } catch (error) {
        errorMessage.value = 'Failed to submit data. Please try again.';
        console.error('Error adding document:', error);
    }

    router.push("/choosetrainer");
};


const skip = () => {
    router.push("/choosetrainer");
};
</script>

<template>
    <div class="form-wrapper">
        <div class="form">
            <label for="fullName">Fulde navn*</label>
            <input v-model="name" type="text" placeholder="Fx Anders Andersen" id="fullName">
        </div>
        <div class="form">
            <label for="email">Email*</label>
            <input v-model="email" type="text" placeholder="Fx andersen@gmail.com" id="email">
        </div>
        <div class="form">
            <label for="phone">Telefon*</label>
            <input v-model="phone" type="number" placeholder="xxxxxxxx" id="phone">
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
        <button type="button" @click="skip">Skip indtastning</button>
        <p v-if="successMessage">{{ successMessage }}</p>
        <p id="error-color" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
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