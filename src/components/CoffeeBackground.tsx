import React, { useEffect, useRef, ReactElement } from 'react';

type BeanState = {
  el: HTMLDivElement;
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  radius: number;
  color: 'red' | 'green' | 'white';
};

type CoffeeBackgroundProps = {
  children: ReactElement;
  beanCount?: number;
  className?: string;
  beanImage?: 'svg' | 'photo';
};

const CoffeeBackground = ({ children, beanCount = 30, className = '', beanImage = 'svg' }: CoffeeBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    let randomColor = 'transparent';

    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const beans: BeanState[] = [];
    let animationFrameId = 0;
    let lastTime = performance.now();

    const clearBeans = () => {
      beans.forEach((bean) => bean.el.remove());
      beans.length = 0;
    };

    const createBean = () => {
      const bean = document.createElement('div');
      bean.classList.add('bean');

      // Add photo-mode class if using photo, otherwise add color classes
      if (beanImage === 'photo') {
        bean.classList.add('photo-mode');
      } else {
        const colors = ['red', 'green', 'white'] as const;
        randomColor = colors[Math.floor(Math.random() * colors.length)];
        bean.classList.add(`bean-${randomColor}`);
      }

      const size = 34 + Math.random() * 28;
      bean.style.setProperty('--bean-size', `${size}px`);
      bean.style.willChange = 'transform';

      // Set background image based on beanImage prop
      const bgImage = beanImage === 'photo' ? "url('/coffee-bean-photo.png')" : "url('/coffee-bean-roast.svg')";
      bean.style.backgroundImage = bgImage;

      const boundsWidth = container.clientWidth;
      const boundsHeight = container.clientHeight;
      const x = Math.random() * Math.max(1, boundsWidth - size);
      const y = Math.random() * Math.max(1, boundsHeight - size);

      const angle = Math.random() * Math.PI * 2;
      const speed = 12 + Math.random() * 24;
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() * 70 - 35);

      const state: BeanState = {
        el: bean,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rotation,
        rotationSpeed,
        size,
        radius: size / 2,
        color: beanImage === 'photo' ? 'white' : randomColor,
      };

      bean.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
      container.appendChild(bean);
      beans.push(state);
    };

    clearBeans();
    for (let i = 0; i < beanCount; i++) {
      createBean();
    }

    if (prefersReducedMotion) {
      return () => {
        clearBeans();
      };
    }

    const resolveCollisions = () => {
      for (let i = 0; i < beans.length; i++) {
        const a = beans[i];
        for (let j = i + 1; j < beans.length; j++) {
          const b = beans[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const distance = Math.hypot(dx, dy);
          const minDistance = a.radius + b.radius;

          if (distance >= minDistance || distance === 0) continue;

          const nx = dx / distance;
          const ny = dy / distance;
          const overlap = minDistance - distance;

          a.x -= nx * (overlap / 2);
          a.y -= ny * (overlap / 2);
          b.x += nx * (overlap / 2);
          b.y += ny * (overlap / 2);

          const dvx = b.vx - a.vx;
          const dvy = b.vy - a.vy;
          const impactSpeed = dvx * nx + dvy * ny;

          if (impactSpeed > 0) continue;

          const impulse = -impactSpeed;
          a.vx -= impulse * nx;
          a.vy -= impulse * ny;
          b.vx += impulse * nx;
          b.vy += impulse * ny;
        }
      }
    };

    const tick = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const boundsWidth = container.clientWidth;
      const boundsHeight = container.clientHeight;

      for (const bean of beans) {
        bean.x += bean.vx * delta;
        bean.y += bean.vy * delta;

        if (bean.x <= 0) {
          bean.x = 0;
          bean.vx = Math.abs(bean.vx);
        } else if (bean.x + bean.size >= boundsWidth) {
          bean.x = Math.max(0, boundsWidth - bean.size);
          bean.vx = -Math.abs(bean.vx);
        }

        if (bean.y <= 0) {
          bean.y = 0;
          bean.vy = Math.abs(bean.vy);
        } else if (bean.y + bean.size >= boundsHeight) {
          bean.y = Math.max(0, boundsHeight - bean.size);
          bean.vy = -Math.abs(bean.vy);
        }
      }

      //let's not use them for now
      resolveCollisions();

      for (const bean of beans) {
        bean.rotation += bean.rotationSpeed * delta;
        bean.el.style.transform = `translate3d(${bean.x}px, ${bean.y}px, 0) rotate(${bean.rotation}deg)`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearBeans();
    };
  }, [beanCount, beanImage]);

  return (
    <div className={`coffee-shell ${className}`.trim()}>
      <div className={`coffee-back ${beanImage === 'photo' ? 'photo-mode' : ''}`} ref={containerRef} aria-hidden="true" />
      <div className="coffee-content">
        {children}
      </div>
    </div>
  );
};

export default CoffeeBackground;
