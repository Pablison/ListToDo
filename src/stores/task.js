import { defineStore } from 'pinia'

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [
            {
                title: "Estudar Vue",
                description: "Estudos com Vue e Vuetify"
            },
            {
                title: "Documentação",
                description: "Estudos com Vue e Vuetify"
            }
        ],
        titleTaskCreating: "",
        showDialogDelete: false,
        indexTaskSelected: 0,
        showDialogTaskFields: false
    }),
    actions: {
        addTask(){
            this.tasks.push({
                title: this.titleTaskCreating,
            })
            this.titleTaskCreating = "";
        },
        toogleDelete(index){
            this.showDialogDelete = !this.showDialogDelete
            if(index != null){
                this.indexTaskSelected = index
            }
        },
        deleteTask(){
            this.tasks.splice(this.indexTaskSelected, 1)
            this.toogleDelete();
        },
        toogleEdit(index){
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if(index != null){
                this.indexTaskSelected = index;
            }
        }
    }
})

 