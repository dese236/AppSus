import { storageService } from "../../../services/storage.service.js";
import { dataSrevice } from "./data.js"

export const EmailService = {
    query,
    getLoggedUser
}

let gEmails = []
const KEY = 'Emails'

_createEmails();

function query(filterBy) {
    debugger
    if (filterBy) {
        let { status, isRead, isStared, lables } = filterBy
        status = status ? status : 'inbox'
        isRead = isRead ? isRead : true
        isStared = isStared ? true : false

        const emailsToShow = gEmails.filter(email => (email.status === status &&
            email.isRead === isRead) || (isStared && email.isStared === true))
        return Promise.resolve(emailsToShow)
    }
    return Promise.resolve(gEmails);
}


//const criteria = {
//  status: 'inbox/sent/trash/draft',
//  txt: 'puki', // no need to support complex text search
//  isRead: true, // (optional property, if missing: show all)
//  isStared: true, // (optional property, if missing: show all)
//  lables: ['important', 'romantic'] // has any of the labels
// }





//function query(){
//    return Promise.resolve(gEmails)
//}

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

function getLoggedUser() {
    return dataSrevice.loggedinUser
}