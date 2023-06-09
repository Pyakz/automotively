import React from 'react'; // always import
interface IInputProps {
  rightIcon?: JSX.Element;
  leftIcon?: JSX.Element;
  placeholder?: string;
  name?: string;
  type?: string;
  className?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
}

const Input = ({
  rightIcon,
  leftIcon,
  placeholder,
  name,
  type = 'text',
  className,
  onChange,
  defaultValue,
}: IInputProps) => {
  return (
    <div className={`relative mt-2 rounded-lg sm:w-auto w-full ${className}`}>
      {rightIcon && (
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          {rightIcon}
        </div>
      )}
      <input
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        name={name}
        id={name}
        data-testid={name}
        className={`
         block 
         rounded-lg 
       text-slate-50 
         bg-transparent
         md:w-[300px]
         w-full 
         border
       border-slate-500 
       focus:border-slate-400 
         focus:outline-none    
         py-1.5 ${rightIcon ? 'pl-9' : 'px-3'} pr-5`}
        placeholder={placeholder}
      />
      {leftIcon && (
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          {leftIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
