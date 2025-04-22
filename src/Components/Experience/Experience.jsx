// Experience.jsx
import React from 'react';
import style from './Experience.module.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../Data/Experiences';

const Experience = () => {
    return (
        <div className={style.experience_container} id="experience">
            <div className={style.experience_wrapper}>
                <div className={style.experience_title}>Experience</div>
                <div className={style.experience_desc}>
                    My work experience as a software engineer and working on different companies and projects.
                </div>
                <div className={style.experience_timeline_section}>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <ExperienceCard experience={experience} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Experience;
