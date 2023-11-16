const navigation = {
  main: [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Book", href: "#contact" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Social media", href: "#social" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-primary font-text hover:text-teal-700"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>

        <p className="mt-10 text-xs leading-5 text-center text-primary font-main">
          &copy; 2023 <span className="text-2xl font-logo">Tender Tips</span>,
          Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
