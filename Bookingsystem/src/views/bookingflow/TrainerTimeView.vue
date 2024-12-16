<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  trainer: Object,
});

const emit = defineEmits(['go-back', 'confirm-selection']);

const selectedSession = ref(null);

const selectSession = (session) => {
  selectedSession.value = session;
};

// Emit valgt session og træner til MemberForm, der bruges til Confirmation
const confirmSelection = () => {
  if (selectedSession.value) {
    emit('confirm-selection', { trainer: props.trainer, session: selectedSession.value });
  } else {
    alert('Please select a session before proceeding.');
  }
};

const goBackToTrainerSelection = () => {
  emit('go-back');
};

</script>

<template>
  <div class="content">
    <div class="flow-block">
      <div class="flow-content">
        <div class="flow-header">
          <p class="t1">Vælg dato & tid</p>
          <hr />
        </div>
        <p>Vi glæder os til at se dig! Vælg din foretrukne dag og tid, så ringer vi tilbage til dig hurtigst muligt!</p>
        <div class="text-gap-l stretch" v-if="trainer">
          <p class="t2">{{ trainer.name }}s ledige tider</p>
          <div v-if="trainer.sessions && Object.keys(trainer.sessions).length > 0">
            <div class="card-wrapper">
              <div v-for="(session, key) in trainer.sessions" :key="key">
                <button class="text-gap-xs" @click="selectSession(session)"
                  :class="{
                    'default-radio-btn': selectedSession !== session,
                    'clicked-radio-btn': selectedSession === session,
                  }"
                >
                <p><b>Dato:</b> {{ session.date }}</p>
                <p><b>Tid:</b> {{ session.time }}</p>
                </button>
              </div>
            </div>
          </div>
          <div v-else>
            <p>Ingen ledige tider. Vælg venligst en anden træner.</p>
          </div>
          <p class="blue-text flexend">Ingen tider, der passer? Ring 28 93 97 80 og hør nærmere!</p>
          <div class="btn-pair stretch">
            <button @click="goBackToTrainerSelection" class="default-secondary-btn stretch">
              TILBAGE TIL VÆLG TRÆNER
            </button>
            <button :disabled="!selectedSession" @click="confirmSelection" class="default-primary-btn stretch">
              GÅ TIL BOOKINGOVERSIGT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
