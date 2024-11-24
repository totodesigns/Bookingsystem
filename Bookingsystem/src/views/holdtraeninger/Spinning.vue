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
      <h2>Spinning</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Intelligent Cykling</h3>
        </div>
        <div class="text-gap-s fixed-l">
          <p>Spinning i Strong4life er cykeltimer, hvor alle kan være med. Der er fokus på effektiv konditionstræning, og træningen giver et stort udbytte, hvad enten du vil bruge den som et supplement til din styrketræning, eller du er cykelrytter, der gerne vil forbedre præstationerne på landevejen.</p>
          <p>Vi cykler på den nyeste generation af BodyBike+ cykler, og på cykeltimerne anvender vi Intelligent Cykling til vores program.</p>
          <p>Med Intelligent Cykling bliver niveauet og belastningen tilpasset til din aktuelle form. Det betyder, at uanset om du er begynder eller en erfaren cykelrytter, kan du køre med på alle vores timer, og få et optimalt træningsudbytte.</p>
        </div>
      </div>
      <div class="action-block">
        <div class="text-gap-l">
          <h3>Information</h3>
          <div class="text-gap-s">
            <p class="t2">Træningstider</p>
            <div class="text-gap-xs">
              <p>Tirsdag: 06.15 - 07.15 (Anette Nibe)</p>
              <p>Tirsdag: 17.00 - 18.00 (Ole Stougaard)</p>
              <p>Onsdag: 09.30 - 10.30 (Thorbjørn Vilholm)</p>
              <p>Onsdag: 17.00 - 18.00 (Jann Jensen)</p>
              <p>Torsdag: 16.45 - 17.45 (Michelle Lang)</p>
              <p>Fredag: 06.15 - 07.15 (Anette Nibe)</p>
              <p>Lørdag: 09.00 - 10.00 (Turnus)</p>
              <p>Lørdag: 10.00 - 11.00 (Turnus)</p>
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
            <h3>Her er trænerne på Spinning-holdet</h3>
        </div>
        <div class="team-cards" id="contact-cards">
            <div class="team-card">
                <div class="oleimg avatar-img-l"></div>
                <div class="text-gap-xs">
                    <p class="t2 blue-text">Ole Stougaard</p>
                    <p class="centered">Medejer</p>
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