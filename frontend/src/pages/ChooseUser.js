import React from 'react';
import { 
    Container, 
    Typography, 
    Box, 
    Button, 
    Grid, 
    Paper,
    Card,
    CardContent,
    CardActions
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const ChooseUser = ({ visitor = "normal" }) => {
    const navigate = useNavigate();

    const userTypes = [
        {
            title: 'Admin',
            description: 'Manage school operations, students, teachers, and classes',
            icon: <AdminPanelSettingsIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            loginPath: '/Adminlogin',
            color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            features: ['Manage Students', 'Manage Teachers', 'View Reports', 'System Settings']
        },
        {
            title: 'Teacher',
            description: 'Access student information, manage attendance and grades',
            icon: <SchoolIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            loginPath: '/Teacherlogin',
            color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            features: ['View Students', 'Mark Attendance', 'Grade Students', 'View Classes']
        },
        {
            title: 'Student',
            description: 'View your academic information, attendance, and grades',
            icon: <PersonIcon sx={{ fontSize: 60, color: 'primary.main' }} />,
            loginPath: '/Studentlogin',
            color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            features: ['View Grades', 'Check Attendance', 'View Subjects', 'Submit Complaints']
        }
    ];

    const handleUserSelect = (userType) => {
        navigate(userType.loginPath);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Choose Your Role
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
                    Select your role to access the appropriate portal and features
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {userTypes.map((userType, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card 
                            elevation={4} 
                            sx={{ 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'transform 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    background: userType.color,
                                    color: 'white',
                                    textAlign: 'center',
                                    py: 3,
                                    px: 2
                                }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    {userType.icon}
                                </Box>
                                <Typography variant="h4" component="h2" gutterBottom>
                                    {userType.title}
                                </Typography>
                                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                                    {userType.description}
                                </Typography>
                            </Box>
                            
                            <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                <Typography variant="h6" gutterBottom sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                                    Key Features:
                                </Typography>
                                <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                    {userType.features.map((feature, featureIndex) => (
                                        <Typography 
                                            component="li" 
                                            key={featureIndex}
                                            variant="body2" 
                                            sx={{ mb: 0.5, color: 'text.secondary' }}
                                        >
                                            {feature}
                                        </Typography>
                                    ))}
                                </Box>
                            </CardContent>
                            
                            <CardActions sx={{ p: 3, pt: 0 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    onClick={() => handleUserSelect(userType)}
                                    sx={{ 
                                        py: 1.5,
                                        fontSize: '1.1rem',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Login as {userType.title}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {visitor === "guest" && (
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Paper elevation={2} sx={{ p: 4, bgcolor: 'grey.50' }}>
                        <Typography variant="h5" gutterBottom>
                            Guest Access
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                            As a guest, you can explore the system features and see how it works
                        </Typography>
                        <Button
                            variant="outlined"
                            size="large"
                            onClick={() => navigate('/')}
                            sx={{ textTransform: 'none' }}
                        >
                            Back to Home
                        </Button>
                    </Paper>
                </Box>
            )}

            <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Button
                    variant="text"
                    onClick={() => navigate('/')}
                    sx={{ textTransform: 'none' }}
                >
                    ← Back to Home
                </Button>
            </Box>
        </Container>
    );
};

export default ChooseUser;
