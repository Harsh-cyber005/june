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

async function sendMail(m: Mail): Promise<void> {
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
        console.log('Mail sent successfully!');
    } catch (err) {
        console.error('Error sending mail:', err);
    }
}

async function Mail(rq: Request): Promise<void> {
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
        await sendMail(m);
    } catch (err) {
        console.error('Error:', err);
    }
}

export default Mail;