import { useEffect, useRef } from 'react';

/**
 * A custom hook that creates a component-scoped IntersectionObserver
 * to trigger CSS scroll animations on descendant elements with the
 * `.reveal` or `.reveal-scale` classes.
 * 
 * @returns {React.RefObject} The container ref to be attached to the root of the component.
 */
export default function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const currentRef = containerRef.current;
    if (currentRef) {
      // Find and observe all child elements containing scroll reveal classes
      const revealElements = currentRef.querySelectorAll('.reveal, .reveal-scale');
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return containerRef;
}
