// Utilities
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', {
  state: () => ({
    showAlert: false,
    type: "error",
    text: "teste!"
  }),
  actions:{
    notifyalert(){
        this.showAlert = true;
        setTimeout(()=>{
            this.showAlert = false;
        },3000)
    },
    notifyAlertCreated(){
        this.type = "success";
        this.text = "Task created success!"
        this.notifyalert();
    },
    notifyAlertDeleted(){
        this.type = "warning";
        this.text = "Task deleted!"
        this.notifyalert();
    },
    notifyAlertUpdated(){
        this.type = "info";
        this.text = "Task updated!"
        this.notifyalert();
    }
  }
})
