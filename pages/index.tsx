import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';

import SkillsItem from '../components/SkillsItem';
import ProjectItem from '../components/ProjectItem';
import { projectData } from '../data/projectData';

const Home: NextPage = () => {
  return (
    <main className='max-w-3xl px-6 mx-auto mt-8 space-y-12'>
      <section className='space-y-6'>
        <h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hello! ')
                .pauseFor(750)
                .typeString("I'm Ivan Olmo.")
                .pauseFor(750)
                .deleteAll()
                .typeString("I'm a Full Stack Developer.")
                .start();
            }}
          />
        </h1>
        <p>
          I&apos;m a software developer experienced in full-stack web
          development. I have a passion for building web applications that are
          user-friendly, accessible, and easy for other developers to read.
        </p>
        <p>
          I&apos;m currently focused on building fast, responsive, full-stack
          web apps with React and TypeScript, Next.js, and Firebase, MongoDB, or
          PostgreSQL. I love to learn and am currently learning about Golang.
        </p>
      </section>
      <section className='space-y-6 sm:space-y-10'>
        <h2>Completed Projects</h2>
        <div className='grid gap-8 sm:gap-12'>
          {projectData.map((project) => (
            <ProjectItem
              key={project!.title}
              title={project!.title}
              image={project!.image}
              description={project!.description}
              tech={project!.tech}
              repoLink={project!.repoLink}
              liveLink={project!.liveLink}
            />
          ))}
        </div>
      </section>
      <section className='space-y-6 sm:space-y-10'>
        <h2>Skills</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-y-6'>
          <SkillsItem label='React' icon='react.svg' />
          <SkillsItem label='Next.js' icon='nextjs.svg' />
          <SkillsItem label='JavaScript' icon='javascript.svg' />
          <SkillsItem label='TypeScript' icon='typescript.svg' />
          <SkillsItem label='Node.js' icon='nodejs.svg' />
          <SkillsItem label='Firebase' icon='firebase.svg' />
          <SkillsItem label='MongoDB' icon='mongodb.svg' />
          <SkillsItem label='Tailwind' icon='tailwind.svg' />
        </div>
      </section>
      <section className='space-y-6 sm:space-y-10'>
        <h2>Contact</h2>
        <p>
          If you&apos;d like to get in touch to discuss a project or opportunity
          you have available, please reach out to me via{' '}
          <a
            href='mailto:ivan@ivanolmo.io'
            className='text-xl font-bold border-b-2 border-blue-600 hover:text-slate-500'
          >
            email
          </a>{' '}
          or{' '}
          <a
            href='https://linkedin.com/in/ivan-olmo'
            className='text-xl font-bold border-b-2 border-blue-600 hover:text-slate-500'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default Home;
