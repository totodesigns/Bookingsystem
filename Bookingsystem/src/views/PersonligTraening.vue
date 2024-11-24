<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import NavBar from '@/components/NavBar.vue';
import QuickContact from '@/components/QuickContact.vue';
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';
import FooterBlock from '@/components/Footer.vue';

let bookstart = () => {
  router.push('/bookstart');
}

</script>

<template>
    <NavBar />
    <div class="sub-hero centered">
        <p class="t3 centered">PERSONLIG TRÆNING</p>
        <h2>Nå dine mål med en personlig træner</h2>
    </div>
    <div class="web-content">
        <div class="info-block grey-block stretch">
            <div class="text-gap-s info-fixed">
                <p class="t3">FORDELE</p>
                <h3>Personlig træning får dig til at lykkedes med din sundhed og dine mål</h3>
                <p>Der er mange grunde til at vælge personlig træning. Mange af dem, som vi laver træning for, har oplevet et eller flere af følgende ting:</p>
                <li>Du ved ikke, hvordan din træning skal sammensættes og udføres for at give mest mulig effekt</li>
                <li>Du ønsker inderligt at ændre livsstil, men du ved ikke, hvor du skal begynde</li>
                <li>Du har aldrig trænet før</li>
                <li>Du er ikke motiveret for træning</li>
                <li>Det føles som en jungle at navigere i hele sundheds- og træningsdebatten</li>
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
                        <h3 class="centered">1:1</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">2995,-</p>
                            <p class="body-large grey-text centered">DKK / måned</p>
                        </div>
                    </div>
                    <p class="centered">Ugentlig personlig træning for 1</p>
                    <button type="button" @click="" class="icon-primary-btn stretch">
                        BOOK 1:1 TRÆNING
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>1:1 træningssessioner varer 1 time. Her får du din helt egen træner, som hjælper dig på sporet af en sund og aktiv livsstil, hvor du på en realistisk måde kan nå dine målsætninger. Du sætter målet for træningen og det eventuelle videre forløb. Vores træner klarer resten.</p>
                </div>
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">1:2</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">2995,-</p>
                            <p class="body-large grey-text centered">DKK / måned pr. person</p>
                        </div>
                    </div>
                    <p class="centered">Ugentlig personlig træning for 1</p>
                    <button type="button" @click="" class="icon-primary-btn stretch">
                        BOOK 1:2 TRÆNING
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Med personlig træning for 2 har du mulighed for at træne sammen med en veninde eller kammerat. I vil få jeres helt egen personlige træner, som sørger for at give jer en sjov, motiverende og effektiv træningstime 1 x om ugen. Med i dette tilbud får du også løbende sundhedstest (måling af fedtmasse og muskelmasse).</p>
                </div>
            </div>
            <div class="subscriptions">
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Gruppetræning 1</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">995,-</p>
                            <p class="body-large grey-text centered">DKK / måned</p>
                        </div>
                    </div>
                    <p class="centered">1 gang om ugen</p>
                    <button type="button" @click="" class="icon-primary-btn stretch">
                        BOOK GRUPPETRÆNING 1
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Gruppetræning er et lukket hold med min 4 og maks 10 deltagere. I vil få tilknyttet jeres helt egen personlige træner, som vil stå for 1 træningssession om ugen. Derudover får du fri adgang til træningscentret, hvor du kan træne selv. Med i dette tilbud får du også løbende sundhedstest (måling af fedtmasse og muskelmasse).</p>
                </div>
                <div class="subscription-card">
                    <div class="text-gap-s">
                        <h3 class="centered">Gruppetræning 2</h3>
                        <div class="text-gap-xs centered">
                            <p class="t1 blue-text centered">1995,-</p>
                            <p class="body-large grey-text centered">DKK / måned</p>
                        </div>
                    </div>
                    <p class="centered">Ugentlig personlig træning for 1</p>
                    <button type="button" @click="" class="icon-primary-btn stretch">
                        BOOK 1:2 TRÆNING
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p>Gruppetræning er et lukket hold med min 4 og maks 10 deltagere. I vil få tilknyttet jeres helt egen personlige træner, som vil stå for 2 træningssessioner om ugen. Derudover får du fri adgang til træningscentret, hvor du kan træne selv. Med i dette tilbud får du også løbende sundhedstest (måling af fedtmasse og muskelmasse).</p>
                </div>
            </div>
            <p class="body-large blue-text centered">Forhør dig om mulighederne for medlemsrabat hos Allan eller Ole.</p>
            <QuickContact />
        </div>
        <div class="info-block grey-block stretch">
            <div class="text-gap-s info-fixed">
                <p class="t3">PERSONLIG TRÆNING I ODENSE</p>
                <h3>Sådan foregår træningen</h3>
                <p>En stor del af din succes med personlig træning afhænger af din træner. Du skal finde en personlig træner, der forstår dine behov, og som du føler, at du kan få en god relation til. En personlig træning, der kan sætte sig ind i dine behov, og som du har lyst til at svede sammen med, giver de bedste forudsætninger for et vellykket samarbejde.</p>
                <p>Når du skal vælge en personlig træner, så er der også nogle generelle ting, som du kan have for øje: Hvilken uddannelse har træneren? Hvilke resultater bliver du stillet i sigte? Har træneren erfaring med behov, der ligner dine? Og er den træning, som I planlægger sammen, langtidsholdbar?</p>
                <p>I STRONG4LIFE har vi alle relevante universitetsuddannelser. Vi reklamerer ikke med “six-pack på 8 uger”-forløb, men laver træning, der skaber langvarige resultater. Vi har erfaring med alt fra elitesport og Ironman til vægttab til styrkeforøgelse og til forhøjning af generel sundhed og trivsel. Når vi planlægger træning, så sørger vi for, at træningen er realistisk for dig – også i mere end bare 8 uger.</p>
                <p>Er vi et match? Kontakt os, så tager vi en uforpligtende snak – gerne fulgt op af et besøg i vores træningscenter – og finder ud af det. </p>
            </div>
            <button type="button" @click="bookstart" class="icon-tertiary-btn">
                LÆS OM VORES VÆRDIER
                    <!--CHEVRON RIGHT-->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" class="chevron grey-i"/>
                </svg>
            </button>
        </div>

        <References />

        <ContactBlock class="grey-block" />
    </div>
    <FooterBlock />
</template>