import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';
import SkillsItem from '../components/SkillsItem';

const Home: NextPage = () => {
  return (
    <main className='max-w-2xl px-6 mx-auto mt-8 mb-64 space-y-12'>
      <section className='space-y-6'>
        <h1 className='text-3xl font-bold'>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Hey there! ')
                .pauseFor(750)
                .typeString("I'm Ivan Olmo.")
                .start();
            }}
          />
        </h1>
        <p className='text-xl'>
          I&apos;m a self taught software engineer experienced in full-stack web
          development. I have a passion for building web applications that are
          user-friendly, accessible, and easy for other developers to read.
        </p>
        <p className='text-xl'>
          I&apos;m currently focused on building fast, responsive, full-stack
          web apps with React, Next.js, and Firebase or MongoDB. I love to learn
          and am currently on a deep dive into TypeScript.
        </p>
      </section>
      <section className='space-y-6'>
        <h2 className='text-2xl font-bold'>Skills</h2>
        <div className='grid grid-cols-3 sm:grid-cols-4 gap-y-6'>
          <SkillsItem label='React' icon='react.svg' />
          <SkillsItem label='Next.js' icon='nextjs.svg' />
          <SkillsItem label='JavaScript' icon='javascript.svg' />
          <SkillsItem label='TypeScript' icon='typescript.svg' />
          <SkillsItem label='MongoDB' icon='mongodb.svg' />
          <SkillsItem label='Github' icon='github.svg' />
          <SkillsItem label='Firebase' icon='firebase.svg' />
          <SkillsItem label='Figma' icon='figma.svg' />
          <SkillsItem label='Node.js' icon='nodejs.svg' />
          <SkillsItem label='VSCode' icon='vscode.svg' />
          <SkillsItem label='Markdown' icon='markdown.svg' />
          <SkillsItem label='Tailwind' icon='tailwind.svg' />
        </div>
      </section>
    </main>
  );
};

export default Home;
