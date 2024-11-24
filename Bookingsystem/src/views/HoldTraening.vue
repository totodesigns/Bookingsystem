<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import NavBar from '@/components/NavBar.vue';
import QuickContact from '@/components/QuickContact.vue';
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';
import FooterBlock from '@/components/Footer.vue';

let strongsenior = () => {
  router.push('/strongsenior');
}

let styrkehold = () => {
  router.push('/styrkehold');
}

let yoga = () => {
  router.push('/yoga');
}

let spinning = () => {
  router.push('/spinning');
}

</script>

<template>
    <NavBar />
    <div class="sub-hero centered">
        <p class="t3 centered">HOLDTRÆNING</p>
        <h2>Bliv en del af fællesskabet</h2>
    </div>
    <div class="web-content">

        <div class="subscription-block grey-block stretch">
            <div class="text-gap-s">
                <p class="t3">MULIGHEDER</p>
                <h2 class="fixed-l">Læs om vores forskellige træningshold</h2>
            </div>
            <div class="subscriptions">
                <div class="subscription-card">
                    <h3 class="centered">Strong Senior</h3>
                    <button type="button" @click="strongsenior" class="icon-primary-btn stretch">
                        LÆS MERE OM STRONG SENIOR
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <div class="sub-card-text-height">
                        <p>Hvis du gerne vil bevare dit fysiske overskud til langt oppe i årene, så du kan holde til at lege med børnebørnene, ordne hus og have eller gå og cykle længere ture, så er det vigtigt med god bevægelighed, stor styrke og en god arbejdskapacitet.</p>
                        <p>Du vil få:</p>
                        <li>Bedre mobilitet</li>
                        <li>Mere styrke</li>
                        <li>God arbejdskapacitet</li>
                    </div>
                </div>
                <div class="subscription-card">
                    <h3 class="centered">Styrkehold</h3>
                    <button type="button" @click="styrkehold" class="icon-primary-btn stretch">
                        LÆS MERE OM STYRKEHOLD
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <div class="sub-card-text-height">
                        <p>Vores styrkehold er bygget op, så du i løbet af en træningstime får styrket alle de vigtigste muskelgrupper og får trænet hele kroppen.</p>
                        <p>Styrketimens opbygning:</p>
                        <li>Opvarmning med fokus på mobilitet og bevægelighed</li>
                        <li>Styrketræning – hele kroppen styrkes</li>
                        <li>Finisher hvor du får pulsen op og hvor du kan tonse lidt igennem</li>
                    </div>
                </div>
            </div>
            <div class="subscriptions">
                <div class="subscription-card">
                    <h3 class="centered">Yoga</h3>
                    <button type="button" @click="yoga" class="icon-primary-btn stretch">
                        LÆS MERE OM YOGA
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <div class="sub-card-text-height">
                        <p>Mærk yogaens evne til at bidrage til fysisk velvære og mental balance og ro.</p>
                        <p>Undervisningen udspringer af hatha-yogaen og vinyasa-flow.</p>
                    </div>

                </div>
                <div class="subscription-card">
                    <h3 class="centered">Spinning</h3>
                    <button type="button" @click="spinning" class="icon-primary-btn stretch">
                        LÆS MERE OM SPINNING
                            <!--CHEVRON RIGHT-->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                        </svg>
                    </button>
                    <p class="sub-card-text-height">Spinning i Strong4life er cykeltimer, hvor alle kan være med. Der er fokus på effektiv konditionstræning, og træningen giver et stort udbytte, hvad enten du vil bruge den som et supplement til din styrketræning, eller du er cykelrytter, der gerne vil forbedre præstationerne på landevejen.</p>
                </div>
            </div>
            <QuickContact />
        </div>

        <References />

        <ContactBlock class="grey-block" />
    </div>
    <FooterBlock />
</template>