import React from 'react'
import {Box, Heading} from '../components/atoms';


const ThoughtTemplate = ({title = 'Thought Post', children }) => {
    return (
        <Box>
            <Heading variant="h1">{title}</Heading>
            {children}
        </Box>
    )
}

export default ThoughtTemplate;