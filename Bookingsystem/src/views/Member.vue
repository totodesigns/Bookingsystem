<script setup>
    import MemberForm from '@/components/MemberForm.vue';
    import Back from '@/components/Back.vue';

    import ChooseTrainer from '@/components/ChooseTrainer.vue';

    import { ref } from 'vue';

    const showTrainer = ref(false);
    const showParent = ref(true);
    const showTrainerBtn = ref(true);
    const showTimeBtn = ref(false);

    let toggleChooseTrainer = () => {
        showTrainer.value = !showTrainer.value;
        showParent.value = !showParent.value;
        showTrainerBtn.value = !showTrainerBtn.value;
        showTimeBtn.value = !showTimeBtn.value;
        };

</script>

<template>
    <Back />
    <div>
        <MemberForm v-if="showParent" />
        <button v-if="showTrainerBtn" @click="toggleChooseTrainer">Opret medlem</button>
        <ChooseTrainer v-if="showTrainer" />

    </div>
</template>