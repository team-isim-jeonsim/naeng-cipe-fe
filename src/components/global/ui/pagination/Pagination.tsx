import FirstPageIcon from './FirstPageIcon';
import LastPageIcon from './LastPageIcon';
import NextBlockIcon from './NextBlockIcon';
import PageButton from './PageButton';
import PageLink from './PageLink';
import PrevBlockIcon from './PrevBlockIcon';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({
  totalPages,
  currentPage,
}: PaginationProps) {
  const pagesToShow = 5;
  let startPage = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let endPage = Math.min(totalPages, startPage + pagesToShow - 1);
  const pages = [...Array(endPage - startPage + 1).keys()].map(
    (i) => startPage + i
  );

  const prevPage = Math.max(1, currentPage - pagesToShow);
  const nextPage =
    totalPages - currentPage <= pagesToShow
      ? totalPages
      : Math.min(totalPages, currentPage + pagesToShow);

  return (
    <div className='max-h-7 w-full flex justify-center items-center gap-2'>
      <PageLink href={`/?page=1`}>
        <PageButton cond={currentPage === 1}>
          <FirstPageIcon />
        </PageButton>
      </PageLink>
      <PageLink href={`/?page=${prevPage}`}>
        <PageButton cond={startPage === currentPage}>
          <PrevBlockIcon />
        </PageButton>
      </PageLink>
      {pages.map((page) => (
        <PageLink key={page} href={`/?page=${page}`}>
          <PageButton cond={page === currentPage} isPageNum={true}>
            <span className='text-lg font-bold'>{page}</span>
          </PageButton>
        </PageLink>
      ))}
      <PageLink href={`/?page=${nextPage}`}>
        <PageButton cond={currentPage === totalPages}>
          <NextBlockIcon />
        </PageButton>
      </PageLink>
      <PageLink href={`/?page=${totalPages}`}>
        <PageButton cond={currentPage === totalPages}>
          <LastPageIcon />
        </PageButton>
      </PageLink>
    </div>
  );
}
