import { useEffect, useRef } from 'react';

// 인피니티 스크롤 옵저버설정 훅
const useIntersectionObserver = (callback: () => void, margin = '5px') => {
  const observerRef = useRef(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = observerRef.current;
    const parent = parentRef.current;

    if (!ref) return () => { };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) callback();
    }, { root: parent, threshold: 1, rootMargin: margin });

    observer.observe(ref);

    return () => {
      observer.unobserve(ref);
    };
  }, [callback, margin]);

  return { observerRef, parentRef };
};

export default useIntersectionObserver;
