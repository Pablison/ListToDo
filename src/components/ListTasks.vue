<template>
    <div>
        <v-list lines="three" select-strategy="classic">
            <v-list-subheader>General</v-list-subheader>

            <v-list-item v-for="(task, index) in props.tasks" :key="index" :value="index">
                <template v-slot:prepend="{ isActive }">

                    <v-list-item-action start>
                        <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
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
                            <v-list-item value="1" @click="toogleEdit(index)">
                                <v-list-item-title >Editar</v-list-item-title>
                            </v-list-item>
                            <v-list-item value="2" @click="toogleDelete(index)">
                                <v-list-item-title>Excluir</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                </template>
            </v-list-item>

        </v-list>
        <DialogTaskField :dialog="showDialogTaskFields" @toogle="toogleEdit" :task="tasks[indexTaskSelected]"/>
        <DialogDelete :dialog="showDialogDelete"  @toogleDelete="toogleDelete" @deleteTask="deleteTask"/>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import DialogTaskField from "@/components/DialogTaskField.vue"
import DialogDelete from "@/components/DialogDelete.vue"

const props = defineProps({
    tasks: Object
})

const indexTaskSelected = ref(0);
const showDialogTaskFields = ref(false);

const toogleEdit = (index) => {
    showDialogTaskFields.value = !showDialogTaskFields.value
    if(index != null){
        indexTaskSelected.value = index
    }
}

const showDialogDelete = ref(false)
const toogleDelete = (index) => {
    showDialogDelete.value = !showDialogDelete.value
    if(index != null){
        indexTaskSelected.value = index
    }
}

const deleteTask = () =>{
    props.tasks.splice(indexTaskSelected.value, 1)
    toogleDelete();
}

</script>