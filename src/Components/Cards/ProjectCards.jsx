import React from 'react';
import {
    Card, Image, Tags, Tag, Details, Title, Date,
    Description, Members, Avatar
} from './ProjectCards.styles';

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project })}>

            <Image src={project.image} alt="project" />
            
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>

            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>

            <Members>
                {project.member?.map((member, idx) => (
                    <Avatar key={idx} src={member.img} alt="avatar" />
                ))}
            </Members>
            {/* <Button>View Project</Button> */}

        </Card>
    );
};

export default ProjectCards;
