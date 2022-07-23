import Image from 'next/image';

import Button from './Button';

function ProjectItem(props: {
  title: string;
  image: string;
  description: string;
  tech: string;
  repository: string;
  link: string;
}) {
  return (
    <div className='py-4 pl-4 space-y-6 border-l-2 sm:pl-8 border-slate-800 dark:border-slate-200 rounded-l-2xl'>
      <h3>{props.title}</h3>
      <div className='w-auto h-auto overflow-hidden rounded-xl'>
        <Image
          src={`/static/images/${props.image}`}
          alt={props.title}
          width='100%'
          height='100%'
          layout='responsive'
        />
      </div>
      <p>{props.description}</p>
      <p>{props.tech}</p>
      <div className='grid gap-4 sm:grid-cols-2'>
        <a href={props.link} target='_blank' rel='noreferrer'>
          <Button
            containerClasses='bg-blue-800 dark:bg-blue-400 hover:bg-blue-600 w-full col-span-1'
            textClasses='text-white'
            buttonText='Live Site'
          />
        </a>
        <a href={props.repository} target='_blank' rel='noreferrer'>
          <Button
            containerClasses='bg-blue-800 dark:bg-blue-400 hover:bg-blue-600 w-full col-span-1'
            textClasses='text-white'
            buttonText='GitHub Repo'
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectItem;
