import { fetchBody } from '../constants/Email';
import nodemailer from 'nodemailer';

interface Mail {
    from: string;
    to: string;
    subject: string;
    body: string;
    pass: string;
    fn?: string;
    ln?: string;
}

interface Request {
    email: string;
    password: string;
    fn?: string;
    ln?: string;
}

interface Response {
    message: string;
    error: string;
}

async function sendMail(m: Mail): Promise<Response> {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: m.from,
            pass: m.pass,
        },
    });
    if(!m.fn) m.fn = 'User';
    if(!m.ln) m.ln = '';
    m.subject = m.subject.replace('$$fn$$', m.fn).replace('$$ln$$', m.ln);
    m.body = m.body.replace('$$fn$$', m.fn).replace('$$ln$$', m.ln);
    const mailOptions = {
        from: m.from,
        to: m.to,
        subject: m.subject,
        html: m.body,
    };
    try {
        await transporter.sendMail(mailOptions);
        return {"message":"Mail sent successfully!", "error":""};
    } catch (err) {
        const errStr = JSON.stringify(err);
        return {"message":"Error sending mail", "error": errStr};
    }
}

async function Mail(rq: Request): Promise<Response> {
    try {
        const subject = "Hello User";
        const body = await fetchBody();
        const password = rq.password;
        const from = "mrx.zttg@gmail.com";
        const to = rq.email;
        const fn = rq.fn;
        const ln = rq.ln;

        const m: Mail = {
            from,
            to,
            subject,
            body,
            pass: password,
            fn,
            ln,
        };
        const res = await sendMail(m);
        return res;
    } catch (err) {
        const errStr = JSON.stringify(err);
        return {"message":"Error sending mail", "error": errStr};
    }
}

export default Mail;