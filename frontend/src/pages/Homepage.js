import React from 'react';
import { Container, Typography, Box, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DeveloperFooter from '../components/DeveloperFooter';

const Homepage = () => {
    const navigate = useNavigate();

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
                <Box sx={{ 
                    textAlign: 'center', 
                    py: 8,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    borderRadius: 2,
                    mb: 6
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
                                '&:hover': { bgcolor: 'grey.100' }
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
                                '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            Explore as Guest
                        </Button>
                    </Box>
                </Box>

                {/* Features Section */}
                <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 4 }}>
                    Key Features
                </Typography>
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <Paper elevation={3} sx={{ p: 4, textAlign: 'center', height: '100%' }}>
                                <Box sx={{ mb: 2 }}>
                                    {feature.icon}
                                </Box>
                                <Typography variant="h5" component="h3" gutterBottom>
                                    {feature.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {feature.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Login Section */}
                <Box sx={{ textAlign: 'center', py: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Ready to Login?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                        Choose your role to access the appropriate portal
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Button 
                            variant="contained" 
                            size="large"
                            onClick={() => navigate('/Adminlogin')}
                        >
                            Admin Login
                        </Button>
                        <Button 
                            variant="contained" 
                            size="large"
                            onClick={() => navigate('/Teacherlogin')}
                        >
                            Teacher Login
                        </Button>
                        <Button 
                            variant="contained" 
                            size="large"
                            onClick={() => navigate('/Studentlogin')}
                        >
                            Student Login
                        </Button>
                    </Box>
                </Box>
            </Container>
            <DeveloperFooter />
        </Box>
    );
};

export default Homepage;
