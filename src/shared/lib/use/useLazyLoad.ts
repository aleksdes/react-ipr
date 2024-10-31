import { RefObject, useEffect, useRef, useState } from 'react';

export function useLazyLoad() {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const imgRef: RefObject<HTMLImageElement> = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return { isIntersecting, imgRef };
}
