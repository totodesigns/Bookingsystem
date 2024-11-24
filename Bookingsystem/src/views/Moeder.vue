<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import NavBar from '@/components/NavBar.vue';
import QuickContact from '@/components/QuickContact.vue';
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';
import FooterBlock from '@/components/Footer.vue';

let bookstart = () => {
  router.push("/booking")
}

let kontakt = () => {
  router.push("/kontakt")
}

</script>

<template>
    <NavBar />
    <div class="sub-hero centered">
        <p class="t3 centered">ERHVERV</p>
        <h2>Møder og træning</h2>
    </div>
    <div class="web-content">
        <div class="info-block grey-block stretch">
            <div class="text-gap-s info-fixed">
                <p class="t3">HVAD ER DET?</p>
                <h3>Stærke møder og kursusdage med Strong4life</h3>
                <p>Møder med kreativitet og skærpet fokus… hvem kan sige nej til det?</p>
                <p>Uanset om dit møde er internt eller med samarbejdspartnere, så kan det være berigende for både koncentrationen og kreativiteten at flytte mødet ud af huset. Hos os kan du ovenikøbet tilføje en sjov og givende aktivitet, der styrker både mødet og fællesskabet.</p>
            </div>
            <button type="button" @click="bookstart" class="icon-primary-btn">
                PRØV BASE-MEDLEM GRATIS I EN MÅNED
                    <!--CHEVRON RIGHT-->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                </svg>
            </button>
        </div>

        <div class="subscription-block stretch">
            <div class="text-gap-s">
                <p class="t3">MULIGHEDER</p>
                <h2 class="fixed-l">Se dine muligheder for personlig træning her</h2>
            </div>
            <div class="subscriptions">
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Møde og træning</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">249,-</p>
                            <p class="body-large grey-text centered">DKK / person</p>
                        </div>
                    </div>
                    <button type="button" @click="kontakt" class="icon-primary-btn stretch">
                        BESTIL MØDE OG TRÆNING
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>I Strong4life sætter vi turbo på jeres møder, da vi ved at bevægelse øger kreativiteten og giver større koncentration.</p>
                    <p>I vælger selv om det skal være en yogatime, en træningstime med fart over feltet eller noget helt tredje. Før eller efter træningen kan I holde jeres møde i vores flotte, lyse mødelokale og vi sørger for en forfriskning.</p>
                    <p>Uanset hvad, så lover vi jer at det bliver et effektivt møde og en sjov træningstime med masser af smil på læben og kollegialt fællesskab.</p>
                    <div class="text-gap-xs">
                        <p>Indhold</p>
                        <p>- 45-60 min. aktivitet efter eget valg</p>
                        <p>- Brug af mødelokale </p>
                        <p>- Forplejning (morgenmad, frokost, snacks etc.)</p>
                        <p>- Vand, kaffe og te</p>
                    </div>

                </div>
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Kursusdag i bevægelse</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">589,-</p>
                            <p class="body-large grey-text centered">DKK / person</p>
                        </div>
                    </div>
                    <button type="button" @click="kontakt" class="icon-primary-btn stretch">
                        BESTIL KURSUSDAG I BEVÆGELSE
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Afhold en halv eller hel kursusdag i Strong4life, hvor I dagen igennem veksler mellem jeres eget program og fysisk aktivitet.</p>
                    <p>Vi sammensætter aktivitetsprogrammet ud fra jeres ønsker, men det kan f.eks. se ud som nedenstående:</p>
                    <div class="text-gap-xs">
                        <p>Program</p>
                        <p>- 30 min. yoga/meditation, hvor vi lander og tuner ind på dagen</p>
                        <p>- En let morgenmad med rundstykker og lidt sødt</p>
                        <p>- 30 min. frokosttræning, hvor vi lige løfter energien</p>
                        <p>- Frokost</p>
                        <p>- Eget program</p>
                        <p>- 60 min. sjov og effektiv eftermiddagstræning</p>
                        <p>- Hele dagen: Vand, kaffe, te og snacks</p>
                    </div>
                    <p>Halvdagsprogrammet kan starte fra morgenstunden eller I kan møde ind ved frokosttid.</p>
                    <p>Forplejning: Vi har flere samarbejdspartnere, der leverer mad til os, så der er rig mulighed for at kræse ekstra om dine mødedeltagere. Lad os høre dine ønsker, så skræddersyer vi en fantastisk mødedag, som passer perfekt til dig og dit møde.</p>
                </div>
            </div>
            <div class="subscriptions">
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Teammøde og træning</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">800,-</p>
                            <p class="body-large grey-text centered">DKK / træningstime</p>
                        </div>
                    </div>
                    <button type="button" @click="kontakt" class="icon-primary-btn stretch">
                        BESTIL TEAMMØDE OG TRÆNING
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Hold møde og træn på én og samme tid. Vi har flere virksomheder der har valgt at holde deres ugentlige eller månedlige teammøder i Strong4life.</p>
                    <p>Vi sammensætter en træning, hvor der er tid til mødesnak i pauserne mellem øvelserne ligesom I er velkomne til at låne et af vores flotte, lyse mødelokaler.</p>
                    <div class="text-gap-xs">
                        <p>Indhold</p>
                        <p>- 60 min. træningstime med personlig træner</p>
                        <p>- Brug af vores mødefaciliteter før eller efter træningen.</p>
                    </div>
                </div>
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Fyraftensevent</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">229,-</p>
                            <p class="body-large grey-text centered">DKK / person</p>
                        </div>
                    </div>
                    <button type="button" @click="kontakt" class="icon-primary-btn stretch">
                        BESTIL FYRAFTENSEVENT
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Saml dine kollegaer til en sjov og aktiv time i Strong4life. Vi garanterer at der bliver masser af smil på læben.</p>
                    <div class="text-gap-xs">
                        <p>Indhold</p>
                        <p>- 60 min. træningstime</p>
                        <p>- Vand og snacks efter timen</p>
                    </div>

                </div>
            </div>
            <QuickContact />
        </div>

        <References class="grey-block" />

        <ContactBlock />
    </div>
    <FooterBlock />
</template>