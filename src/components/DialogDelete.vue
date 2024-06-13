<template>
    <div class="text-center pa-4">
        <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
            <v-card prepend-icon="mdi-map-marker"
                text="This action can't be reverted."
                title="Are you sure you want delete this task?">
                <template v-slot:actions>
                    <v-spacer></v-spacer>

                    <v-btn  @click="taskStore.toogleDelete" variant="elevated" color="red-darken-1">
                        No
                    </v-btn>

                    <v-btn  @click="taskStore.deleteTask" variant="outlined" color="red-darken-1">
                        Yes
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
    dialog: Boolean
})
</script>