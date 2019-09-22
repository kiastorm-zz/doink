import React from 'react'
import {Box, Heading} from '../components/atoms';


const MDXTemplate = ({title = 'MDX Page', children }) => {
    return (
        <Box>
            <Heading variant="h1">{title}</Heading>
            {children}
        </Box>
    )
}

export default MDXTemplate;