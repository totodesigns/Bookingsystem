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
      <h2>Strong Start</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Kom godt i gang med at træne i et træningscenter</h3>
        </div>
        <div class="text-gap-l fixed-l">
          <p>Strong Start er et personligt træningsforløb over 4, 8 eller 12 gange, til dig der gerne vil i gang med at træne i et trænings/fitnesscenter, men som har begrænset eller ingen erfaring med styrketræning.</p>
          <p>Har du besluttet dig for, at du gerne vil i gang med at træne regelmæssigt, så du kan blive stærkere, mere mobil og have større overskud i hverdagen, så giver vores Strong Start træningsforløb dig den bedste start.</p>
          <div class="text-gap-s">
            <p class="t2">På Strong Start sætter vi fokus på:</p>
            <p>- Du bliver introduceret til en bred vifte af træningsøvelser</p>
            <p>- Du lærer korrekt teknik i alle disse øvelser</p>
            <p>- Du bliver fortrolig med at træne i et træningscenter</p>
            <p>- Du lærer hvordan du opbygger et godt træningsprogram</p>
            <p>- Du får hver gang en god træning, der over tid gør dig stærkere, mere mobil og giver dig en større arbejdskapacitet</p>
          </div>
          <div class="text-gap-s">
            <p class="t2">Priser</p>
            Strong Start afvikles som PT (personlig træning) timer med din personlige træner, og dine træningstimer aftales fortløbende med din træner.
            <p class="blue-text">4 træningssessioner: 2.995 kr.</p>
            <p class="blue-text">8 træningssessioner: 4.995 kr.</p>
            <p class="blue-text">12 træningssessioner: 6.495 kr.</p>
            <p>Den første træningstime er altid gratis, så du har mulighed for at vurdere om træningen er noget for dig, og om Strong4life er et træningscenter, hvor du har lyst til at træne.</p>
            <p>Du bliver introduceret til en bred vifte af træningsøvelser, og du lærer korrekt teknik i disse. Du får en god forståelse for, hvorfor vi sammensætter træningen som vi gør, og du lærer hvordan du kan sammensætte et effektivt træningsprogram.</p>
            <p>Samtidig får du hver gang en god gang træning, og du vil hurtigt kunne mærke, at du bliver stærkere, få mere bevægelighed samt får en større arbejdskapacitet.</p>
            <p>Målet er at du ved forløbets afslutning føler dig klædt godt på, til at du kan fortsætte træningen på egen hånd, selvom du selvfølgelig også er meget velkommen til at fortsætte med personlig træning eller på et af vores andre hold.</p>
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
                    <p>Du bliver introduceret til en bred vifte af træningsøvelser</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">2</p>
                    <p>Du lærer korrekt teknik i alle disse øvelser</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">3</p>
                    <p>Du bliver fortrolig med at træne i et træningscenter</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">4</p>
                    <p>Du lærer hvordan du opbygger et godt træningsprogram</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">5</p>
                    <p>Du får hver gang en god træning, der over tid gør dig stærkere, mere mobil og giver dig en større arbejdskapacitet</p>
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
            <h3>Her er trænerne på Stærk Overgang</h3>
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