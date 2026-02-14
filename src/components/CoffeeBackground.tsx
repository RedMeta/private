import React, { useEffect, useRef, ReactElement } from 'react';

const CoffeeBackground = ({ children, beanCount = 30 }: { children: ReactElement; beanCount?: number }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current as any;

    if (!container) return;

    // Clear any existing beans before re-rendering
    container.querySelectorAll('.bean').forEach((bean: HTMLElement) => { bean.remove(); });

    for (let i = 0; i < beanCount; i++) {
      const bean = document.createElement('div');
      bean.classList.add('bean');

      // Random position (0–100% of container)
      bean.style.top = `${Math.random() * 100}%`;
      bean.style.left = `${Math.random() * 100}%`;

      // Random rotation
      const rotation = Math.random() * 360;
      bean.style.transform = `rotate(${rotation}deg)`;

      container.appendChild(bean);
    }
  }, [beanCount]);

  return (
    <div className="coffee-back" ref={containerRef}>
      <div className="coffee-content">
        {children}
      </div>
    </div>
  );
};

export default CoffeeBackground;
