import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface ScrollToTopLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ children, to, className, ...props }) => {
  const handleClick = () => {
    // Scroll to top immediately
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;