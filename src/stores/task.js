import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore();

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
            if(this.titleTaskCreating.length < 5) return;
            this.tasks.push({
                title: this.titleTaskCreating,
            })
            this.titleTaskCreating = "";
            this.saveLocalData()
            alertStore.notifyalert();
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
            this.saveLocalData()
        },
        toogleEdit(index){
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if(index != null){
                this.indexTaskSelected = index;
            }
            this.saveLocalData()
        },
        saveLocalData(){
            localStorage.setItem('tasks',
                JSON.stringify(this.tasks))
        },
        getTasks(){
            let items = localStorage.getItem('tasks')
            if(items)
                this.tasks = JSON.parse(items); 
        }
    }
})

 