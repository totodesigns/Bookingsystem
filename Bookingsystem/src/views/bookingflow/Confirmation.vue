<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
import { db } from '../../firebase';
import { ref as dbRef, set } from 'firebase/database';

const props = defineProps({
  trainer: Object,
  session: Object,
  fullName: String,
  contactPref: String,
  phone: Number,
  email: String,
  message: String,
});

console.log("Trainer in Confirmation:", props.trainer);
console.log("Session in Confirmation:", props.session);


const router = useRouter();

const completeSignup = async () => {
  if (!props.session || !props.trainer) {
    console.error('Incomplete booking data.');
    return;
  }

  try {
    // Remove the session from the trainer's available sessions
    const sessionRefToDelete = dbRef(db, `trainerInfo/${props.trainer.name}/sessions/${props.session.id}`);
    await set(sessionRefToDelete, null);

    // Save the booking details to the "booked-sessions" node
    const bookingData = {
      trainer: props.trainer.name,
      session: props.session,
    };
    const bookedSessionRef = dbRef(db, `trainerInfo/booked-sessions/${props.session.id}`);
    await set(bookedSessionRef, bookingData);

    console.log('Booking completed successfully!');
    router.push('/tak');
  } catch (error) {
    console.error('Error during booking:', error);
    alert('An error occurred. Please try again.');
  }
};
</script>

<template>
  <div class="content">
    <div class="flow-block">
      <div class="flow-header">
        <p class="t1">Bookingoversigt</p>
        <hr />
      </div>
      <div class="flow-content">
        <div class="text-gap-l stretch">
          <p class="t2">1. Personlige oplysninger</p>
          <div class="text-gap-xs">
            <p class="caption">Fornavn og efternavn</p>
            <p class="body-large">{{ fullName }}</p>
          </div>
          <div class="text-gap-xs">
            <p class="caption">Email</p>
            <p class="body-large">{{ email }}</p>
          </div>
          <div class="text-gap-xs">
            <p class="caption">Telefonnummer</p>
            <p class="body-large">{{ phone }}</p>
          </div>
        </div>
        <hr />
        <div class="text-gap-l stretch">
          <p class="t2">2. Træningsoplysninger</p>
          <div class="text-gap-xs">
            <p class="caption">Træner</p>
            <p class="body-large">{{ trainer ? trainer.name : 'N/A' }}</p>
          </div>
          <div class="text-gap-xs">
            <p class="caption">Dato</p>
            <p class="body-large">{{ session ? session.date : 'N/A' }}</p>
          </div>
          <div class="text-gap-xs">
            <p class="caption">Tid</p>
            <p class="body-large">{{ session ? session.time : 'N/A' }}</p>
          </div>
        </div>
        <button class="default-success-btn stretch" @click="completeSignup">
          ANMOD BOOKING
        </button>
      </div>
    </div>
  </div>
</template>
