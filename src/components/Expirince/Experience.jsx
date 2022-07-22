import React from 'react'
import { Achievement, Circle, Expirinc, ExpirincText } from './StyledExpirince';

const Experience = () => {
    return (
        < Expirinc id='Experiences'>
            <Achievement>
                <Circle>
                    8+
                </Circle>
                <ExpirincText>Year</ExpirincText>
                <ExpirincText>Experience</ExpirincText>
            </Achievement>
            <Achievement>
                <Circle>
                    20+
                </Circle>
                <ExpirincText>Completed</ExpirincText>
                <ExpirincText>Projects</ExpirincText>
            </Achievement>
            <Achievement>
                <Circle>
                    5+
                </Circle>
                <ExpirincText>companies</ExpirincText>
                <ExpirincText>Work</ExpirincText>

            </Achievement>
        </Expirinc>
    )
}

export default Experience