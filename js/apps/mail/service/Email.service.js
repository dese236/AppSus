import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";
import { dataSrevice } from "./data.js"

export const EmailService = {
    query,
    getLoggedUser,
    createEmail,
    removeEmail,
    toggleStar,
    readEmail,
    toggleIsRead,
    getEmailById,
    sortEmails
}

let gEmails = []
const KEY = 'Emails'
let gOrder = true
_createEmails();



function query(filterBy) {
    debugger
    gEmails = storageService.loadFromStorage(KEY)
    if (filterBy) {
        let { status, isRead, isStared, lables, txt } = filterBy
        status = status ? status : ''

        if (status) {
            var emailsToShow = gEmails.filter(email =>
                email.status === status
            )
        }
        if (isStared) {
            var emailsToShow = gEmails.filter(email =>
                email.isStared === true && email.status !== 'trash'
            )
        }
        if (txt) {
            emailsToShow = emailsToShow.filter(email =>
                email.body.toUpperCase().includes(txt) || email.subject.toUpperCase().includes(txt) || email.userName.toUpperCase().includes(txt)
            )
        }
        if (isRead && isRead !== 'ALL') {
            emailsToShow = emailsToShow.filter(email =>
                email.isRead + '' === isRead.toLowerCase()
            )
        }
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
    email.sentAt = Math.floor(Date.now() / 1000)
    email.to = 'momo@momo.com'
    email.isStared = false
    email.status = 'sent'
    email.lables = ['important', 'romantic']
    email.userName = dataSrevice.loggedinUser.fullname
    email.id = utilService.makeId()
    gEmails.unshift(email)
    _saveEmailsToStorage()
    return Promise.resolve()
}

function removeEmail(emailId) {

    const emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails[emailIdx].status = 'trash';
    _saveEmailsToStorage()
    return Promise.resolve();
}

function toggleStar(emailId) {
    const emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails[emailIdx].isStared = !gEmails[emailIdx].isStared
    _saveEmailsToStorage()
    return Promise.resolve();
}


function readEmail(emailId) {
    const emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails[emailIdx].isRead = true
    _saveEmailsToStorage()
    return Promise.resolve();

}
function toggleIsRead(emailId) {
    const emailIdx = gEmails.findIndex(email => email.id === emailId)
    gEmails[emailIdx].isRead = !gEmails[emailIdx].isRead
    _saveEmailsToStorage()
    return Promise.resolve();

}


function getEmailById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}



function sortEmails(elSortBy) {
    gOrder = !gOrder
    debugger

    if (elSortBy === 'name') {

        gEmails.sort(function (email1, email2) {
            var emailA = email1.userName.toUpperCase();
            var emailb = email2.userName.toUpperCase()
            if (gOrder) {
                if (emailA > emailb) return 1
                if (emailA < emailb) return -1
                return 0;
            }
            else {
                if (emailA < emailb) return 1
                if (emailA > emailb) return -1
                return 0;
            }
        });

    }
    else {

        if (elSortBy === 'date')
             gEmails.sort((email1, email2) => email1.date - email2.date)
    }
    _saveEmailsToStorage()
    return Promise.resolve();
}
