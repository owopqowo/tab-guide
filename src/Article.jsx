import React, { useEffect } from 'react';

function Article({ id, title, sections, setSubActiveIndex }) {
  useEffect(() => {
    const articles = document.querySelectorAll('.article');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            articles.forEach((article, index) => {
              if (entry.target === article) setSubActiveIndex(index);
            });
          }
        });
      },
      { rootMargin: '-50%', threshold: 0 },
    );

    return () => {
      articles.forEach((article) => observer.observe(article));
    };
  }, []);

  return (
    <article id={id} className="article p-5 first-of-type:pt-10 last-of-type:pb-10">
      <h2 className="text-center text-3xl font-bold">{title}</h2>
      <div className="counter">
        {sections.map((section) => (
          <div key={section.key} className="mt-8 before:block before:text-center before:text-2xl before:font-bold">
            {section.items.map((item, index) => (
              <React.Fragment key={`${section.key}-${index}`}>
                {item.type === 'text' && (
                  <p
                    className="mx-auto mt-4 max-w-3xl text-left text-neutral-800 dark:text-neutral-300"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></p>
                )}
                {item.type === 'image' && (
                  <img
                    loading="lazy"
                    src={item.content}
                    alt={item.alt || ''}
                    className="mx-auto mt-4 aspect-3/2 w-3xl rounded-3xl object-cover"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </article>
  );
}

export default Article;
