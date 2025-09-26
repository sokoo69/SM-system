import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const DeveloperFooter = ({ position = 'fixed', bottomOffset = 0 }) => {
    return (
        <Box 
            sx={{ 
                position: position,
                bottom: position === 'fixed' ? `${bottomOffset}px` : 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: position === 'fixed' ? 9998 : 9999,
                fontSize: '14px'
            }}
        >
            <Typography variant="body2" sx={{ color: 'white', fontSize: '12px' }}>
                Developed by{' '}
                <Link 
                    href="https://www.linkedin.com/in/shawon-ahmed/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{ 
                        color: '#0077b5',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        '&:hover': {
                            textDecoration: 'underline'
                        }
                    }}
                >
                    Shawon
                    <LinkedInIcon sx={{ fontSize: '16px', marginLeft: '2px' }} />
                </Link>
            </Typography>
        </Box>
    );
};

export default DeveloperFooter;
