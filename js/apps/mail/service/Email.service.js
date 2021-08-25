import { storageService } from "../../../services/storage.service.js";
import { dataSrevice } from "./data.js"

export const EmailService = {
    query,
    getLoggedUser
}

let gEmails = []
const KEY = 'Emails'

_createEmails();

function query(){
    return Promise.resolve(gEmails)
}

function _createEmails() {
    let loadedEmails = storageService.loadFromStorage(KEY) || []
    if (!loadedEmails || !loadedEmails.length) {
        loadedEmails = dataSrevice.defaultEmails
    }
    gEmails = loadedEmails;
    _saveEmailsToStorage()
}


function _saveEmailsToStorage() {
    storageService.saveToStorage(KEY, gEmails)
}

function getLoggedUser(){
   return dataSrevice.loggedinUser
}