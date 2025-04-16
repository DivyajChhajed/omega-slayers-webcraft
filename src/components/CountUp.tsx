
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: string | number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = ''
}) => {
  const [count, setCount] = useState(start);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });
  
  // If end is a number with a unit (like "555+"), extract the number part
  const numericValue = typeof end === 'string' 
    ? parseFloat(end.replace(/[^\d.-]/g, '')) 
    : end;
  
  // Extract any suffix from string (like the "+" in "555+")
  const endSuffix = typeof end === 'string' 
    ? end.replace(/[\d.-]/g, '') 
    : suffix;

  useEffect(() => {
    let startTimestamp: number | null = null;
    const targetValue = numericValue;
    
    if (isInView) {
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        const currentCount = progress * (targetValue - start) + start;
        setCount(currentCount);
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      
      window.requestAnimationFrame(step);
    }
  }, [numericValue, duration, start, isInView]);
  
  return (
    <span ref={countRef}>
      {prefix}
      {count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      {endSuffix || suffix}
    </span>
  );
};
