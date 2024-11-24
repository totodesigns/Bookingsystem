<script setup>
    import LoginForm from '@/components/LoginForm.vue';
    import NavBar from '@/components/NavBar.vue';
    import RegistrationForm from '@/components/RegistrationForm.vue';

</script>

<template>
    <NavBar />
    <div class="content"></div>
    <div>
        <div class="flow-block">
            <LoginForm />
        </div>
        <div class="flow-block">
            <RegistrationForm />
        </div>
    </div>

</template>