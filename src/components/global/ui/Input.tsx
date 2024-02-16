interface InputProps {
  className?: string;
  type?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const baseStyle = () => {
  return `py-2 border rounded-md px-2 focus:outline-amber-300`;
};

export default function Input({
  className,
  type = 'text',
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      className={`${baseStyle()} ${className}`}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
