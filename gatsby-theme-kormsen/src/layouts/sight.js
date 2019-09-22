import React from 'react'
import {Box, Heading} from '../components/atoms';


const SightTemplate = ({title = 'Sight Post', children }) => {
    return (
        <div>
            <Heading variant="h1">{title}</Heading>
            {children}
        </div>
    )
}

export default SightTemplate;