<script setup>
import { useRouter } from 'vue-router';

import NavBar from "@/components/NavBar.vue";
import FooterBlock from "@/components/Footer.vue";
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';

const router = useRouter();

let traeningsforloeb = () => {
  router.push("/traeningsforloeb")
}

let kontakt = () => {
  router.push("/kontakt")
}

</script>

<template>
  <NavBar />
  <div class="sub-sub-hero">
    <button type="button" @click="traeningsforloeb" class="icon-tertiary-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 5L8 12L15 19" class="grey-i"/>
      </svg>
      TILBAGE TIL TRÆNINGSFORLØB
    </button>
    <div class="text-gap-s">
      <p class="t3">TRÆNINGSFORLØB</p>
      <h2>Strong Life</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Træningsforløb til dig der gerne vil have en sundere og mere aktiv livsstil</h3>
        </div>
        <div class="text-gap-l fixed-l">
          <p>Har du besluttet dig for, at du gerne vil have en sundere og mere aktiv livsstil, så giver vores Strong Life træningsforløb dig den bedste start.</p>
          <div class="text-gap-s">
            <p class="t2">Pris</p>
            Strong Start afvikles som PT (personlig træning) timer med din personlige træner, og dine træningstimer aftales fortløbende med din træner.
            <p class="blue-text">12 træningssessioner: 7.995 kr.</p>
          </div>
          <div class="text-gap-s">
            <p class="t2">På Strong Life sætter vi fokus på:</p>
            <p>- Træning: 12 x personlig træning.</p>
            <p>- Kost: Kostvejledning og sundere kostvaner.</p>
            <p>- Livsstil: Hjælp til at ændre vaner og få en sundere og mere aktiv livsstil.</p>
            <p>- Scanning: 3 x kropsscanning - ved opstart, efter 6 træninger og ved forløbets afslutning.</p>
            <p>For at du kan følge de forandringer, der sker med kroppen, så laver vi en kropsscanning, hvor vi måler vægt, fedtprocent, muskelmasse mv. ved opstart, efter 6 træningstimer samt efter 12 træningstimer.</p>
            <p>Foruden en bedre kropssammensætning vil forløbet også give dig større styrke og bedre bevægelighed samt større fysisk og mentalt overskud.</p>
            <p>Efter de 12 træningstimer vil du også have lært en række værktøjer, så du har mulighed for på egen hånd at fortsætte med din “nye” livsstil.</p>
            <p class="blue-text">Fri adgang til centeret er inkluderet i træningsforløbet.</p>
          </div>
        </div>
      </div>
      <div class="action-block">
        <div class="text-gap-l">
          <h3>Information</h3>
          <div class="text-gap-s">
            <p class="t2">Indhold</p>
            <div class="text-gap-s">
                <div class="action-bullets">
                    <p class="t2 blue-text">1</p>
                    <p>Træning: 12 x personlig træningstimer</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">2</p>
                    <p>Kost: Kostvejledning og sundere kostvaner</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">3</p>
                    <p>Scanning: 3 x kropsscanning - ved opstart, efter 6 træninger og ved forløbets afslutning.</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">4</p>
                    <p>Livsstil: Hjælp til at ændre vaner og få en sundere og mere aktiv livsstil</p>
                </div>
            </div>
          </div>
        </div>
        <button type="button" @click="kontakt" class="default-primary-btn stretch">
          KONTAKT OS FOR TILMELDING
        </button>
      </div>
    </div>
    <div class="info-block text-gap-xl">
        <div class="text-gap-s">
            <p class="t3">MEDLEMSKABERNE</p>
            <h3>Her er trænerne på Strong Life</h3>
        </div>
        <div class="team-cards" id="contact-cards">
            <div class="team-card">
                <div class="kristianimg avatar-img-l"></div>
                <div class="text-gap-xs">
                    <p class="t2 blue-text">Kristian Petersen</p>
                    <p class="centered">Personlig træner</p>
                </div>
            </div>
            <div class="team-card">
                <div class="emilieimg avatar-img-l"></div>
                <div class="text-gap-xs">
                    <p class="t2 blue-text">Emilie Stoltenberg</p>
                    <p class="centered">Personlig træner</p>
                </div>
            </div>
            <div class="team-card">
                <div class="madsimg avatar-img-l"></div>
                <div class="text-gap-xs">
                    <p class="t2 blue-text">Mads Wildt-Andersen</p>
                    <p class="centered">Personlig træner</p>
                </div>
            </div>
        </div>
        <button type="button" @click="bookstart" class="icon-tertiary-btn flexend">
            PRØV EN UFORPLIGTENDE TRÆNING
                <!--CHEVRON RIGHT-->
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 5L16 12L9 19" class="chevron grey-i"/>
            </svg>
        </button>
    </div>

    <References class="grey-block" />

    <ContactBlock />

  </div>
  <FooterBlock />
</template>