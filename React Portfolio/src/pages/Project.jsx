import React from 'react';
import Projects from '../components/Projects';
import { useState } from 'react';

const Project = () => {
    const [projects] = useState([
        {
            name: 'Test',
            description: 'Test',
            link: 'Test',
        },
        <Projects />
    ])
};

export default Project;