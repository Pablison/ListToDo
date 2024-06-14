<template>
    <div class="alert-notification">
        <v-alert :text="alertStore.text" 
                 :type="alertStore.type" 
                 closable class="animate__animated animate__bounceIn">
        </v-alert>
    </div>
</template>

<script setup>
import 'animate.css';
import { useAlertStore } from "@/stores/alert";

const alertStore = useAlertStore();

</script>

<style scoped>
.alert-notification {
    position: fixed;
    z-index: 1;
    width: 100%;
    bottom: 50px;
    padding: 0 35% 0 35%;
}
</style>
