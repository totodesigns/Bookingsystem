<script setup>
import { ref} from "vue";
import { db } from "../firebase";
import { ref as dbRef, set } from "firebase/database";

const name = ref("");
const email = ref("");
const password = ref("");


async function register() {
    const usersRef = dbRef(db, "trainerInfo/" + name.value.toLowerCase()); //says the data vill go to trainerinfo in the db

    // await waits for the set() function to finish before continuing, type shit
    await set(usersRef, { // set(), takes the email and pw and puts it under the path in usersRef
      name: name.value,
      email: email.value,
      password: password.value,
    },
  );
    // we do a lil reset of the fields yknow
    name.value = "";
    email.value = "";
    password.value = "";
}
</script>

<template>
  <div class="form-wrapper">
    <h2>Registrer ny træner</h2>
    <form @submit.prevent="register" class="form">
      <input v-model="name" type="text" placeholder="Name" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button  type="submit">Register</button> <!-- @click="windowBtn" -->
    </form>
  </div>
</template>

<style scoped>
    .form-wrapper {
        margin: 20px;
        width: 30vw;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }
</style>