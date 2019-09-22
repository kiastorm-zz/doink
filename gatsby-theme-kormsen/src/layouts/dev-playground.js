import React from 'react'
import {Box, Heading} from '../components/atoms';


const PlaygroundTemplate = ({title = 'Dev Playground', children }) => {
    return (
        <Box>
            <Heading variant="h1">{title}</Heading>
            {children}
        </Box>
    )
}

export default PlaygroundTemplate;