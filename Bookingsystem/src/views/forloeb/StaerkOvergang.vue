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
      <h2>Stærk Overgang</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Kom igennem overgangsalderen med færre gener og mere overskud</h3>
        </div>
        <div class="text-gap-l fixed-l">
          <p>Stærk Overgang er et personligt træningsforløb på 4, 8 eller 12 gange, hvor du med hjælp fra din personlige træner, der har indsigt i og viden om de problemstillinger, der er forbundet med overgangsalderen.</p>
          <div class="text-gap-xs">
            <p class="t2">På Stærk Overgang sætter vi fokus på:</p>
            <p>- Træningen er tilpasset til dig og de symptomer du oplever</p>
            <p>- Du får hjælp og vejledning af en træner der har stor viden om overgangsalderen</p>
            <p>- Du bliver fortrolig med at træne i et træningscenter</p>
            <p>- Du får hver gang en god træning, der over tid gør dig stærkere, mere mobil og giver dig en større arbejdskapacitet</p>
            <p><br>Din træning bliver afviklet i rolige omgivelser, uden spejle på væggene og blandt et modent publikum.</p>
            <p><br>Det er helt op til dig at beslutte, om du har brug for 4, 8 eller 12 træningstimer, og du vælger selv, hvor ofte du ønsker at træne.</p>
          </div>
          <div class="text-gap-xs">
            <p class="t2">Priser</p>
            <p class="blue-text">4 træningssessioner: 2.995 kr.</p>
            <p class="blue-text">8 træningssessioner: 4.995 kr.</p>
            <p class="blue-text">12 træningssessioner: 6.495 kr.</p>
            <p><br>Den første træningstime er altid gratis, så du har mulighed for at vurdere om træningen er noget for dig, og om Strong4life er et træningscenter, hvor du har lyst til at træne.</p>
            <p><br>Målet er at du ved forløbets afslutning føler dig klædt godt på, til at du kan fortsætte træningen på egen hånd, selvom du selvfølgelig også er meget velkommen til at fortsætte med personlig træning eller på et af vores andre hold.</p>
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
                    <p>Træningen er tilpasset til dig og de symptomer du oplever</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">2</p>
                    <p>Du får hjælp og vejledning af en træner der har stor viden om overgangsalderen</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">3</p>
                    <p>Du bliver fortrolig med at træne i et træningscenter</p>
                </div>
                <div class="action-bullets">
                    <p class="t2 blue-text">4</p>
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
                <div class="emilieimg avatar-img-l"></div>
                <div class="text-gap-xs">
                    <p class="t2 blue-text">Emilie Stoltenberg</p>
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