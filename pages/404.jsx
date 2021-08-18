import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
export default function Custom404() {
  const router = useRouter();

  function pushRouter() {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }

  useEffect(() => {
    pushRouter();
  }, []);
  return (
    <div className='not-found'>
      <h3 className='text'>404 - Page Not Found</h3>
    </div>
  );
}
