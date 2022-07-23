import Image from 'next/image';

interface ComponentProps {
  label: string;
  icon: string;
  className?: string;
}

function SkillsItem(props: ComponentProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${props.className}`}>
      <div className='w-16 h-16 sm:w-24 sm:h-24'>
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
