<script setup>
import { ref } from 'vue';
import { db } from '@/firebase'; // Your Firebase config
import { ref as dbRef, onValue } from 'firebase/database';
import TrainerTimeView from './TrainerTimeView.vue'; // Import TrainerTimeView

const trainers = ref([]);
const selectedTrainer = ref(null); // Track the selected trainer
const showFormView = ref(true); // Initially show the form view

const sessionConfirmed = ref(false);

const emit = defineEmits(['session-confirmed']);

const fetchTrainers = () => {
  const trainersRef = dbRef(db, 'trainerInfo');
  onValue(trainersRef, (snapshot) => {
    if (snapshot.exists()) {
      const data = snapshot.val();
      trainers.value = [];
      for (let id in data) {
        trainers.value.push({
          id: id,
          name: data[id].name,
          sessions: data[id].sessions,
        });
      }
    }
  });
};

fetchTrainers();

// Set selected trainer
const selectTrainer = (trainerId) => {
  const trainer = trainers.value.find((trainer) => trainer.id === trainerId);
  selectedTrainer.value = trainer;
};

// Vis TrainerTimeView
const showTrainerTime = () => {
  if (selectedTrainer.value) {
    showFormView.value = false;
  }
};

// Tilbage
const goBackToTrainerSelection = () => {
  showFormView.value = true; // Vis MemberForm
  confirmationView.value = 'trainerTime';
};

const handleConfirmSelection = (selectedData) => {
  const { trainer, session } = selectedData;
  selectedTrainer.value = trainer; // Ensure trainer data is set correctly
  sessionConfirmed.value = true;
  emit('session-confirmed', { trainer, session });
};

</script>

<template>
    <div class="content" v-if="showFormView">
        <div class="flow-block">
            <div class="flow-content">
                <div class="flow-header">
                <p class="t1">Vælg personlig træner</p>
                <hr />
                </div>
                <p>
                Alle vores trænere er uddannet og har en professionel og evidensbaseret tilgang til vejledning i dit forløb.
                Vi går op i vores forløb skal være personlige, dette betyder at vi har fokus på at vi skal opnå dine mål
                ved hjælp af et skræddersyet program til dig.
                </p>
                <div class="choose-card">
                <p class="t2">Tryk på en træner for at vælge</p>
                <div class="card-wrapper">
                    <div v-for="trainer in trainers" :key="trainer.id" class="trainer-card">
                    <p class="body-large"><b>{{ trainer.name }}</b></p>
                    <button @click="selectTrainer(trainer.id)" :class="{
                        'default-radio-btn': selectedTrainer?.id !== trainer.id,
                        'clicked-radio-btn': selectedTrainer?.id === trainer.id
                        }">
                        VÆLG TRÆNER
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div class="flow-btns">
                <button type="button" @click="$emit('prev')" class="default-secondary-btn">
                PERSONLIGE OPLYSNINGER
                </button>
                <button :disabled="!selectedTrainer" @click="showTrainerTime" class="default-primary-btn">
                FORTSÆT TIL VÆLG TID
                </button>
            </div>
        </div>
    </div>

    <!-- Conditionally render the TrainerTimeView when showFormView is false -->
    <TrainerTimeView v-if="selectedTrainer" 
    :trainer="selectedTrainer" 
    @go-back="goBackToTrainerSelection"
    @confirm-selection="handleConfirmSelection"
     />
</template>
