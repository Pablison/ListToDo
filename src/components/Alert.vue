<template>
    <div class="alert-notification">
        <v-alert
            text="Task created success"
            type="success"
            closable
            class="animate__animated animate__bounceIn"   >
        </v-alert>
    </div>
</template>

<script setup>
    import 'animate.css';
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
