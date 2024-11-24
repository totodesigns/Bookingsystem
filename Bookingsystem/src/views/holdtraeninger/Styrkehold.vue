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
          <p>Vores styrkehold er bygget op, så du i løbet af en træningstime får styrket alle de vigtigste muskelgrupper og får trænet hele kroppen.</p>
          <p><br>Styrketimens opbygning:</p>
          <p class="blue-text">– Opvarmning med fokus på mobilitet og bevægelighed<br>– Styrketræning; hele kroppen styrkes<br>- Finisher hvor du får pulsen op og hvor du kan tonse lidt igennem</p>
          <p>Alle kan være med på et styrkehold, og de enkelte øvelser bliver tilpasset, så de passer til dit aktuelle træningsniveau (træningserfaring, styrke, skader etc.).</p>
          <p>Din træner holder altid øje med din teknik og hjælper dig med korrektioner og fejlretning, hvis der er behov for det.</p>
          <p>I og med at fællesskabet er en vigtig drivkraft for, at du kommer afsted til træning, vil du foruden sved på panden også altid få et smil på læben.</p>
        </div>
      </div>
      <div class="action-block">
        <div class="text-gap-l">
          <h3>Information</h3>
          <div class="text-gap-s">
            <p class="t2">Træningstider</p>
            <div class="text-gap-xs">
              <p>Mandag: 16:30 - 17:30</p>
              <p>Onsdag 17:00 - 18:00</p>
              <p>Torsdag 17:00 - 18:00</p>
              <p>Torsdag 18:00 - 19:00</p>
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
            <h3>Her er trænerne på Styrkeholdet</h3>
        </div>
        <div class="team-cards" id="contact-cards">
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
        <button type="button" @click="kontakt" class="icon-tertiary-btn flexend">
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