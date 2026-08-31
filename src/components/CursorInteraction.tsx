import { useEffect } from 'react';

const CursorInteraction = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.border = '1px solid rgba(0, 229, 255, 0.5)';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '9999';
    cursor.style.transition = 'transform 0.1s ease';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 10}px`;
      cursor.style.top = `${e.clientY - 10}px`;
      const target = e.target as HTMLElement;
      if (target.closest('a, button, [role="button"]')) {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.backgroundColor = 'rgba(0, 229, 255, 0.1)';
      } else {
        cursor.style.transform = 'scale(1)';
        cursor.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
    };
  }, []);

  return null;
};

export default CursorInteraction;
