import React from 'react';

function SubNav({ links }) {
  return (
    <nav className="sticky top-14.25 overflow-auto bg-white py-2 shadow-lg shadow-neutral-200/50">
      <div className="-mx-1 flex w-fit px-3">
        {links.map((link) => (
          <a href={link.href} className="mx-1 flex-auto rounded-full px-2 py-1 text-sm whitespace-nowrap">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default SubNav;
