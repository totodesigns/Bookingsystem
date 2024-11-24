<script setup>
import { useRouter } from 'vue-router';

import NavBar from "@/components/NavBar.vue";
import FooterBlock from "@/components/Footer.vue";
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';

const router = useRouter();

let holdtraening = () => {
  router.push("/holdtraening")
}

let kontakt = () => {
  router.push("/kontakt")
}

</script>

<template>
  <NavBar />
  <div class="sub-sub-hero">
    <button type="button" @click="holdtraening" class="icon-tertiary-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 5L8 12L15 19" class="grey-i"/>
      </svg>
      TILBAGE TIL HOLDTRÆNING
    </button>
    <div class="text-gap-s">
      <p class="t3">HOLDTRÆNING</p>
      <h2>Strong Senior</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Styrketræning målrettet til seniorer</h3>
        </div>
        <div class="text-gap-s fixed-l">
          <p>Hvis du gerne vil bevare dit fysiske overskud til langt oppe i årene, så du kan holde til at lege med børnebørnene, ordne hus og have eller gå og cykle længere ture, så er det vigtigt med god bevægelighed, stor styrke og en god arbejdskapacitet.</p>
          <p>En Strong Senior træningstime er derfor bygget op omkring mobilitets-, styrke og konditionstræning, og du vil i løbet af få uger kunne mærke en betydelig fremgang og et større overskud i din hverdag.</p>
          <p>Træningen foregår på hold med 4-12 deltagere, og under kyndig vejledning af en vores dygtige personlige trænere. Selvom du træner på et hold er træningen individuelt tilpasset, således du træner de øvelser og med den belastning, der passer til lige netop dig.</p>
          <p>Vi lægger stor vægt på at opbygge et stærkt træningsfællesskab og at gøre træningen sjov og inspirerende. Så efter en times god træning er der også mulighed for at nyde en god kop kaffe.</p>
          <p><br>Med Strong Senior får du:</p>
          <p class="blue-text">– 1 times ugentlig holdtræning med personlig træner<br>– Hjælp og vejledning til hjemmetræning og en aktiv hverdag</p>

        </div>
      </div>
      <div class="action-block">
        <div class="text-gap-l">
          <h3>Information</h3>
          <div class="text-gap-s">
            <p class="t2">Træningstider</p>
            <div class="text-gap-xs">
              <p>Mandag: 09:30 - 10:30</p>
              <p>Tirsdag 09:30 - 10:30</p>
            </div>
          </div>
          <div class="text-gap-s">
            <p class="t2">Pris</p>
            <div class="text-gap-xs">
              <p>Inkluderet i BASE-medlemskab</p>
            </div>
          </div>
          <div class="text-gap-s">
            <p class="t2">Varighed</p>
            <div class="text-gap-xs">
              <p>1 time</p>
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
            <h3>Her er trænerne på Strong Senior-holdet</h3>
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