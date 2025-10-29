'use client';

import { Link } from "@/app/ui/Link";
import { Breadcrumbs, Container, Grid } from "@mui/material";

import { startTransition, useActionState, useState } from "react";
import { validateSignIn } from './actions';
import Confirmation from "./components/Confirmation";
import SignInForm from "./components/Form";
import { useRouter } from "next/navigation";

const useSignInFormState = () => {
    const [state,
        formAction,
        pending,
    ] = useActionState(validateSignIn, null);

    return {
        state,
        formAction,
        pending,
    };
};

export type SignInFormStateProps = ReturnType<typeof useSignInFormState>;

export default function SignIn() {
    const breadcrumbs = [{ text: 'Home', link: '/' }, { text: 'Sign In', link: '/sign-in' }];
    const useSignInFormStateProps = useSignInFormState();

    const { state } = useSignInFormStateProps;

    const onClickReset = async () => {
        startTransition(() => useSignInFormStateProps.formAction(null));
    };

    return (
        <Container>
            <Grid container direction="column">
                <Grid p={2}>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs.map(crumb =>
                            <Link key={crumb.link} href={crumb.link}>{crumb.text}</Link>
                        )}
                    </Breadcrumbs>
                </Grid>
                <Grid>
                    {state?.success && state.values.email ?
                        (<Confirmation onClickReset={onClickReset} email={state?.values?.email} />) :
                        (<SignInForm {...useSignInFormStateProps} />)}
                </Grid>
            </Grid>
        </Container >
    );
}