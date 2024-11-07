<script setup>
    import { defineProps } from 'vue';

    // Define the props that ChooseTrainer will receive
    const props = defineProps({
        fullName: String,
    });
</script>

<template>
    <h1>Allans Kalender</h1>
    <div class="screenWrapper">
        <h2> Vælg ønsket tid </h2>
        <div class="trainerCardWrapper">
            <div class="trainerCard">
                <h3><b>22/10</b></h3>
                <h5>12:00-13:00</h5>
                <button>Vælg tid</button>
            </div>
            <div class="trainerCard">
                <h3>22/10</h3>
                <h5>12:00-13:00</h5>
                <button>Vælg tid</button>
            </div>
        </div>
    </div>
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