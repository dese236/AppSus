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
        subject: 'OpenWeather',
        body: 'Dear Customer!Thank you for choosing OpenWeatherMap Please confirm your email address to help us ensure your account is always protected.Verify your email For further technical questions and support, please contact us at info@openweathermap.orgWe are looking forward to cooperating with you!Best Regards,OpenWeather team',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'sent',
        isStared: true,
        lables: ['important', 'romantic']
    },
    {
        userName: loggedinUser.fullname,
        id: utilService.makeId(),
        subject: 'alondai1 invited you to Meme Generator v1.1',
        body: ' for Avocode Thank you for choosing Avocode Please confirm that nivii123456@gmail.com is your e-mail address by clicking on the button below or use this link',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'sent',
        isStared: true,
        lables: ['important', 'romantic']
    },
    {
        userName: 'Google Maps APIs',
        id: utilService.makeId(),
        subject: 'Resources to help you succeed!',
        body: 'Dive in with guides, tutorials, and more Whether you’re just getting started or doubling down on your project, there’s an abundance of resources designed to help you to get the most out of Google Maps Platform',
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
        isStared: true,
        lables: ['important', 'romantic']
    },
    {
        userName: 'alondai1',
        id: utilService.makeId(),
        subject: 'alondai1 invited you to Meme Generator v1.1',
        body: 'Hola,alondai1 invited you as a teammate on Meme Generator v1.1 in Zeplin.        Get Started! If you prefer not to use “nivii123456@gmail.com” as your Zeplin email or already have a Zeplin account, please request anotherinvitation to that email from “alondai1@gmail.com ❤️ Zeplin is a desktop app that helps UI designers and frontend developers collaborate efficiently and save time.Let us know if you have any questions. support@zeplin.io Zeplin Crew',
        body: utilService.makeLorem(),
        isRead: false,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
        isStared: true,
        lables: ['important', 'romantic']
    }
    ,
    {
        userName: 'Avocode',
        id: utilService.makeId(),
        subject: 'Confirm your email address‏',
        subject: 'Resources to help you succeed!',
        body: 'Dive in with guides, tutorials, and more Whether you’re just getting started or doubling down on your project, there’s an abundance of resources designed to help you to get the most out of Google Maps Platform', isRead: true,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
        isStared: true,
        lables: ['important', 'romantic']
    }
    ,
    {
        userName: 'Coding Academy',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: 'היי, קורס הבוטקאמפ מתקרב!        תחילת הקורס: יום א 4.7.21 התכנסות ורישום 8:15          תחילת שיעור:  8:30 כאמור, בשלב הראשון בקורס יהיו 2 כיתות.        שובצת לכיתה: Class-1 בהתאם לכך, הזמנו אותךלצאנלים הרלוונטיים בסלאק מצב קישור לשיעור שיתקיים ביום א',
        isRead: true,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
        isStared: false,
        lables: ['important', 'romantic']
    }
    ,
    {
        userName: 'Leumi',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
        isStared: false,
        lables: ['important', 'romantic']
    }

    ,
    {
        userName: 'inbox4',
        id: utilService.makeId(),
        subject: 'Miss you',
        body: utilService.makeLorem(),
        isRead: true,
        sentAt: 1551133930594,
        to: 'user@appsus.com',
        status: 'inbox',
        isStared: true,
        lables: ['important', 'romantic']
    }
]


export const dataSrevice = {
    loggedinUser,
    defaultEmails
}