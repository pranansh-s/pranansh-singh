import { lazy, Suspense, useEffect, useState } from 'react';

const Lottie = lazy(() => import('lottie-react'));

const LazyLottie = ({ loader, ...props }: { loader: () => Promise<any>; [key: string]: any }) => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    loader().then(setData);
  }, [loader]);

  if (!data) return null;

  return (
    <Suspense fallback={null}>
      <Lottie animationData={data} {...props} />
    </Suspense>
  );
};

export default LazyLottie;
