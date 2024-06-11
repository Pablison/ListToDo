<template>
    <v-text-field clearable label="Add Task" variant="solo-inverted" v-model="taskStore.titleTaskCreating"
        @keyup.enter="taskStore.addTask"></v-text-field>

    <ListTasks />
</template>

<script setup>
import ListTasks from './ListTasks.vue';
import {useTaskStore} from '@/stores/task'

const taskStore = useTaskStore();

</script>