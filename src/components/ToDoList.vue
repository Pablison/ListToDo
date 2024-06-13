<template>
    <v-text-field clearable label="Add Task" variant="solo-inverted" v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask" :rules="rules">
    </v-text-field>

    <ListTasks />
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import { useTaskStore } from '@/stores/task'
import { onMounted } from 'vue';

const taskStore = useTaskStore();
const rules = [
    (value) => {
        if (!value || value.length >= 5) return true

        return 'You must enter task title with more than 5 characters.'
    },
];

onMounted(() => {
    taskStore.getTasks();
})

</script>