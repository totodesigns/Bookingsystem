<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

import NavBar from '@/components/NavBar.vue';
import QuickContact from '@/components/QuickContact.vue';
import References from '@/components/References.vue';
import ContactBlock from '@/components/ContactBlock.vue';
import FooterBlock from '@/components/Footer.vue';

let booking = () => {
  router.push('/booking');
}

let kontakt = () => {
  router.push('/kontakt');
}

</script>

<template>
    <NavBar />
    <div class="sub-hero centered">
        <p class="t3 centered">MEDLEMSKABER</p>
        <h2>Prøv en gratis personlig træning</h2>
    </div>
    <div class="web-content">
        <div class="subscription-block grey-block stretch">
            <div class="text-gap-s">
                <p class="t3">MULIGHEDER</p>
                <h2 class="fixed-l">Se vores medlemsskaber her</h2>
            </div>
            <div class="subscriptions">
                <div class="tag-bar">
                    <p class="body-large white-text centered" id="popular">POPULÆRT</p>
                    <div class="subscription-card">
                        <div class="text-gap-s">
                            <h3>Base</h3>
                            <div class="text-gap-xs">
                                <p class="t1 blue-text centered">495,-</p>
                                <p class="body-large grey-text centered">DKK / måned</p>
                            </div>
                        </div>
                        <p class="centered">Kommer med en 30 dages gratis prøveperiode! Tryk på knappen og book en tid med det samme.</p>
                        <div class="text-gap-l stretch">
                            <button type="button" @click="booking" class="icon-primary-btn stretch">
                                PRØV BASE GRATIS
                                    <!--CHEVRON RIGHT-->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                                </svg>
                            </button>
                            <button type="button" @click="kontakt" class="icon-tertiary-btn centered">
                                BLIV MEDLEM SOM BASE NU
                                    <!--CHEVRON RIGHT-->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5L16 12L9 19" class="chevron grey-i"/>
                                </svg>
                            </button>
                        </div>
                        <div class="benefits">
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri træning i Strong4life alle ugens dage fra 06:00 – 24:00</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri kaffe, te og frugt samt lån af håndklæde</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri deltagelse på Strong Cykling (spinning)</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri deltagelse på åbne styrkehold</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Medlemsrabat på personlige træningstimer</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#8C8C8C"/>
                                </svg>
                                <p>1 times personlig træning om måneden</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#8C8C8C"/>
                                </svg>
                                <p>Kostvejledning</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#8C8C8C"/>
                                </svg>
                                <p>Superviseret træning</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#8C8C8C"/>
                                </svg>
                                <p>Løbende tilpassede træningsplaner</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2C17.53 2 22 6.47 22 12C22 17.53 17.53 22 12 22C6.47 22 2 17.53 2 12C2 6.47 6.47 2 12 2ZM15.59 7L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41L15.59 7Z" fill="#8C8C8C"/>
                                </svg>
                                <p>Løbende sundshedstest</p>
                            </div>
                        </div>
                        <p class="caption centered">Kommer med 1x gratis træningstime med kvalificeret personlig træner. Book din tid samtidig med din tilmelding ved at trykke på knappen.</p>
                    </div>
                </div>
                <div class="tag-bar">
                    <p class="body-large white-text centered" id="normal-tag">TIL DE SERIØSE</p>
                    <div class="subscription-card">
                        <div class="text-gap-s">
                            <h3>Peak</h3>
                            <div class="text-gap-xs">
                                <p class="t1 blue-text centered">995,-</p>
                                <p class="body-large grey-text centered">DKK / måned</p>
                            </div>
                        </div>
                        <p class="centered">Bedst til dig, som ved, hvad du vil!<br>Kommer med 1x gratis træningstime.</p>
                        <div class="text-gap-l stretch">
                            <button type="button" @click="kontakt" class="icon-primary-btn stretch">
                                BLIV MEDLEM SOM PEAK
                                    <!--CHEVRON RIGHT-->
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                                </svg>
                            </button>
                        </div>
                        <div class="benefits">
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri træning i Strong4life alle ugens dage fra 06:00 – 24:00</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri kaffe, te og frugt samt lån af håndklæde</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri deltagelse på Strong Cykling (spinning)</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Fri deltagelse på åbne styrkehold</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Medlemsrabat på personlige træningstimer</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>1 times personlig træning om måneden</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Kostvejledning</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Superviseret træning</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Løbende tilpassede træningsplaner</p>
                            </div>
                            <div class="benefit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM10.5 16.1925L6.75 12.4425L7.9425 11.25L10.5 13.8075L16.0575 8.25L17.2545 9.4395L10.5 16.1925Z" fill="#329409"/>
                                </svg>
                                <p>Løbende sundshedstest</p>
                            </div>
                        </div>
                        <p class="caption centered">Kommer med 1x gratis træningstime med kvalificeret personlig træner. Kontakt os ved at ringe eller sende en mail for at høre nærmere.</p>
                    </div>
                </div>
            </div>
            <QuickContact />
        </div>
        <div class="info-block">
            <div class="text-gap-s info-fixed">
                <p class="t3">MEDLEMSKABERNE</p>
                <h3>I vores forskellige medlemskaber får du opfyldt forskellige træningsbehov</h3>
            </div>
            <div class="text-gap-s info-fixed">
                <p class="t2">Base</p>
                <p>I ”Base” får du adgang til vores velindrettede træningscenter i Odense alle ugens dage fra 06:00 – 24:00 samt mulighed for at være med på alle vores åbne hold (yoga, spinning og styrke). Dette træningsmedlemskab er i høj grad til dig, der selv kan tage ansvaret for din egen træning, og som gerne vil deltage på træningshold sammen med andre. Mange af vores medlemmer kombinerer fx denne pakke med en månedlig eller kvartalsvis personlig træning for fintuning og justering.</p>
            </div>
            <div class="text-gap-s info-fixed">
                <p class="t2">Peak</p>
                <p>I ”Peak” får du superviseret personlig træning, som betyder, at du altid har adgang til at få korrigeret og optimeret din træning. Derudover hjælper vi dig med en personlig træningsplan, som bliver justeret efter dit behov samt kostvejledning. Vi står desuden altid til rådighed online, ligesom du løbende vil kunne blive sundhedstestet.</p>
            </div>
            <button type="button" @click="kontakt" class="icon-primary-btn">
                PRØV EN UFORPLIGTENDE TRÆNING
                    <!--CHEVRON RIGHT-->
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 5L16 12L9 19" class="chevron white-i"/>
                </svg>
            </button>
        </div>

        <References class="grey-block" />

        <ContactBlock />
    </div>
    <FooterBlock />
</template>