import React from 'react'
import {Box, Heading} from '../components/atoms';


const SoundTemplate = ({title = 'Sound Post', children }) => {
    return (
        <div>
            <Heading variant="h1">{title}</Heading>
            {children}
        </div>
    )
}

export default SoundTemplate;