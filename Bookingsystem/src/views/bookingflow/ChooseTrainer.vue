<script setup>
    import { ref } from 'vue';
    import MemberForm from '@/components/MemberForm.vue';
    import Allan from '@/components/Trainers/Allan.vue';
    import Ole from '@/components/Trainers/Ole.vue';
    import Emilie from '@/components/Trainers/Emilie.vue';
    import Kristian from '@/components/Trainers/Kristian.vue';
    import Marete from '@/components/Trainers/Marete.vue';
    import Mads from '@/components/Trainers/Mads.vue';
    import { defineProps } from 'vue';

    import allanAvatar from '/public/avatars/allanavatar.jpg';

    const props = defineProps({
        fullName: String,
        contactPref: String,
        phone: Number,
        email: String,
        message: String,
    });
    const wrapper = ref(true);

    const AllanTime = ref(false);
    const OleTime = ref(false);
    const EmilieTime = ref(false);
    const KristianTime = ref(false);
    const MareteTime = ref(false);
    const MadsTime = ref(false);

    const selectedTrainer =ref(null);

    let selectTrainer = (trainer) => {
    selectedTrainer.value = trainer;
    }
    const getTrainerClass = (trainer) => {
    return selectedTrainer.value === trainer ? 'clicked-radio-btn' : 'default-radio-btn';

}
let showTrainerTime = () => {
  wrapper.value = false;
  AllanTime.value = OleTime.value = EmilieTime.value = KristianTime.value = MareteTime.value = MadsTime.value = false;
    if (selectedTrainer.value === "Allan") AllanTime.value = true;
    if (selectedTrainer.value === "Ole") OleTime.value = true;
    if (selectedTrainer.value === "Emilie") EmilieTime.value = true;
    if (selectedTrainer.value === "Kristian") KristianTime.value = true;
    if (selectedTrainer.value === "Marete") MareteTime.value = true;
    if (selectedTrainer.value === "Mads") MadsTime.value = true;
};

const showFormView = ref(false);

let prev = () => {
    showFormView.value = true;
};
</script>

<template>
    <div class="content" v-if="!showFormView">
        <ProgressBar />
        <div class="flow-block" v-if="wrapper">
            <div class="flow-content">
                <div class="flow-header">
                    <p class="t1">Personlige Oplysninger</p>
                    <hr>
                </div>
                <p>Alle vores trænere er uddannet og har en professionel og evidensbaseret tilgang til vejledning i dit forløb. Vi går op i vores forløb skal være personlige, dette betyder at vi har fokus på at vi skal opnå dine mål ved hjælp af et skræddersyet program til dig.</p>
                <div class="choose-card">
                    <p class="t2">Tryk på en træner for at vælge</p>
                    <div class="card-wrapper">
                        <div class="card-btn">
                            <div class="trainer-card">
                                <div class="card-content">
                                    <div class="allanimg avatar-img-s"></div>
                                    <p class="body-large body-bold">Allan</p>
                                    <p class="card-bio">Allan er medstifter af Strong4life og har ...</p>
                                </div>
                                <button class="icon-tertiary-btn">LÆS OM ALLAN</button>
                            </div>
                            <button @click="selectTrainer('Allan')" :class="getTrainerClass('Allan')">
                                Vælg træner
                            </button>
                        </div>
                        <div class="card-btn">
                            <div class="trainer-card">
                                <div class="card-content">
                                    <div class="oleimg avatar-img-s"></div>
                                    <p class="body-large body-bold">Ole</p>
                                    <p class="card-bio">Ole er medstifter af Strong4life og er med til ...</p>
                                </div>
                                <button class="icon-tertiary-btn">LÆS OM OLE</button>
                            </div>
                            <button @click="selectTrainer('Ole')" :class="getTrainerClass('Ole')">
                                Vælg træner
                            </button>
                        </div>
                        <div class="card-btn">
                            <div class="trainer-card">
                                <div class="card-content">
                                    <div class="emilieimg avatar-img-s"></div>
                                    <p class="body-large body-bold">Emilie</p>
                                    <p class="card-bio">Emilie er personlig træner, og specialiserer sig i...</p>
                                </div>
                                <button class="icon-tertiary-btn">LÆS OM EMILIE</button>
                            </div>
                            <button @click="selectTrainer('Emilie')" :class="getTrainerClass('Emilie')">
                                Vælg træner
                            </button>
                        </div>
                        <div class="card-btn">
                            <div class="trainer-card">
                                <div class="card-content">
                                    <div class="kristianimg avatar-img-s"></div>
                                    <p class="body-large body-bold">Kristian</p>
                                    <p class="card-bio">Kristian har en bachelor i Idræt og Sundhed, og...</p>
                                </div>
                                <button class="icon-tertiary-btn">LÆS OM KRISTIAN</button>
                            </div>
                            <button @click="selectTrainer('Kristian')" :class="getTrainerClass('Kristian')">
                                Vælg træner
                            </button>
                        </div>
                        <div class="card-btn">
                            <div class="trainer-card">
                                <div class="card-content">
                                    <div class="madsimg avatar-img-s"></div>
                                    <p class="body-large body-bold">Mads</p>
                                    <p class="card-bio">Mads er personlig træner og fordyber sig i...</p>
                                </div>
                                <button class="icon-tertiary-btn">LÆS OM MADS</button>
                            </div>
                            <button @click="selectTrainer('Mads')" :class="getTrainerClass('Mads')">
                                Vælg træner
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flow-btns" v-if="wrapper">
                <button type="button" @click="prev" class="default-secondary-btn">TILBAGE</button>
                <button :disabled="!selectedTrainer" @click="showTrainerTime" class="default-primary-btn">FORTSÆT</button>
            </div>
        </div>
    </div>
    <MemberForm v-if="showFormView"/>

    <!-- props? -->
    <Allan v-if="AllanTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Ole v-if="OleTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Emilie v-if="EmilieTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Kristian v-if="KristianTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Marete v-if="MareteTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />

    <Mads v-if="MadsTime" 
        :fullName="fullName" 
        :contactPref="contactPref" 
        :phone="phone" 
        :email="email" 
        :message="message" />
</template>