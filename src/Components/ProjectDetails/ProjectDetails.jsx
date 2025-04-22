import { X, Github, Linkedin } from 'lucide-react';
import { Modal } from '@mui/material';
import React from 'react';
import style from './ProjectDetails.module.css';

const ProjectModal = ({ openModal, setOpenModal }) => {
    const project = openModal?.project;

    return (
        <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
            <div className={style.modal_container}>
                <div className={style.modal_wrapper}>
                    <CloseRounded
                        style={{ position: "absolute", top: "10px", right: "20px", cursor: "pointer" }}
                        onClick={() => setOpenModal({ state: false, project: null })}
                    />
                    <img className={style.modal_image} src={project?.image} alt={project?.title} />
                    <div className={style.modal_title}>{project?.title}</div>
                    <div className={style.modal_date}>{project?.date}</div>
                    <div className={style.modal_tags}>
                        {project?.tags.map((tag, i) => (
                            <div className={style.modal_tag} key={i}>{tag}</div>
                        ))}
                    </div>
                    <div className={style.modal_desc}>{project?.description}</div>
                    {project?.member && (
                        <>
                            <div className={style.modal_label}>Members</div>
                            <div className={style.modal_members}>
                                {project.member.map((member, i) => (
                                    <div className={style.modal_member} key={i}>
                                        <img className={modal_member_img} src={member.img} alt={member.name} />
                                        <div className={style.modal_member_name}>{member.name}</div>
                                        <a href={member.github} target="_blank" rel="noreferrer">
                                            <GitHub />
                                        </a>
                                        <a href={member.linkedin} target="_blank" rel="noreferrer">
                                            <LinkedIn />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                    <div className={style.modal_button_group}>
                        <a href={project?.github} className={`${style.modal_button} ${style.dull}`} target="_blank" rel="noreferrer">
                            View Code
                        </a>
                        <a href={project?.webapp} className={style.modal_button} target="_blank" rel="noreferrer">
                            View Live App
                        </a>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;
