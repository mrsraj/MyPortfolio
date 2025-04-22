import React from 'react';
import {
    Card, Top, Image, Body, Role, Company, Date,
    Description, Span, Skills, Skill, ItemWrapper, Document
} from './ExperienceCard.styles';

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} alt="company-logo" />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>

            <Description>
                {experience?.desc && <Span>{experience.desc}</Span>}
                {experience?.skills && (
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience.skills.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                )}
            </Description>

            {experience.doc && (
                <a href={experience.doc} target="_blank" rel="noopener noreferrer">
                    <Document src={experience.doc} alt="document" />
                </a>
            )}
        </Card>
    );
};

export default ExperienceCard;
