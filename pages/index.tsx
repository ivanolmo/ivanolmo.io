import type { NextPage } from 'next';
import Typewriter from 'typewriter-effect';

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
    </main>
  );
};

export default Home;
