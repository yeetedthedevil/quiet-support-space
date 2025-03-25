
import { useEffect, useState } from 'react';

const BackgroundEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle mouse-follow effect
    const handleMouseMove = (e: MouseEvent) => {
      // Dampen the movement for subtlety
      setMousePosition({
        x: e.clientX / 50,
        y: e.clientY / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-indigo-50/20 to-purple-50/30 dark:from-blue-900/20 dark:via-indigo-900/10 dark:to-purple-900/20 transition-colors duration-500"
      />
      
      {/* Primary blur blob */}
      <div 
        className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-200/30 dark:bg-blue-600/10 blur-4xl animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)`,
        }}
      />
      
      {/* Secondary blur blob */}
      <div 
        className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-200/30 dark:bg-purple-600/10 blur-4xl animate-pulse-slow"
        style={{
          animationDelay: '2s',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        }}
      />
      
      {/* Additional accent blob */}
      <div 
        className="absolute top-[40%] right-[20%] w-[40%] h-[40%] rounded-full bg-indigo-200/20 dark:bg-indigo-500/10 blur-4xl animate-pulse-slow"
        style={{
          animationDelay: '1s',
          transform: `translate(${mousePosition.y / 2}px, ${mousePosition.x / 2}px)`,
        }}
      />
      
      {/* Noise overlay for texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 dark:opacity-20 mix-blend-overlay" />
    </div>
  );
};

export default BackgroundEffect;
