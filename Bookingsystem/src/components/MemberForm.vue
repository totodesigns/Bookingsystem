<script setup>
import { ref } from 'vue';
import ChooseTrainer from '@/views/bookingflow/ChooseTrainer.vue';
import ProgressBar from '@/components/ProgressBar.vue';

const name = ref('');
const email = ref('');
const phone = ref('');
const message = ref(null);
const contactPref = ref('call');

const errorMessage = ref('');
const showTrainerView = ref(false);

const next = () => {
  if (!name.value || !email.value || !phone.value) {
    errorMessage.value = 'Please fill in all required fields.';
    return;
  }
  // // Save form data to localStorage
  // const formData = {
  //   name: name.value,
  //   email: email.value,
  //   phone: phone.value,
  //   message: message.value,
  //   contactPref: contactPref.value,
  //   signedDate: new Date().toISOString(),
  // };

  // // localStorage.setItem('signupFormData', JSON.stringify(formData));
  // // console.log('Form data saved to localStorage:', formData);

  // Navigate to the next view
  showTrainerView.value = true;
};

const skip = () => {
  showTrainerView.value = true;
};

</script>

<template>
  <div class="content">
    <ProgressBar />
    <div class="flow-block" v-if="!showTrainerView">
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
          <option value="call">På telefon</option>
          <option value="email">På email</option>
        </select>
      </div>
    </div>


      <button type="button" @click="next" class="default-primary-btn stretch">Fortsæt</button>
      <button type="button" @click="skip" class="default-secondary-btn stretch">Skip</button>
      <p id="error-color" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>


  <ChooseTrainer
    v-if="showTrainerView"
    :fullName="name"
    :contactPref="contactPref"
    :phone="phone"
    :email="email"
    :message="message"
  />
</template>

<style scoped>

</style>
