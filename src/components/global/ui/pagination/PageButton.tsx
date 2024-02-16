interface PageButtonProps {
  cond: boolean;
  isPageNum?: boolean;
  children: React.ReactNode;
}

export default function PageButton({
  cond,
  isPageNum = false,
  children,
}: PageButtonProps) {
  const textColor = `${isPageNum && cond ? 'text-amber-400' : 'text-gray-500'}`;

  return (
    <button
      className={`w-full h-full ${textColor} flex items-center justify-center`}
      disabled={cond}
    >
      {children}
    </button>
  );
}
