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
    getEmailById
}

let gEmails = []
const KEY = 'Emails'

_createEmails();



function query(filterBy) {
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
    email.sentAt = Math.floor(Date.now() /1000)
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


function getEmailById(emailId)
{
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}

        //isRead = isRead ? isRead : true
        //isStared = isStared ? true : false

        //var emailsToShow = gEmails.filter(email =>
        //    email.status === status
        //)

        //const emailsToShow = gEmails.filter(email => {
        // return   (email.status === status && email.isRead === isRead) || (isStared && email.isStared === true)
        //})