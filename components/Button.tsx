function Button(props: {
  onClick?: () => void;
  containerClasses: string;
  textClasses: string;
  buttonText: string;
}) {
  return (
    <button
      type='button'
      onClick={() => props.onClick?.()}
      className={`flex justify-center items-center py-4 px-6 rounded-full cursor-pointer ${props.containerClasses}`}
    >
      <div
        className={`flex justify-center items-center text-xl font-bold tracking-wide ${props.textClasses}`}
      >
        {props.buttonText}
      </div>
    </button>
  );
}

export default Button;
