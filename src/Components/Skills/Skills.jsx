import React from 'react';
import style from './Skills.module.css';
import skills from '../../Data/Skills';

const Skills = () => {
    console.log("Skills = ",skills);
    
    return (
        <div className={style.skills_container} id="skills">
            <div className={style.skills_wrapper}>
                <div className={style.skills_title}>Skills</div>
                <div className={style.skills_desc}>
                    Here are some of my skills on which I have been working on for the past 2 years.
                </div>
                <div className={style.skills_box_container}>
                    {skills.map((skill, index) => (
                        <div className={style.skill_box} key={index}>
                            <h2 className={style.skill_title}>{skill.title}</h2>
                            <div className={style.skill_list}>
                                {skills.map((item, idx) => (
                                    <div className={style.skill_item} key={idx}>
                                        <img className={style.skill_img} src={item.image} alt={item.name} />
                                        {item.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
