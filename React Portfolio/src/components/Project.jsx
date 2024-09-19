import React from 'react';
import Project from './pages/Project';
import { useState } from 'react';

const Projects = () => {
    const [projects] = useState([
        {
            name: 'Test',
            description: 'Test',
            link: 'Test',
        },
        <Project />
    ])
};

export default Projects;