import Image from 'next/image';

interface ComponentProps {
  label: string;
  icon: string;
  className?: string;
}

function SkillsItem(props: ComponentProps) {
  return (
    <div className={`flex flex-col items-center ${props.className}`}>
      <div className='w-12 h-12 sm:w-20 sm:h-20'>
        <Image
          src={`/static/icons/${props.icon}`}
          alt={props.label}
          width='100%'
          height='100%'
          layout='responsive'
        />
      </div>
      <span className='text-lg tracking-tighter'>{props.label}</span>
    </div>
  );
}

export default SkillsItem;
