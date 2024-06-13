<template>
    <div>
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>General</v-list-subheader>

            <v-list-item v-for="(task, index) in taskStore.tasks" :key="index" :value="index" @click="taskStore.toogleDoneTask(index)">
                <template v-slot:prepend="{ }">

                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="task.done"></v-checkbox-btn>
                    </v-list-item-action>
                </template>

                <v-list-item-title>{{ task.title }}</v-list-item-title>

                <v-list-item-subtitle>
                    {{ task.description }}
                </v-list-item-subtitle>

                <template v-slot:append>
                    <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn color="grey-lighten" icon="mdi-dots-vertical" variant="text" v-bind="props">

                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item value="1" @click="taskStore.toogleEdit(index)">
                                <v-list-item-title>Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="taskStore.toogleDelete(index)">
                                <v-list-item-title>Excluir</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                </template>
            </v-list-item>

        </v-list>
        <DialogTaskField @toogle="taskStore.toogleEdit" :task="taskStore.tasks[taskStore.indexTaskSelected]" />
        <DialogDelete />
    </div>
</template>

<script setup>
import DialogTaskField from "@/components/DialogTaskField.vue"
import DialogDelete from "@/components/DialogDelete.vue"
import { useTaskStore } from '@/stores/task'

const taskStore = useTaskStore();

</script>