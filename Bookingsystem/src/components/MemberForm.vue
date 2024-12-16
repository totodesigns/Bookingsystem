<script setup>
import { ref } from 'vue';
import ChooseTrainer from '@/views/bookingflow/ChooseTrainer.vue';
import Confirmation from '@/views/bookingflow/Confirmation.vue';
import ProgressBar from '@/components/ProgressBar.vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref(null);
const contactPref = ref('call');

const errorMessage = ref('');
const showTrainerView = ref(false);

const selectedTrainer = ref(null);
const selectedSession = ref(null);
const sessionConfirmed = ref(false);

const handleSessionConfirmed = ({ trainer, session }) => {
  selectedTrainer.value = trainer; // Update selected trainer
  selectedSession.value = session; // Update selected session
  sessionConfirmed.value = true;  // Vis Confirmation
};

const next = () => {
  if (!name.value || !email.value || !phone.value) {
    errorMessage.value = 'Venligst udfyld felterne for at fortsætte';
    return;
  }

  // Save form data to localStorage
  const formData = {
    fullName: name.value,
    email: email.value,
    phone: phone.value,
    message: message.value,
    contactPref: contactPref.value,
    signedDate: new Date().toISOString(),
  };

  localStorage.setItem('userDetails', JSON.stringify(formData));
  console.log('User data saved to localStorage:', formData);

  // Navigate to the next view
  showTrainerView.value = true;
};

</script>

<template>
  <div class="content" v-if="!showTrainerView">
    <ProgressBar />
    <div class="flow-block">
      <div class="flow-content">
      <div class="flow-header">
        <p class="t1">Personlige Oplysninger</p>
        <hr>
      </div>
      <div class="formular">
        <div class="form">
          <label for="fullName">Fulde navn*</label>
          <input v-model="name" type="text" placeholder="Fx Anders Andersen" id="fullName" class="form-style"/>
        </div>
        <div class="form">
          <label for="email">Email*</label>
          <input v-model="email" type="text" placeholder="Fx andersen@gmail.com" id="email" class="form-style"/>
        </div>
        <div class="short-form">
          <label for="phone">Telefon*</label>
          <input v-model="phone" type="number" placeholder="xxxxxxxx" id="phone" class="form-style"/>
        </div>
        <div class="form">
          <label for="message">Er der noget, vi skal tage hensyn til? (Fx en skade eller andre fysiske nedsættelser) (valgfrit)</label>
          <textarea v-model="message" cols="30" rows="5" placeholder="Skriv her..." id="message" class="form-style"></textarea>
        </div>
      </div>
      <div class="form">
        <label for="contactPreference">Hvordan vil du kontaktes?*</label>
        <select v-model="contactPref" id="contactPreference" class="short-form form-style">
          <option value="Telefonopkald">På Telefon</option>
          <option value="SMS">På SMS</option>
          <option value="Email">På Email</option>
        </select>
      </div>
    </div>
    <button type="button" @click="next" class="default-primary-btn stretch">Fortsæt</button>
    <p id="error-color" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>

  <ChooseTrainer 
    v-if="showTrainerView && !sessionConfirmed"
    :fullName="name"
    :contactPref="contactPref"
    :phone="phone"
    :email="email"
    :message="message"
    @prev="showTrainerView = false"
    @trainer-selected="selectedTrainer = $event" 
    @session-confirmed="handleSessionConfirmed" 
  />

  <Confirmation
    v-if="sessionConfirmed"
    :trainer="selectedTrainer"
    :session="selectedSession"
    :fullName="name"
    :contactPref="contactPref"
    :phone="phone"
    :email="email"
    :message="message"
  />
</template>
