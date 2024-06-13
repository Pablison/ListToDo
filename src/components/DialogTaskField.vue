<template>
    <div class="text-center pa-4">
        <v-dialog v-model="taskStore.showDialogTaskFields" max-width="400" persistent>
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

                    <v-btn @click="taskStore.toogleEdit()" color="primary-darken-1" variant="elevated">
                        Ok
                    </v-btn>
                </template>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore();
const props = defineProps({
    task: Object
})


</script>
