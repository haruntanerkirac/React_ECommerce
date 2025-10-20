import React from 'react'
import Container from '@mui/material/Container';

function PageContainer({ children }) {
    return (
        <Container maxWidth="lg" style={{ borderBottom: '1px solid black' }}>
            {children}
        </Container>
    )
}

export default PageContainer