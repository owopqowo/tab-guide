import { useRef } from 'react';

function SubNav({ links, subActiveIndex, scrollDirection }) {
  const clickedRef = useRef(false);

  const handleClick = (event, id) => {
    event.preventDefault();
    const targetElement = document.querySelector(id);
    const headerHeight = document.querySelector('#header')?.offsetHeight || 0;

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetPosition - headerHeight, behavior: 'smooth' });
    }

    if (!clickedRef.current) {
      clickedRef.current = true;
      setTimeout(() => {
        clickedRef.current = false;
      }, 1000);
    }
  };

  return (
    <nav
      className={`sticky top-[99px] right-0 left-0 z-40 bg-white py-2 shadow-lg shadow-neutral-200/50 transition-transform dark:bg-neutral-800 dark:shadow-neutral-900/50 ${clickedRef.current || scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="-mx-1 flex w-fit px-3">
        {links.map((link, index) => (
          <a
            key={link.key}
            href={link.href}
            className={`mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap transition ${
              subActiveIndex === index ? 'bg-black text-white dark:bg-white dark:text-black' : ''
            }`}
            onClick={(event) => handleClick(event, link.href)}
            aria-selected={subActiveIndex === index}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SubNav;
