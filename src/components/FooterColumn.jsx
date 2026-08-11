import React from 'react';

const FooterLink = ({ link }) => {
  // Si tiene un href, es un enlace <a>.
  if (link.href) {
    return (
      <a
        href={link.href}
        onClick={link.onClick} // Maneja casos como e.preventDefault()
        target={link.target}
        rel={link.rel}
        className="hover:text-blue-600 transition"
      >
        {link.label}
      </a>
    );
  }

  // Si no, es un botón <button>.
  return (
    <button
      onClick={link.onClick}
      className="hover:text-blue-600 transition cursor-pointer font-medium bg-transparent border-none p-0 text-left"
    >
      {link.label}
    </button>
  );
};

const FooterColumn = ({ title, links }) => (
  <div>
    <h4 className="font-bold text-slate-900 mb-6">{title}</h4>
    <ul className="space-y-4 text-sm text-slate-600 font-medium">
      {links.map((link, index) => <li key={index}><FooterLink link={link} /></li>)}
    </ul>
  </div>
);

export default FooterColumn;