<template>
    <div class="text-center pa-4">
        <v-dialog v-model="props.dialog" max-width="400" persistent>
            <v-card prepend-icon="mdi-map-marker">
                <v-card-title>
                    Edit Task
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="props.task.title" label="Title"></v-text-field>
                    <v-text-field v-model="props.task.description" label="Description"></v-text-field>        
                </v-card-text>
                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn @click="$emit('toogle')">
                        Ok
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    dialog: Boolean,
    task: Object
})


</script>
