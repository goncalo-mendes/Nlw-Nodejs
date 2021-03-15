import express from 'express';

const app = express();

app.listen(3333, () => console.log('UP!'))


// interface DataSendEmail{
//     for: string;
//     id: string;
//     subject: string;
//     text: string;
// }


// function sendEmail({for, id, subject, text}: DataSendEmail) {
//     console.log(for,id,subject,text);
// }

// class SendEmailtoUser {
//     send(){
//         sendEmail({
//             for: "goncalo@gmail.com",
//             id: "65464",
//             subject: "ola",
//             text: "tudas"});
//     }
// }