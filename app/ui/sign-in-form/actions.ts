'use server';

import z from "zod";

const signInSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

export async function validateSignIn(_: unknown, formData: FormData) {
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

    // Success
    console.log(data);

    return {
        success: true,
    };
}