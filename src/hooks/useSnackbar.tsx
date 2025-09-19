import Snackbar from '@mui/material/Snackbar';
import { useState } from 'react';

const useSnackbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    // message: string = 'This Snackbar will be dismissed in 5 seconds.'
    // duration: number = 5000
    const SnackbarComponent = ({
        message,
        duration,
    }: {
        message?: string;
        duration?: number;
    }) => (
        <Snackbar
            open={open}
            autoHideDuration={duration || 5000}
            onClose={handleClose}
            message={message || 'This Snackbar will be dismissed in 5 seconds.'}
        />
    );
    return {
        SnackbarComponent,
        open,
        setOpen,
        close: handleClose,
    };
};

export default useSnackbar;
