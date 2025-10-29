'use server';

import { cookies } from "next/headers";
import jwt, { SignOptions } from 'jsonwebtoken';
import z from "zod";

const STATIC_FAKE_PASSWORD = 'seekrit';
const STATIC_FAKE_JWT_SECRET = 'server-seekrit';

function signJwt(payload: object): string {
    const options: SignOptions = { expiresIn: '1H' };
    return jwt.sign(payload, STATIC_FAKE_JWT_SECRET, options);
}

const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(6).refine(val => val === STATIC_FAKE_PASSWORD, {
        error: 'Invalid password'
    }
    ),
});

const initialState = {
    success: false,
    errors: null,
    values: {
        email: null,
        password: null,
    },
};


export async function validateSignIn(_: unknown, formData: FormData | null) {
    if (formData === null) {
        return initialState;
    }

    const formValues = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    };

    const { success, error, data } = signInSchema.safeParse(formValues);

    if (!success) {
        return {
            errors: z.flattenError(error).fieldErrors,
            values: formValues,
        };
    }

    // Passed validation & auth
    const token = signJwt({
        iss: 'https://localhost:3000',
        email: data.email,
        id: data.email
    });

    // Set JWT as HTTP-only cookie
    (await cookies()).set({
        name: 'token',
        value: token,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60, // 1 hour
    });

    return {
        success: true,
        values: formValues,
    };
}