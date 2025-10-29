'use server';

import z from "zod";

const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

const initialState = {};


export async function validateSignIn(_: unknown, formData: FormData | null) {
    // await new Promise(r => setTimeout(r, 20000));

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

    // Passed validation
    // TODO: Check the credentials

    return {
        success: true,
        values: formValues,
    };
}