<script setup>
    import { ref } from 'vue';
    import MemberForm from './MemberForm.vue';
    import Allan from '@/components/Trainers/Allan.vue';
    import Ole from '@/components/Trainers/Ole.vue';
    import Emilie from '@/components/Trainers/Emilie.vue';
    import Kristian from '@/components/Trainers/Kristian.vue';
    import Marete from '@/components/Trainers/Marete.vue';
    import Mads from '@/components/Trainers/Mads.vue';
    import { defineProps } from 'vue';

    const props = defineProps({
        fullName: String,
        contactPref: String,
        phone: Number,
        email: String,
        message: String,
    });
    const wrapper = ref(true);

    const AllanTime = ref(false);
    const OleTime = ref(false);
    const EmilieTime = ref(false);
    const KristianTime = ref(false);
    const MareteTime = ref(false);
    const MadsTime = ref(false);

    const selectedTrainer =ref(null);

    let selectTrainer = (trainer) => {
    selectedTrainer.value = trainer;
}
let showTrainerTime = () => {
  wrapper.value = false;
  AllanTime.value = OleTime.value = EmilieTime.value = KristianTime.value = MareteTime.value = MadsTime.value = false;
    if (selectedTrainer.value === "Allan") AllanTime.value = true;
    if (selectedTrainer.value === "Ole") OleTime.value = true;
    if (selectedTrainer.value === "Emilie") EmilieTime.value = true;
    if (selectedTrainer.value === "Kristian") KristianTime.value = true;
    if (selectedTrainer.value === "Marete") MareteTime.value = true;
    if (selectedTrainer.value === "Mads") MadsTime.value = true;
};

const showFormView = ref(false);

let prev = () => {
    showFormView.value = true;
};
</script>

<template>
  <div v-if="!showFormView">
    <div class="screenWrapper" v-if="wrapper">
        <h1>Hej {{ fullName }}.</h1>
        <h2>Vælg ønsket træner</h2>
        <div class="trainerCardWrapper">
            <div class="trainerCard">
                <h3>Allan</h3>
                <button @click="selectTrainer('Allan')">Vælg træner</button>
            </div>

            <div class="trainerCard">
                <h3>Ole</h3>
                <button  @click="selectTrainer('Ole')">Vælg træner</button>
            </div>

            <div class="trainerCard">
                <h3>Emilie</h3>
                <button  @click="selectTrainer('Emilie')">Vælg træner</button>
            </div>

            <div class="trainerCard">
                <h3>Kristian</h3>
                <button @click="selectTrainer('Kristian')">Vælg træner</button>
            </div>

            <div class="trainerCard">
                <h3>Marete</h3>
                <button @click="selectTrainer('Marete')">Vælg træner</button>
            </div>

            <div class="trainerCard">
                <h3>Mads</h3>
                <button @click="selectTrainer('Mads')">Vælg træner</button>
            </div>
        </div>
      </div>
        <div v-if="wrapper">
          <button type="button" @click="prev">Tilbage</button>
          <button :disabled="!selectedTrainer" @click="showTrainerTime">Fortsæt</button>
        </div>

        <p id="error-color" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
    <MemberForm v-if="showFormView"/>

    <!-- props? -->
    <Allan v-if="AllanTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Ole v-if="OleTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Emilie v-if="EmilieTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Kristian v-if="KristianTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Marete v-if="MareteTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Mads v-if="MadsTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />
</template>

<style scoped>

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
        flex-direction: row;
        flex-wrap: wrap;
        gap: 12px;
    }

    .trainerCard {
        padding: 16px;
        border: 1px solid black;
        width: fit-content;
    }

</style>