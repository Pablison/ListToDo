import { defineStore } from 'pinia'
import { useAlertStore } from '@/stores/alert';

const alertStore = useAlertStore();

export const useTaskStore = defineStore('task', {
    state: () => ({
        tasks: [],
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
                done: false
            })
            this.titleTaskCreating = "";
            this.saveLocalData()
            alertStore.notifyAlertCreated();
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
            this.saveLocalData();
            alertStore.notifyAlertDeleted();
        },
        updateTask(){
            this.saveLocalData()
            this.toogleEdit();
            alertStore.notifyAlertUpdated();
        },
        toogleEdit(index){
            this.showDialogTaskFields = !this.showDialogTaskFields;
            if(index != null){
                this.indexTaskSelected = index;
            }
              
        },
        saveLocalData(){
            localStorage.setItem('tasks',
                JSON.stringify(this.tasks))
        },
        getTasks(){
            let items = localStorage.getItem('tasks')
            if(items)
                this.tasks = JSON.parse(items); 
        },
        toogleDoneTask(index){
            this.tasks[index].done = !this.tasks[index].done;
            this.saveLocalData(); 
        }
    }
})

 