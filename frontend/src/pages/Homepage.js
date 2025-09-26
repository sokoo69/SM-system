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
        <Box sx={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f5f7fa 0%, #c3cfe2 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background decorative elements */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `
                    radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
                `,
                zIndex: 0
            }} />
            
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Hero Section */}
                <Fade in={visibleElements.hero} timeout={1000}>
                    <Box sx={{ 
                        textAlign: 'center', 
                        py: 10,
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        borderRadius: 4,
                        mb: 6,
                        position: 'relative',
                        overflow: 'hidden',
                        transform: 'translateY(0)',
                        transition: 'all 0.6s ease-in-out',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
                            zIndex: 1
                        },
                        '&:hover': {
                            transform: 'translateY(-8px)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                        }
                    }}>
                        <Box sx={{ position: 'relative', zIndex: 2 }}>
                            <Typography 
                                variant="h2" 
                                component="h1" 
                                gutterBottom 
                                sx={{ 
                                    fontWeight: 700,
                                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                                    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                                    backgroundClip: 'text',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent'
                                }}
                            >
                                School Management System
                            </Typography>
                            <Typography 
                                variant="h5" 
                                sx={{ 
                                    mb: 4, 
                                    opacity: 0.95,
                                    fontSize: { xs: '1.1rem', md: '1.5rem' },
                                    fontWeight: 400,
                                    maxWidth: '600px',
                                    mx: 'auto'
                                }}
                            >
                                Streamline your school operations with our comprehensive management platform
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                gap: 3, 
                                justifyContent: 'center', 
                                flexWrap: 'wrap',
                                mt: 6
                            }}>
                                <Button 
                                    variant="contained" 
                                    size="large" 
                                    onClick={() => navigate('/choose')}
                                    sx={{ 
                                        bgcolor: 'white', 
                                        color: 'primary.main',
                                        px: 4,
                                        py: 2,
                                        fontWeight: 600,
                                        borderRadius: 3,
                                        textTransform: 'none',
                                        fontSize: '1.1rem',
                                        transform: 'scale(1)',
                                        transition: 'all 0.3s ease-in-out',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                        '&:hover': { 
                                            bgcolor: 'grey.50',
                                            transform: 'scale(1.05) translateY(-2px)',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                        }
                                    }}
                                >
                                    🚀 Get Started
                                </Button>
                                <Button 
                                    variant="outlined" 
                                    size="large" 
                                    onClick={() => navigate('/chooseasguest')}
                                    sx={{ 
                                        borderColor: 'white', 
                                        color: 'white',
                                        borderWidth: 2,
                                        px: 4,
                                        py: 2,
                                        fontWeight: 600,
                                        borderRadius: 3,
                                        textTransform: 'none',
                                        fontSize: '1.1rem',
                                        transform: 'scale(1)',
                                        transition: 'all 0.3s ease-in-out',
                                        backdropFilter: 'blur(10px)',
                                        '&:hover': { 
                                            borderColor: 'white', 
                                            bgcolor: 'rgba(255,255,255,0.2)',
                                            transform: 'scale(1.05) translateY(-2px)',
                                            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                                            borderWidth: 2
                                        }
                                    }}
                                >
                                    👀 Explore as Guest
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>

                {/* Features Section */}
                <Slide in={visibleElements.features} direction="up" timeout={800}>
                    <Box>
                        <Typography 
                            variant="h3" 
                            component="h2" 
                            textAlign="center" 
                            gutterBottom 
                            sx={{ 
                                mb: 6,
                                fontWeight: 700,
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                color: 'grey.800',
                                position: 'relative',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: '-10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80px',
                                    height: '4px',
                                    background: 'linear-gradient(90deg, #667eea, #764ba2)',
                                    borderRadius: '2px'
                                }
                            }}
                        >
                            ✨ Key Features
                        </Typography>
                        <Grid container spacing={4} sx={{ mb: 8 }}>
                            {features.map((feature, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Grow in={visibleElements.features} timeout={1000 + (index * 200)}>
                                        <Paper 
                                            elevation={0} 
                                            sx={{ 
                                                p: 5, 
                                                textAlign: 'center', 
                                                height: '100%',
                                                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
                                                backdropFilter: 'blur(10px)',
                                                border: '1px solid rgba(255,255,255,0.2)',
                                                borderRadius: 4,
                                                position: 'relative',
                                                overflow: 'hidden',
                                                transform: 'scale(1) translateY(0)',
                                                transition: 'all 0.4s ease-in-out',
                                                cursor: 'pointer',
                                                '&:before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '4px',
                                                    background: 'linear-gradient(90deg, #667eea, #764ba2)',
                                                    scale: '0 1',
                                                    transition: 'scale 0.5s ease-in-out',
                                                },
                                                '&:hover': {
                                                    transform: 'scale(1.02) translateY(-8px)',
                                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)',
                                                    '&:before': {
                                                        scale: '1 1',
                                                    }
                                                }
                                            }}
                                        >
                                            <Box sx={{ 
                                                mb: 3,
                                                transform: 'scale(1)',
                                                transition: 'all 0.4s ease-in-out',
                                                position: 'relative',
                                                display: 'inline-flex',
                                                p: 2,
                                                borderRadius: '50%',
                                                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))',
                                                '&:hover': {
                                                    transform: 'scale(1.2) rotate(10deg)',
                                                    background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))',
                                                }
                                            }}>
                                                {feature.icon}
                                            </Box>
                                            <Typography 
                                                variant="h5" 
                                                component="h3" 
                                                gutterBottom 
                                                sx={{
                                                    fontWeight: 600,
                                                    color: 'grey.800',
                                                    mb: 2
                                                }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography 
                                                variant="body1" 
                                                color="text.secondary"
                                                sx={{
                                                    lineHeight: 1.6,
                                                    fontSize: '1rem'
                                                }}
                                            >
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
                        py: 8,
                        my: 6,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(240,240,252,0.9))',
                        backdropFilter: 'blur(20px)',
                        borderRadius: 6,
                        position: 'relative',
                        overflow: 'hidden',
                        transform: 'scale(1)',
                        transition: 'all 0.4s ease-in-out',
                        border: '1px solid rgba(255,255,255,0.3)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: `
                                linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)
                            `,
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.6s ease-in-out',
                        },
                        '&:hover': {
                            transform: 'scale(1.02) translateY(-5px)',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                            '&:before': {
                                transform: 'translateX(100%)',
                            }
                        }
                    }}>
                        <Typography 
                            variant="h4" 
                            component="h2" 
                            gutterBottom 
                            sx={{ 
                                fontWeight: 700, 
                                color: 'grey.800',
                                fontSize: { xs: '1.8rem', md: '2.2rem' },
                                mb: 2,
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            🎯 Ready to Login?
                        </Typography>
                        <Typography 
                            variant="h6" 
                            color="text.secondary" 
                            sx={{ 
                                mb: 6, 
                                fontWeight: 400,
                                fontSize: { xs: '1rem', md: '1.2rem' },
                                position: 'relative',
                                zIndex: 2
                            }}
                        >
                            Choose your role to access the appropriate portal
                        </Typography>
                        <Box sx={{ 
                            display: 'flex', 
                            gap: 4, 
                            justifyContent: 'center', 
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            position: 'relative',
                            zIndex: 2
                        }}>
                            <Button 
                                variant="contained" 
                                size="large"
                                onClick={() => navigate('/Adminlogin')}
                                sx={{ 
                                    minWidth: 200,
                                    py: 2.5,
                                    px: 4,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: 4,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #5a67d8, #6b46c1)',
                                        transform: 'scale(1.05) translateY(-3px)',
                                        boxShadow: '0 12px 30px rgba(102, 126, 234, 0.4)',
                                    }
                                }}
                            >
                                👨‍💼 Admin Login
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                onClick={() => navigate('/Teacherlogin')}
                                sx={{ 
                                    minWidth: 200,
                                    py: 2.5,
                                    px: 4,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: 4,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    boxShadow: '0 6px 20px rgba(16, 185, 129, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #059669, #047857)',
                                        transform: 'scale(1.05) translateY(-3px)',
                                        boxShadow: '0 12px 30px rgba(16, 185, 129, 0.4)',
                                    }
                                }}
                            >
                                👨‍🏫 Teacher Login
                            </Button>
                            <Button 
                                variant="contained" 
                                size="large"
                                onClick={() => navigate('/Studentlogin')}
                                sx={{ 
                                    minWidth: 200,
                                    py: 2.5,
                                    px: 4,
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: 4,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                                    transform: 'scale(1)',
                                    transition: 'all 0.3s ease-in-out',
                                    boxShadow: '0 6px 20px rgba(245, 158, 11, 0.3)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #d97706, #b45309)',
                                        transform: 'scale(1.05) translateY(-3px)',
                                        boxShadow: '0 12px 30px rgba(245, 158, 11, 0.4)',
                                    }
                                }}
                            >
                                👨‍🎓 Student Login
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
