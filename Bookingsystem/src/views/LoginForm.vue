<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { db } from "../firebase";
import { ref as dbRef, get } from "firebase/database";

const email = ref("");
const password = ref("");
const error = ref(null);
const router = useRouter();

async function login() {
  try {
    const usersRef = dbRef(db, 'trainerInfo'); //pointing to the database > trainerinfo
    const trainers = await get(usersRef); //'trainerInfo' users
    const trainersinfo = trainers.val(); // extract data from trainers and puts it into trainersinfo (userId + email + password)
    let userFound = false; // sets valid user to false by default

      // Loop through each user and check the email and password
      for (const userId in trainersinfo) { //userId is the key that firebase gives to the push() objects
        const user = trainersinfo[userId]; //user is the contents of userId, so like email and password

        if (user.email === email.value && user.password === password.value) { //checks if the email in database is the same as user input aswell as pw
          userFound = true; // match? break loop
          break;
        }
      }
      if (userFound) { // if true go next
        router.push("/chooseoption");
      }
     

  } catch (err) {
    console.error("Error during login:", err);
    error.value = "Something went wrong during login.";
  }
}
const skip = () => {
  router.push("/chooseoption");
};
</script>

<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
      <p v-if="error">{{ error }}</p>
    </form>
    <button @click="skip" type="button">Skip</button>
  </div>
</template>