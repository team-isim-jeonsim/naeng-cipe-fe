import Link from 'next/link';

interface PageLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function PageLink({ href, children }: PageLinkProps) {
  return (
    <Link className='w-5 h-5' href={href}>
      {children}
    </Link>
  );
}
