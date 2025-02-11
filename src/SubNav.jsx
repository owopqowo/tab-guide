function SubNav({ links, subActiveIndex }) {
  const handleClick = (event, id) => {
    event.preventDefault();
    const targetElement = document.querySelector(id);
    const headerHeight = document.querySelector('#header')?.offsetHeight || 0;

    if (targetElement) {
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetPosition - headerHeight, behavior: 'smooth' });
    }
  };

  return (
    <nav className="py-2 shadow-lg shadow-neutral-200/50">
      <div className="-mx-1 flex w-fit px-3">
        {links.map((link, index) => (
          <a
            key={link.key}
            href={link.href}
            className={`mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap ${
              subActiveIndex === index ? 'bg-black text-white' : ''
            }`}
            onClick={(event) => handleClick(event, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SubNav;
