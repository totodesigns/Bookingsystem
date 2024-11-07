<script setup>
    import { ref } from 'vue';
    import Allan from '@/components/Trainers/Allan.vue';
    import Ole from '@/components/Trainers/Ole.vue';

    import { defineProps } from 'vue';

    const props = defineProps({
        fullName: String,
        contactPref: String,
        phone: Number,
        email: String,
        message: String,
    });

    const wrapper = ref(true);

    const showAllanBtn = ref(true);
    const showOleBtn = ref(true);

    const AllanTime = ref(false);
    const OleTime = ref(false);

    let toggleAllan = () => {
        wrapper.value = !wrapper.value;
        AllanTime.value = !AllanTime.value;
    }

    let toggleOle = () => {
        wrapper.value = !wrapper.value;
        OleTime.value = !OleTime.value;
    }

</script>

<template>
    <div class="screenWrapper" v-if="wrapper">
        <h1>Hej {{ fullName }}.</h1>
        <h2>Vælg ønsket træner</h2>
        <div class="trainerCardWrapper">
            <div class="trainerCard">
                <h3>Allan</h3>
                <button v-if="showAllanBtn" @click="toggleAllan">Vælg træner</button>
            </div>
            <div class="trainerCard">
                <h3>Ole</h3>
                <button v-if="showOleBtn" @click="toggleOle">Vælg træner</button>
            </div>
        </div>
    </div>
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
        gap: 12px;
    }

    .trainerCard {
        padding: 16px;
        border: 1px solid black;
        width: fit-content;
    }


</style>