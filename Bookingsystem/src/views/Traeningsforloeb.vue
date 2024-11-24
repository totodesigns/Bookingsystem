<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import NavBar from '@/components/NavBar.vue';
import QuickContact from '@/components/QuickContact.vue';
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';
import FooterBlock from '@/components/Footer.vue';

let strongstart = () => {
  router.push("/strongstart")
}

let stronglife = () => {
  router.push("/stronglife")
}

let staerkovergang
 = () => {
  router.push("/staerkovergang")
}


</script>

<template>
    <NavBar />
    <div class="sub-hero centered">
        <p class="t3 centered">TRÆNINGSFORLØB</p>
        <h2>Opnå dine mål med langsigtet resultater</h2>
    </div>
    <div class="web-content">
        <div class="info-block grey-block stretch">
            <div class="text-gap-s info-fixed">
                <p class="t3">HVAD ER DET?</p>
                <h3>Temabaserede træningsforløb, der rammer både bredt og specifikt</h3>
                <p>Vores træningsforløb vil oftest have et temabaseret fokus, hvor der er et specifikt fokus, som rammer en bred men defineret målgruppe. F.eks. Strong Start, der er målrettet til dig, der ikke tidligere har trænere styrketræning, hvorfor der er fokus på teknik, træningsstruktur og programopbygning. Stærk Overgang, der er målrettet kvinder i overgangsalderen. Eller StrongLife, som henvender sig til alle, der gerne vil igang med en sundere og mere aktiv livsstil.</p>
                <p>I STRONG4LIFE finder du træningsforløb, som kører året rundt, mens andre forløb er sæsonbetonet. Ser du et forløb, som du er nysgerrig på, så kontakt os og få en uforpligtende snak om forløbet med os. Og savner du et specifikt forløb, så kontakt os, så kan vi sikkert skræddersy et forløb til dit behov.</p>
            </div>
            <button type="button" @click="bookstart" class="icon-tertiary-btn">
                LÆS OM VORES VÆRDIER
                    <!--CHEVRON RIGHT-->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" class="chevron grey-i"/>
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
                        <h3 class="centered">Strong Start</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">2995,-</p>
                            <p class="body-large grey-text centered">DKK / måned</p>
                        </div>
                    </div>
                    <p class="centered">Lær at træne i et træningscenter</p>
                    <button type="button" @click="strongstart" class="icon-primary-btn stretch">
                        LÆS MERE OM STRONG START
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>StrongStart er et personligt træningsforløb over 4, 8 eller 12 gange, til dig der gerne vil i gang med at træne i et trænings/fitnesscenter, men som har begrænset eller ingen erfaring med styrketræning.
                        <br><br>Du bliver introduceret til en bred vifte af træningsøvelser
                        <br><br>Du lærer korrekt teknik i alle disse øvelser
                        <br><br>Du bliver fortrolig med at træne i et træningscenter</p>
                </div>
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Strong Life</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">7995,-</p>
                            <p class="body-large grey-text centered">DKK / måned</p>
                        </div>
                    </div>
                    <p class="centered">Sundere og mere aktiv livsstil</p>
                    <button type="button" @click="stronglife" class="icon-primary-btn stretch">
                        LÆS MERE OM STRONG LIFE
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Har du besluttet dig for at du gerne vil have en sundere og mere aktiv livsstil, så giver vores Strong Life træningsforløb dig den bedste start.
                        <br><br>På Strong Life-forløbet sætter vi fokus på:
                        <li>Træning</li>
                        <li>Kost</li>
                        <li>Livsstil</li>
                        <br>Forløbet strækker sig over 12 x træning med en personlig træner.</p>
                </div>
            </div>
            <div class="subscriptions">
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Stærk Overgang</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">2995,-</p>
                            <p class="body-large grey-text centered">DKK / måned</p>
                        </div>
                    </div>
                    <p class="centered">Styrketræning for kvinder i overgangsalderen</p>
                    <button type="button" @click="staerkovergang" class="icon-primary-btn stretch">
                        LÆS MERE OM STÆRK OVERGANG
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Stærk Overgang er et personligt træningsforløb på 4, 8 eller 12 gange, hvor du med hjælp fra din personlige træner, der har indsigt i og viden om de problemstillinger, der er forbundet med overgangsalderen.
                        <br><br>Træningen er tilpasset til dig og de symptomer du oplever
                        <br><br>Du får hjælp og vejledning af en træner, der har stor viden om overgangsalderen.</p>
                </div>
            </div>
            <QuickContact />
        </div>

        <References class="grey-block" />

        <ContactBlock />
    </div>
    <FooterBlock />
</template>