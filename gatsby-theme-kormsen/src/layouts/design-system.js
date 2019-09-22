import React from 'react'
import {Box, Heading} from '../components/atoms';


const DesignSystem = ({title = 'Design System', children }) => {
    return (
        <Box>
            <Heading variant="h1">{title}</Heading>
            {children}
        </Box>
    )
}

export default DesignSystem;