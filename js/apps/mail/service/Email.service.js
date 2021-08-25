import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";
import { dataSrevice } from "./data.js"

export const EmailService = {
    query,
    getLoggedUser,
    createEmail,
    removeEmail
}

let gEmails = []
const KEY = 'Emails'

_createEmails();

function query(filterBy) {
    if (filterBy) {
        let { status, isRead, isStared, lables } = filterBy
        status = status ? status : ''
        if (status) {
            debugger
            var emailsToShow = gEmails.filter(email =>
                email.status === status
            )
            return Promise.resolve(emailsToShow)
        }

        if (isStared) {
            var emailsToShow = gEmails.filter(email =>
                email.isStared === true
            )
            return Promise.resolve(emailsToShow)
        }
        //isRead = isRead ? isRead : true
        //isStared = isStared ? true : false

        var emailsToShow = gEmails.filter(email =>
            email.status === status
        )

        //const emailsToShow = gEmails.filter(email => {
        // return   (email.status === status && email.isRead === isRead) || (isStared && email.isStared === true)
        //})
        return Promise.resolve(emailsToShow)
    }

    else {
        var emailsToShow = gEmails.filter(email =>
            email.status === 'inbox'
        )
    }
    return Promise.resolve(emailsToShow);
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

function getLoggedUser() {
    return dataSrevice.loggedinUser
}


function createEmail(email) {

    email.id = utilService.makeId()
    email.isRead = false
    email.sentAt = new Date()
    this.status = 'inbox'
    email.to = 'momo@momo.com'
    email.isStared = false
    email.status = 'inbox'
    email.lables = ['important', 'romantic']
    email.userName = 'popo'

    email.id = utilService.makeId()
    gEmails.unshift(email)
    _saveEmailsToStorage()
    return Promise.resolve()
}

function removeEmail(emailId) {
    debugger
    const emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails[emailIdx].status = 'trash';
    _saveEmailsToStorage()
    return Promise.resolve();
}