function SubNav({ links, onSubNavClick, subActiveIndex }) {
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
            onClick={() => onSubNavClick(index)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SubNav;
