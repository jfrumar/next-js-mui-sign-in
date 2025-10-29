import ColorModeSelect from "@/app/ui/shared-theme/ColorModeSelect";
import { Box, Button, Typography } from "@mui/material";
import StyledCard from "./StyledCard";
import StyledContainer from "./StyledContainer";

interface Props {
    email: string;
    onClickReset: () => void;
}

export default function Confirmation({ email, onClickReset }: Props) {
    return (
        <StyledContainer direction="column" justifyContent="space-between">
            <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
            <StyledCard variant="outlined">
                <Typography
                    component="h1"
                    variant="h4"
                    sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
                >
                    Signed in
                </Typography>
                <Box>
                    <Typography>You are now signed in as {email}.</Typography>
                </Box>
                <Button variant="outlined" onClick={onClickReset}>Reset</Button>
            </StyledCard>
        </StyledContainer>
    );
}