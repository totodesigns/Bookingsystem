<script setup>
</script>

<template>
    <div class="content-block text-gap-xl">
        <div class="text-gap-s">
            <p class="t3">KONTAKT OS</p>
            <h3 class="fixed-l">Prøv en gratis rundvisning og prøvetræning med os</h3>
        </div>
        <div class="contact-block-content">
            <p class="fixed-m">Oplev vores træningscenter og -fællesskab. Aftal en gratis og uforpligtende tid med Allan eller Ole, så du kan opleve Strong4life med egne øjne og krop.<br><br>Indtast dine oplysninger, så kontakter vi dig!</p>
            <div class="formular form-width text-gap-m fixed-l">
                <div class="form">
                    <label for="fullName">Fulde navn*</label>
                    <input v-model="name" type="text" placeholder="Fx Anders Andersen" id="fullName" class="form-style"/>
                </div>
                <div class="form">
                    <label for="email">Email*</label>
                    <input v-model="email" type="text" placeholder="Fx andersen@gmail.com" id="email" class="form-style"/>
                </div>
                <div class="short-form">
                    <label for="phone">Telefon*</label>
                    <input v-model="phone" type="number" placeholder="xxxxxxxx" id="phone" class="form-style"/>
                </div>
                <div class="form">
                    <label for="message">Er der noget, vi skal vide? (valgfrit)</label>
                    <textarea v-model="message" cols="30" rows="5" placeholder="Skriv her..." id="message" class="form-style"></textarea>
                </div>
                <div class="form">
                    <label for="contactPreference">Hvordan vil du kontaktes?*</label>
                    <select v-model="contactPref" id="contactPreference" class="short-form form-style">
                        <option value="call">På telefon</option>
                        <option value="email">På email</option>
                </select>
                </div>
                <button type="submit" class="default-primary-btn stretch">SEND BESKED</button>
            </div>
        </div>
    </div>
</template>