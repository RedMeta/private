import { useEffect, useRef, ReactElement, useState } from 'react';

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
  depth: number;
  floatOffset: number;
  floatSpeed: number;
  baseY: number;
  maxSpeed: number;
  hue: number;
};

type CoffeeBackgroundProps = {
  children: ReactElement;
  beanCount?: number;
  className?: string;
};

const CoffeeBackground = ({ children, className = '' }: CoffeeBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const beanCount = isMobile ? 20 : 50;


  useEffect(() => {
    const container = containerRef.current;
    // let randomColor = 'transparent';

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

      bean.classList.add('photo-mode');

      const size = 34 + Math.random() * 28;
      bean.style.setProperty('--bean-size', `${size}px`);
      bean.style.willChange = 'transform';

      // Randomly select one of 6 different bean images
      const beanImages = [
        '/bean-1.png',
        '/bean-2.png',
        '/bean-3.png',
        '/bean-4.png',
        '/bean-5.png',
        '/bean-6.png'
      ];
      const randomBean = beanImages[Math.floor(Math.random() * beanImages.length)];
      const bgImage = `url('${randomBean}')`;
      bean.style.backgroundImage = bgImage;
      bean.style.backgroundSize = '100% 100%';
      bean.style.backgroundPosition = 'center';
      bean.style.backgroundRepeat = 'no-repeat';
      bean.style.borderRadius = '40%'; // Make element look bean-like

      const boundsWidth = container.clientWidth;
      const boundsHeight = container.clientHeight;
      const x = Math.random() * Math.max(1, boundsWidth - size);
      const y = Math.random() * Math.max(1, boundsHeight - size);

      const angle = Math.random() * Math.PI * 2;
      const speed = 12 + Math.random() * 24;
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() * 70 - 35);

      // Add depth for parallax effect
      const depth = Math.random();
      const floatSpeed = 1.5 + Math.random() * 4;
      const floatOffset = Math.random() * Math.PI * 2;
      const maxSpeed = speed;
      const hue = Math.random() * 15 - 7.5;

      const state: BeanState = {
        el: bean,
        x,
        y,
        baseY: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rotation,
        rotationSpeed,
        size,
        radius: size / 2,
        color: 'white',
        depth,
        floatSpeed,
        floatOffset,
        maxSpeed,
        hue,
      };

      // Apply depth-based styling
      const zIndex = Math.floor(depth * 100);
      bean.style.zIndex = String(zIndex);
      const opacity = 0.6 + depth * 0.4;
      bean.style.opacity = String(opacity);

      // Add subtle glow effect for closer beans
      if (depth > 0.8) {
        const glowIntensity = (depth - 0.8) * 5;
        bean.style.boxShadow = `0 0 ${6 + glowIntensity * 4}px rgba(227, 30, 36, ${0.08 * glowIntensity})`;
      }

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
        // Apply air resistance/damping for smooth drifting
        bean.vx *= 0.98;
        bean.vy *= 0.98;

        bean.x += bean.vx * delta;
        bean.y += bean.vy * delta;

        // Soft wrap-around at edges instead of bouncing
        if (bean.x <= -bean.size) {
          bean.x = boundsWidth;
        } else if (bean.x >= boundsWidth) {
          bean.x = -bean.size;
        }

        if (bean.y <= -bean.size) {
          bean.y = boundsHeight;
        } else if (bean.y >= boundsHeight) {
          bean.y = -bean.size;
        }
      }

      //let's not use them for now
      resolveCollisions();

      for (const bean of beans) {
        bean.rotation += bean.rotationSpeed * delta;

        // Add floating animation on top of physics
        const floatingY = Math.sin(now / 1000 * bean.floatSpeed + bean.floatOffset) * (8 + bean.depth * 12);
        const displayY = bean.y + floatingY;

        // Parallax scale effect - closer beans appear slightly larger
        const scale = 0.85 + bean.depth * 0.15;

        // Calculate current speed for velocity-based effects
        const currentSpeed = Math.hypot(bean.vx, bean.vy);
        const speedRatio = currentSpeed / bean.maxSpeed;

        // Velocity-based tilt - beans lean in their movement direction
        const tiltAmount = speedRatio * 8;

        // Subtle motion blur based on speed
        const blur = speedRatio * 0.3;

        // Minimal dynamic brightness
        const brightness = 1 - (speedRatio * 0.05);

        // Apply subtle hue shift
        const filter = `blur(${blur}px) brightness(${brightness}) hue-rotate(${bean.hue * 0.4}deg)`;
        bean.el.style.filter = filter;

        // Transform with gentle perspective tilt
        bean.el.style.transform = `translate3d(${bean.x}px, ${displayY}px, 0) rotate(${bean.rotation}deg) skewX(${tiltAmount * 0.15}deg) scale(${scale})`;
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearBeans();
    };
  }, [beanCount]);

  return (
    <div className={`coffee-shell ${className}`.trim()}>
      <div className={`coffee-back photo-mode'}`} ref={containerRef} aria-hidden="true" />
      <div className="coffee-content">
        {children}
      </div>
    </div>
  );
};

export default CoffeeBackground;
