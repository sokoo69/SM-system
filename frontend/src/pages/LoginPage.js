import React, { useState } from 'react';
import { 
    Container, 
    Paper, 
    TextField, 
    Button, 
    Typography, 
    Box, 
    Alert,
    CircularProgress 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import DeveloperFooter from '../components/DeveloperFooter';

const LoginPage = ({ role }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser, error } = useSelector(state => state.user);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const fields = { email, password, role };
        dispatch(loginUser(fields, role));
        
        // Simulate loading for better UX
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    // Redirect if user is already logged in
    React.useEffect(() => {
        if (currentUser) {
            navigate(`/${role}/dashboard`);
        }
    }, [currentUser, navigate, role]);

    const getRoleIcon = () => {
        switch (role) {
            case 'Admin':
                return '👨‍💼';
            case 'Teacher':
                return '👨‍🏫';
            case 'Student':
                return '👨‍🎓';
            default:
                return '👤';
        }
    };

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
                    width: '100%'
                }}>
                    <Box sx={{ mb: 3, textAlign: 'center' }}>
                        <Typography variant="h3" sx={{ mb: 1 }}>
                            {getRoleIcon()}
                        </Typography>
                        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold' }}>
                            {role} Login
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Welcome back! Please sign in to your account.
                        </Typography>
                    </Box>

                    {error && (
                        <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            sx={{ mb: 3 }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            sx={{ 
                                mt: 2, 
                                mb: 2, 
                                py: 1.5,
                                fontSize: '1.1rem'
                            }}
                        >
                            {loading ? (
                                <CircularProgress size={24} color="inherit" />
                            ) : (
                                `Sign In as ${role}`
                            )}
                        </Button>
                        
                        <Box sx={{ textAlign: 'center', mt: 2 }}>
                            <Button
                                variant="text"
                                onClick={() => navigate('/')}
                                sx={{ textTransform: 'none' }}
                            >
                                Back to Home
                            </Button>
                        </Box>
                        
                        {role === 'Admin' && (
                            <Box sx={{ textAlign: 'center', mt: 2 }}>
                                <Typography variant="body2" color="text.secondary">
                                    Don't have an account?{' '}
                                </Typography>
                                <Button
                                    variant="text"
                                    onClick={() => navigate('/Adminregister')}
                                    sx={{ textTransform: 'none' }}
                                >
                                    Register as Admin
                                </Button>
                            </Box>
                        )}
                    </Box>
                </Paper>
            </Box>
            <DeveloperFooter />
        </Container>
    );
};

export default LoginPage;
