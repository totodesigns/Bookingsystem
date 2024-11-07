<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebase";
import { ref as dbRef, get } from "firebase/database";

const email = ref("");
const password = ref("");
const router = useRouter();

async function login() {
    const usersRef = dbRef(db, 'trainerInfo'); //pointing to the database > trainerinfo
    const trainers = await get(usersRef); //'trainerInfo' users, await does so that it waits for get to finish
    const trainersinfo = trainers.val(); // extract data from trainers and puts it into trainersinfo (userId + email + password)
    let userFound = false; // sets valid user to false by default


      for (const userId in trainersinfo) { //userId is the names of the key value pairs, the object
        const user = trainersinfo[userId]; //user is the contents of userId, so like email and password

        if (user.email === email.value && user.password === password.value) { //checks if the email in database is the same as user input aswell as pw
          userFound = true; // match? break loop
          break;
        }
      }
      if (userFound) { // if true go next
        router.push("/chooseoption");
      }
}
const skip = () => {
  router.push("/chooseoption");
};
</script>

<template>
  <div class="form-wrapper">
    <h2>Login som træner</h2>
    <form @submit.prevent="login" class="form">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <button @click="skip" type="button">Skip</button>
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
