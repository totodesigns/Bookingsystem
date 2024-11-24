<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import NavBar from '@/components/NavBar.vue';
import QuickContact from '@/components/QuickContact.vue';
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';
import FooterBlock from '@/components/Footer.vue';

</script>

<template>
    <NavBar />
    <div class="sub-hero centered">
      <p class="t3 centered">KONTAKT</p>
      <h2>Har du nogle spørgsmål?</h2>
    </div>
    <div class="web-content">
      <ContactBlock class="grey-block" />
      <div class="right-block stretch">
        <div class="right-block-header">
          <p class="t3">KONTAKT OS</p>
          <h3>Du er altid velkommen til at ringe eller skrive!</h3>
        </div>
        <div class="right-block-content">
          <div class="right-block-card">
            <div class="contact-card">
              <div class="allanimg avatar-img-l"></div>
              <div class="text-gap-l">
                <div class="text-gap-s">
                  <div class="text-gap-xs">
                    <p class="body-large blue-text">Allan Frederiksen</p>
                    <p>Medejer</p>
                  </div>
                  <p>Uddannet cand. Scient Idræt og Sundhed</p>
                  <div class="text-gap-xs">
                    <p class="blue-text">28 93 97 80</p>
                    <p class="blue-text">allan@strong4life.dk</p>
                  </div>
                </div>
                <button type="button" @click="bookstart" class="icon-tertiary-btn">
                  LÆS MERE OM ALLAN HER
                    <!--CHEVRON RIGHT-->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5L16 12L9 19" class="chevron grey-i"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="contact-card">
              <div class="oleimg avatar-img-l"></div>
              <div class="text-gap-l">
                <div class="text-gap-s">
                  <div class="text-gap-xs">
                    <p class="body-large blue-text">Allan Frederiksen</p>
                    <p>Medejer</p>
                  </div>
                  <p>Uddannet cand. Scient Idræt og Sundhed</p>
                  <div class="text-gap-xs">
                    <p class="blue-text">28 93 97 80</p>
                    <p class="blue-text">allan@strong4life.dk</p>
                  </div>
                </div>
                <button type="button" @click="bookstart" class="icon-tertiary-btn">
                  LÆS MERE OM ALLAN HER
                    <!--CHEVRON RIGHT-->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M9 5L16 12L9 19" class="chevron grey-i"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <p class="fixed-m">Vi er klar på en uforpligtende snak. Du er også velkommen til at slå et smut forbi centeret og høre os ad over en kop kaffe. Den er på huset!</p>
        </div>
      </div>
    </div>
    <FooterBlock />
</template>