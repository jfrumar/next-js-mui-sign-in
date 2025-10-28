import { Breadcrumbs, Container, Grid } from "@mui/material";
import Link from "next/link";

import SignInForm from "@/app/ui/sign-in-form";

export default function SignIn() {
    const breadcrumbs = [{ text: 'Home', link: '/' }, { text: 'Sign In', link: '/sign-in' }];


    return (
        <Container>
            <Grid container direction="column">
                <Grid>
                    <Breadcrumbs separator="›" aria-label="breadcrumb">
                        {breadcrumbs.map(crumb =>
                            <Link key={crumb.link} href={crumb.link}>{crumb.text}</Link>
                        )}
                    </Breadcrumbs>
                </Grid>
                <Grid>
                    <SignInForm />
                </Grid>
            </Grid>
        </Container >
    );
}