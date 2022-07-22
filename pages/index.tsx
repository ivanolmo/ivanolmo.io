import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';
import SkillsItem from '../components/SkillsItem';
import ProjectItem from '../components/ProjectItem';

const Home: NextPage = () => {
  return (
    <main className='max-w-3xl px-6 mx-auto mt-8 space-y-12'>
      <section className='space-y-6'>
        <h1>
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
        <p>
          I&apos;m a software engineer experienced in full-stack web
          development. I have a passion for building web applications that are
          user-friendly, accessible, and easy for other developers to read.
        </p>
        <p>
          I&apos;m currently focused on building fast, responsive, full-stack
          web apps with React, Next.js, and Firebase or MongoDB. I love to learn
          and am currently on a deep dive into TypeScript.
        </p>
      </section>
      <section className='space-y-6 sm:space-y-10'>
        <h2>Skills</h2>
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
      <section className='space-y-6 sm:space-y-10'>
        <h2>Projects</h2>
        <div className='grid gap-8 sm:gap-12'>
          <ProjectItem
            title='Invoice App'
            image='invoices.webp'
            description='A full stack invoice app that allows users to sign up and manage invoices. Form data is validated, and the invoice form can be partially completed and saved as a draft. This app is responsive and has light/dark theme support, and users can delete their account and data from the profile page.'
            tech='This app is built with React and Next.js, and  uses the Authentication, Firestore, and Functions features of Firebase.'
            repository='https://github.com/ivanolmo/nextjs-invoice-app'
            link='https://nextjs-invoice-app.vercel.app/'
          />
          <ProjectItem
            title='Real Estate Marketplace App'
            image='marketplace.webp'
            description='A full stack real estate marketplace that allows users to sign up and manage real estate sale and rental listings.'
            tech='This app is built with React, and uses the Authentication, Firestore, and Storage features of Firebase.'
            repository='https://github.com/ivanolmo/real-estate-listing-app'
            link='https://real-estate-marketplace.netlify.app/'
          />
          <ProjectItem
            title='Support Ticket App'
            image='support.webp'
            description='A full stack support ticket system that allows users to sign up and manage tickets for a variety of devices. Users can see ticket status, add notes to tickets, and mark tickets as closed.'
            tech='This app is built with the MERN stack, using React, Node.js, Express.js, and MongoDB, as well as the Redux Toolkit.'
            repository='https://github.com/ivanolmo/support-ticket-app'
            link='https://supportdeskmern.herokuapp.com/'
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
