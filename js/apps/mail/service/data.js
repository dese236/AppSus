import { utilService } from "../../../services/util.service.js";

//const criteria = {
//    status: 'inbox/sent/trash/draft',
//    txt: 'puki', // no need to support complex text search
//    isRead: true, // (optional property, if missing: show all)
//    isStared: true, // (optional property, if missing: show all)
//    lables: ['important', 'romantic'] // has any of the labels
//   }

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
        to: 'user@appsus.com',
        status: 'sent',
        isRead: false,
        isStared: true, 
        lables: ['important', 'romantic'] 
    },
    {
        userName: loggedinUser.fullname,
        id: utilService.makeId(),
        subject: 'SENT BY YOU!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'sent',
        isRead: true,
        isStared: true, 
        lables: ['important', 'romantic'] 
    },
    {
        userName: 'inbox1',
        id: utilService.makeId(),
        subject: 'Miss you!',
        body: 'Would love to catch up sometimes',
        isRead: false,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: true, 
        lables: ['important', 'romantic'] 
    },
    {
        userName: 'inbox2',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: true, 
        lables: ['important', 'romantic'] 
    }
    ,
    {
        userName: 'niv',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: true, 
        lables: ['important', 'romantic'] 
    }
    ,
    {
        userName: 'inbox3',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: false, 
        lables: ['important', 'romantic'] 
    }
    ,
    {
        userName: 'inbox4',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: false, 
        lables: ['important', 'romantic'] 
    }

    ,
    {
        userName: 'inbox4',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'Would love to catch up sometimes',
        isRead: true,
        sentAt: 1551133930594,
        to: 'momo@momo.com',
        status: 'inbox',
        isRead: true,
        isStared: true, 
        lables: ['important', 'romantic'] 
    }
]


export const dataSrevice = {
    loggedinUser,
    defaultEmails
}