// Education.jsx
import React from 'react';
import style from './Education.module.css'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../Data/Education'
import { experiences } from '../../Data/Experiences'
import EducationCard from '../Cards/EducationCard';

const Education = () => {
    return (
        <div className={style.education_container} id="education">
            <div className={style.education_wrapper}>
                <div className={style.education_title}>Education</div>
                <div className={style.education_desc}>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </div>
                <div className={style.education_timeline_section}>
                    <Timeline>
                        {education.map((edu, index) => (
                            <TimelineItem key={index}>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                    <EducationCard education={edu} />
                                </TimelineContent>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export default Education;
