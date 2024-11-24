<script setup>
import { useRouter } from 'vue-router';

import NavBar from "@/components/NavBar.vue";
import FooterBlock from "@/components/Footer.vue";

const router = useRouter();

let medlemskaber = () => {
  router.push("/medlemskaber")
}

let member = () => {
  router.push("/member")
}

</script>

<template>
  <NavBar />
  <div class="sub-sub-hero">
    <button type="button" @click="medlemskaber" class="icon-tertiary-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15 5L8 12L15 19" class="grey-i"/>
      </svg>
      TILBAGE TIL MEDLEMSKABER
    </button>
    <div class="text-gap-s">
      <p class="t3">BOOKING AF PERSONLIG TRÆNING</p>
      <h2>Prøv en gratis personlig træning</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l fixed-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Til dig, der vil prøve det højeste kvalitet</h3>
        </div>
        <div class="text-gap-s">
          <p>Som Base-medlem får du 1x gratis træningstime og konsultation med kvalificeret personlig træner. Dette hjælper dig med at komme godt igang med et tilpasset træningsforløb, der tager højde for dine behov.</p>
          <p>Klik på knappen til højre for at komme igang. Efter du har valgt en tid, vil du blive kontaktet af vores personale snarest muligt via dit foretrukne kommunikationsmiddel.</p>
        </div>
      </div>
      <div class="action-block">
        <div class="text-gap-l">
          <h3>Book en tid</h3>
          <div class="text-gap-s">
            <p class="t2">Sådan foregår det:</p>
            <div class="text-gap-xs">
              <p>1. Indtast dine oplysninger og vælg, hvordan du vil kontaktes</p>
              <p>2. Vælg din ønsket træner</p>
              <p>3. Vælg din ønsket tid</p>
              <p>4. Send din registrering og afvent kontakt</p>
            </div>
          </div>
        </div>
        <button type="button" @click="member" class="default-primary-btn stretch">
          REGISTRÉR DIN BOOKING HER
        </button>
      </div>
    </div>
  </div>
  <FooterBlock />
</template>
