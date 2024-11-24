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
      <h2>Yoga</h2>
    </div>
  </div>
  <div class="web-content">
    <div class="detail-block grey-block">
      <div class="text-gap-l">
        <div class="text-gap-s">
          <p class="t3">HVAD ER DET?</p>
          <h3>Yoga, mental balance og ro</h3>
        </div>
        <div class="text-gap-l fixed-l">
          <p>I Strong4life er yogaen i udogmatisk og uhøjtidelig – Vi ønsker at hjælpe og inspirere til, at du kan mærke yogaens evne til at bidrage til fysisk velvære og mental balance og ro. Vi tilbyder to forskellige klasser:</p>
          <div class="text-gap-xs">
            <p class="t2">Hatha-flow</p>
            <p class="blue-text">Mandag kl. 17:00 - 18:15</p>
            <p>Undervisningen er inspireret af vinyasa-yoga, hvor vi gennem flydende bevægelser arbejder med hele kroppen. Stillingerne kommer i forlængelse af hinanden uden pauser, og du vil opleve en naturlig varme i kroppen og sved på panden. Desuden arbejder vi med balanceøvelser og omvendte stillinger, klassen er således mere fysisk udfordrende, men der tilbydes altid modifikationer eller alternative stillinger, så alle kan være med.</p>
          </div>
          <div class="text-gap-xs">
            <p class="t2">Blid-yoga (strækhold)</p>
            <p class="blue-text">Torsdag kl. 18:10 - 18:55</p>
            <p>Klassens stillinger foregår primært på alle fire, siddende og liggende, hvor vi gennem dybe og intense stræk arbejder hele kroppen igennem. Her er mulighed for at praktisere nærvær, lytte til kroppen og finde ro gennem bevægelse.</p>
          </div>
          <div class="text-gap-xs">
            <p class="t2">Praktisk info</p>
            <p>Som medlem i Strong4life er det gratis at deltage på det ene eller begge hold. Hvis du ikke er medlem er prisen 750 kr. for at være med.</p>
            <p>Vil du vide mere eller har du lyst til at være med, så kontakt Ole Stougaard på <span class="blue-text"> 51 94 24 06 / ole@strong4life.dk.</span></p>
          </div>
        </div>
      </div>
      <div class="action-block">
        <div class="text-gap-l">
          <h3>Information</h3>
          <div class="text-gap-s">
            <p class="t2">Træningstider</p>
            <div class="text-gap-xs">
              <p>Mandag: 17:00-18:15 (Hatha-flow)</p>
              <p>Torsdag: 18:10-18:55 (Blid yoga)</p>
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
                <div class="mareteimg avatar-img-l"></div>
                <div class="text-gap-xs">
                    <p class="t2 blue-text">Marete Vandmose</p>
                    <p class="centered">Yogalærer</p>
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