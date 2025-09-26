import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, Grid, Paper, Fade, Grow, Slide } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeveloperFooter from '../components/DeveloperFooter';

const Homepage = () => {
    const navigate = useNavigate();
    const [visibleElements, setVisibleElements] = useState({
        hero: false,
        features: false,
        login: false
    });

    useEffect(() => {
        // Trigger animations on page load
        const timer1 = setTimeout(() => setVisibleElements(prev => ({ ...prev, hero: true })), 100);
        const timer2 = setTimeout(() => setVisibleElements(prev => ({ ...prev, features: true })), 300);
        const timer3 = setTimeout(() => setVisibleElements(prev => ({ ...prev, login: true })), 500);
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    const features = [
        {
            icon: <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'School Management',
            description: 'Comprehensive system for managing all aspects of school operations'
        },
        {
            icon: <PeopleIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Student & Teacher Portal',
            description: 'Dedicated portals for students and teachers to access their information'
        },
        {
            icon: <AssignmentIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            title: 'Attendance & Grades',
            description: 'Track attendance, manage grades, and monitor student progress'
        }
    ];

    return (
        <Box sx={{ minHeight: '100vh', bgcolor: 'grey.50' }}>
            <Container maxWidth="lg">
                {/* Hero Section */}
                <Fade in={visibleElements.hero} timeout={1000}>
                    <Box sx={{ 
                        textAlign: 'center', 
                        py: 8,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        borderRadius: 3,
                        mb: 6,
                        transform: 'translateY(0)',
                        transition: 'all 0.6s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }
                    }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                            School Management System
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
                            Streamline your school operations with our comprehensive management platform
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                            <Button 
                                variant="contained" 
                                size="large" 
                                onClick={() => navigate('/choose')}
                                sx={{ 
                                    bgcolor: 'white', 
                                    color: 'primary.main',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': { 
                                        bgcolor: 'grey.100',
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }
                                }}
                            >
                                Get Started
                            </Button>
                            <Button 
                                variant="outlined" 
                                size="large" 
                                onClick={() => navigate('/chooseasguest')}
                                sx={{ 
                                    borderColor: 'white', 
                                    color: 'white',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': { 
                                        borderColor: 'white', 
                                        bgcolor: 'rgba(255,255,255,0.1)',
                                        transform: 'scale(1.05)',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                                    }
                                }}
                            >
                                Explore as Guest
                            </Button>
                        </Box>
                    </Box>
                </Fade>

                {/* Features Section */}
                <Slide in={visibleElements.features} direction="up" timeout={800}>
                    <Box>
                        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
                            Key Features
                        </Typography>
                        <Grid container spacing={4} sx={{ mb: 6 }}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Grow in={visibleElements.features} timeout={1000 + (index * 200)}>
                                        <Paper 
                                            elevation={3} 
                                            sx={{ 
                                                p: 4, 
                                                textAlign: 'center', 
                                                height: '100%',
                                                transform: 'scale(1)',
                                                transition: 'all 0.4s ease-in-out',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    transform: 'scale(1.05) translateY(-5px)',
                                                    elevation: 8,
                                                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                                                }
                                            }}
                                        >
                                            <Box sx={{ 
                                                mb: 2,
                                                transform: 'scale(1)',
                                                transition: 'all 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scale(1.2) rotate(5deg)',
                                                }
                                            }}>
                                                {feature.icon}
                                            </Box>
                                            <Typography variant="h5" component="h3" gutterBottom>
                                                {feature.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {feature.description}
                                            </Typography>
                                        </Paper>
                                    </Grow>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Slide>

                {/* Login Section */}
                <Slide in={visibleElements.login} direction="up" timeout={1000}>
                    <Box sx={{ 
                        textAlign: 'center', 
                        py: 6,
                        my: 4,
                        background: 'linear-gradient(45deg, #f0f0f0 30%, #ffffff 90%)',
                        borderRadius: 3,
                        boxShadow: 2,
                        transform: 'scale(1)',
                        transition: 'all 0.4s ease-in-out',
                        '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                        }
                    }}>
                        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', color: 'primary.main' }}>
                            Ready to Login?
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4, fontWeight: 400 }}>
                            Choose your role to access the appropriate portal
                        </Typography>
                        <Box sx={{ 
                            display: 'flex', 
                            gap: 3, 
                            justifyContent: 'center', 
                            flexWrap: 'wrap',
                            alignItems: 'center'
                        }}>
                            <Button 
                                variant="contained" 
                                size="large"
                                onClick={() => navigate('/Adminlogin')}
                                sx={{ 
                                    minWidth: 180,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.08) translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                                    }
                                }}
                            >
                                Admin Login
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                onClick={() => navigate('/Teacherlogin')}
                                sx={{ 
                                    minWidth: 180,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.08) translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                                    }
                                }}
                            >
                                Teacher Login
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                onClick={() => navigate('/Studentlogin')}
                                sx={{ 
                                    minWidth: 180,
                                    py: 2,
                                    fontSize: '1.1rem',
                                    fontWeight: 'bold',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.08) translateY(-2px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                                    }
                                }}
                            >
                                Student Login
                            </Button>
                        </Box>
                    </Box>
                </Slide>
            </Container>
            <DeveloperFooter />
        </Box>
    );
};

export default Homepage;
