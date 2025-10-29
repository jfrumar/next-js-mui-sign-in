'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';

import AppTheme from '@/app/ui/shared-theme/AppTheme';
import ColorModeSelect from '@/app/ui/shared-theme/ColorModeSelect';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ForgotPassword from './ForgotPassword';

import StyledContainer from './StyledContainer';
import { StyledCard } from './StyledCard';
import { SignInFormStateProps } from '../page';

export default function SignIn({ state, formAction, pending, ...props }: SignInFormStateProps & { disableCustomTheme?: boolean; }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const emailError = !!state?.errors?.email;
    const emailErrorMessage = state?.errors?.email?.join('. ');
    const passwordError = !!state?.errors?.password;
    const passwordErrorMessage = state?.errors?.password?.join('. ');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <StyledContainer direction="column" justifyContent="space-between">
                <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
                <StyledCard variant="outlined">
                    <Typography
                        component="h1"
                        variant="h4"
                        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                    >
                        Sign in
                    </Typography>
                    <form action={formAction}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                                gap: 2,
                            }}
                        >
                            <FormControl>
                                <FormLabel htmlFor="email">Email</FormLabel>
                                <TextField
                                    error={emailError}
                                    helperText={emailErrorMessage}
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    autoComplete="email"
                                    autoFocus
                                    required
                                    fullWidth
                                    variant="outlined"
                                    color={emailError ? 'error' : 'primary'}
                                    defaultValue={state?.values?.email}
                                    slotProps={
                                        {
                                            input: {
                                                sx: [emailError && {
                                                    borderColor: theme.palette.error.main
                                                }]
                                            }
                                        }
                                    }
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <TextField
                                    error={passwordError}
                                    helperText={passwordErrorMessage}
                                    name="password"
                                    placeholder="••••••"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    required
                                    fullWidth
                                    variant="outlined"
                                    color={passwordError ? 'error' : 'primary'}
                                    defaultValue={state?.values?.password}
                                    slotProps={
                                        {
                                            input: {
                                                sx: [passwordError && {
                                                    borderColor: theme.palette.error.main
                                                }]
                                            }
                                        }
                                    }
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <ForgotPassword open={open} handleClose={handleClose} />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={pending}
                                sx={{
                                    '&:disabled': {
                                        background: theme.palette.grey[400],
                                        borderColor: theme.palette.grey[500],
                                        color: 'black',
                                    }
                                }}
                            >
                                {pending ? 'Signing in...' : 'Sign in'}
                            </Button>
                            <Link
                                component="button"
                                type="button"
                                onClick={handleClickOpen}
                                variant="body2"
                                sx={{ alignSelf: 'center' }}
                            >
                                Forgot your password?
                            </Link>
                        </Box>
                    </form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <Typography sx={{ textAlign: 'center' }}>
                        </Typography>
                    </Box>
                </StyledCard>
            </StyledContainer>
        </AppTheme>
    );
}
