import sitemap from "./sitemap.data";

const Sitemap = () => {
  return (
    <nav className="my-5 grid grid-cols-2 gap-x-4 gap-y-12 text-sm">
      {sitemap.map((part) => (
        <div key={part.title}>
          <h5 className="font-bold uppercase tracking-wide">{part.title}</h5>
          <ul>
            {part.nav.map((item) => (
              <li key={item.title} className="my-6">
                <a href={item.path} className="link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default Sitemap;
