import { useMutation } from '@tanstack/react-query';
import { joinFetcher } from './authFetchers';
import { useRouter } from 'next/navigation';

export const useJoin = () => {
  const router = useRouter();
  const { mutate: submitJoin } = useMutation({
    mutationFn: joinFetcher,
    onSuccess: (res) => {
      console.log(res);

      if (!res?.id) {
        alert('회원가입 실패! 😭 \n다시 시도해주세요.');
        return;
      }

      alert('회원가입 완료! \n로그인 페이지로 이동합니다.');
      router.replace('/login');
    },
    onError: (err) => {
      console.log(err);

      alert('회원가입이 정상적으로 이루어지지 않았습니다.');
    },
  });

  return { submitJoin };
};
