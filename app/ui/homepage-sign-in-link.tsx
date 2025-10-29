'use client';

import { Login } from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import Link from "next/link";

export default function HomepageSignInLink() {
    const theme = useTheme();

    return (
        <List sx={{
            p: 0,
            borderRadius: 1,
            border: `1px solid ${theme.palette.divider}`
        }}>
            <Link href="/sign-in">
                <ListItem sx={{
                    p: 2,
                    'transition': '0.5s',
                    '&:hover': {
                        backgroundColor: theme.palette.background.paper
                    }
                }}>
                    <ListItemIcon>
                        <Login />
                    </ListItemIcon>
                    <ListItemText primary="Sign In" />
                </ListItem>
            </Link>
        </List>
    );
}