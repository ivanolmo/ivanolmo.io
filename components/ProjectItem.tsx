import Image from 'next/image';

import Button from './Button';

interface ProjectItemProps {
  title: string;
  image: string;
  description: string;
  tech: string;
  repoLink: string;
  liveLink: string;
}

function ProjectItem(props: ProjectItemProps) {
  return (
    <div className='p-4 space-y-6 border-4 sm:p-8 border-slate-900 rounded-2xl'>
      <h3>{props.title}</h3>
      <div className='w-auto h-auto overflow-hidden rounded-xl'>
        <a href={props.liveLink} target='_blank' rel='noreferrer'>
          <Image
            src={`/static/images/${props.image}`}
            alt={props.title}
            width='100%'
            height='100%'
            layout='responsive'
          />
        </a>
      </div>
      <div className='space-y-2'>
        <h4>About this project:</h4>
        <p>{props.description}</p>
      </div>
      <div className='space-y-2'>
        <h4>Tech used:</h4>
        <p>{props.tech}</p>
      </div>
      <div className='grid gap-4 sm:grid-cols-2'>
        <a href={props.liveLink} target='_blank' rel='noreferrer'>
          <Button
            containerClasses='bg-blue-800 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 w-full col-span-1'
            textClasses='text-white'
            buttonText='Live Site'
          />
        </a>
        <a href={props.repoLink} target='_blank' rel='noreferrer'>
          <Button
            containerClasses='bg-blue-800 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-400 w-full col-span-1'
            textClasses='text-white'
            buttonText='GitHub Repo'
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
