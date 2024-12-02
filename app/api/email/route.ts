import { z } from 'zod';
import Mail from '@/app/_utils/emailer';
import { Password_Constant } from '@/app/constants/texts';

const emailSchema = z.object({
    email: z.string().email("Invalid email address").min(1, "Email is required"),
});

export async function POST(request: Request) {
    try {
        const { email } = await request.json();
        const result = emailSchema.safeParse({ email });
        if (!result.success) {
            return new Response(
                JSON.stringify({ message: 'Validation error', errors: result.error.errors }),
                { status: 400, headers: { 'Content-Type': 'application/json' } }
            );
        }
        const password = Password_Constant;

        const res = await Mail({ email, password });
        if (res.error){
            return new Response(
                JSON.stringify({ message: 'Failed to process email', email: "Mail not sent" }),
                { status: 500, headers: { 'Content-Type': 'application/json' } }
            );
        }
        return new Response(
            JSON.stringify({ message: 'Success', email: res.message }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error(error);
        return new Response(
            JSON.stringify({ message: 'Failed to process email', email: "Mail not sent" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
