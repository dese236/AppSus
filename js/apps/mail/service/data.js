import { utilService } from "../../../services/util.service.js";



const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}

const defaultEmails = [
    {
        userName: loggedinUser.fullname,
        id: utilService.makeId(),
        subject: 'SENT BY YOU!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com'
    },
    {
        userName: loggedinUser.fullname,
        id: utilService.makeId(),
        subject: 'SENT BY YOU!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com'
    },
    {
        userName: 'momo',
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    },
    {
        userName: 'momo',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com'
    }
]


export const dataSrevice = {
    loggedinUser,
    defaultEmails
}