import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/userRelated/userHandle';
import { 
    Box, 
    Container, 
    Typography, 
    CircularProgress,
    Paper
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch logout action
        dispatch(logoutUser());
        
        // Redirect to homepage after logout
        const timer = setTimeout(() => {
            navigate('/', { replace: true });
        }, 2000);

        return () => clearTimeout(timer);
    }, [dispatch, navigate]);

    return (
        <Container component="main" maxWidth="sm">
            <Box sx={{ 
                minHeight: '100vh', 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Paper elevation={3} sx={{ 
                    padding: 4, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    <LogoutIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                    
                    <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                        Logging Out
                    </Typography>
                    
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        You are being logged out of the system. Please wait...
                    </Typography>
                    
                    <CircularProgress size={40} />
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                        Redirecting to homepage...
                    </Typography>
                </Paper>
            </Box>
        </Container>
    );
};

export default Logout;
