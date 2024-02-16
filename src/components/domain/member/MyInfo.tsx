'use client';

import EditIcon from '@/components/global/ui/icon/EditIcon';
import EditModal from '@/components/global/ui/modal/EditModal';
import ModalPortal from '@/components/global/ui/modal/ModalPortal';
import { SessionUser } from '@/model/member';
import { useState } from 'react';

export default function MyInfo({ user }: { user: SessionUser }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='h-full flex items-center gap-3'>
      <h4 className='text-3xl font-bold tracking-wider'>{user.nickname}</h4>
      <div className='w-5 h-5'>
        <button
          className='text-gray-400 hover:text-gray-600'
          onClick={() => setIsOpen(true)}
        >
          <EditIcon />
        </button>
      </div>
      {isOpen && (
        <ModalPortal>
          <EditModal onClose={handleCloseModal}>수정창</EditModal>
        </ModalPortal>
      )}
    </div>
  );
}
