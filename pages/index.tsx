import { useState } from 'react';
import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';

import SkillsItem from '../components/SkillsItem';
import ProjectItem from '../components/ProjectItem';
import { projectData } from '../data/projectData';

const Home: NextPage = () => {
  const [readMore, setReadMore] = useState(false);

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
                .typeString("I'm a Software Engineer.")
                .start();
            }}
          />
        </h1>
        <p>
          I&apos;m a software engineer with experience building full-stack web
          applications. I have a passion for front-end development, where I can
          apply my attention to detail and best practices to create apps that
          are user-friendly, accessible, visually appealing, and easy to
          maintain.
        </p>
        <p>
          I&apos;m currently focused on building fast, responsive, full-stack
          web apps with React and TypeScript, Next.js, and Firebase, MongoDB, or
          PostgreSQL. I&apos;m always eager to learn new technologies and best
          practices to improve my skills and deliver high-quality products.
          Please take a look at some of my projects below!
        </p>
        <p>
          <button
            className='text-lg font-bold border-b-2 border-blue-600 hover:text-slate-500'
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Read Less' : 'A little more about me...'}
          </button>
        </p>
        {readMore && (
          <div className='space-y-6'>
            <p>
              I&apos;m also a self-taught developer who decided to pursue formal
              education in software engineering. I&apos;m currently enrolled in
              the bachelor of science in software engineering program at Western
              Governors University, where I&apos;m learning advanced concepts
              and techniques in software development, such as software design
              patterns, Android development, UI/UX design principles, testing
              methodologies, security principles, and agile practices. I expect
              to graduate in June 2023.
            </p>
            <p>
              When I&apos;m not coding, I enjoy playing with my kids, reading
              great sci-fi books, cooking the latest delicious recipe I found
              online, and playing video games.
            </p>
          </div>
        )}
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
{/*       <section className='space-y-6 sm:space-y-10'>
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
      </section> */}
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
