<script setup>
    import LoginForm from '@/components/LoginForm.vue';
    import LoggedIn from '@/components/LoggedIn.vue';
    import Back from '@/components/Back.vue';
    import { ref } from 'vue';

    const showLoggedIn = ref(false);
    const showLoginForm = ref(true);
    const showLoginBtn = ref(true);


    let toggleLogIn = () => {
        showLoggedIn.value = !showLoggedIn.value;
        showLoginForm.value = !showLoginForm.value;
        showLoginBtn.value = !showLoginBtn.value;
        };

</script>

<template>
    <Back />
    <LoggedIn v-if="showLoggedIn"/>
    <LoginForm v-if="showLoginForm" />
    <button v-if="showLoginBtn" @click="toggleLogIn">Log ind</button>
</template>