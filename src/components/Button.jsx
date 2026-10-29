import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', href, className = '', ...props }) => {
    const classes = `button button-${variant === 'outline' ? 'secondary' : variant} button-${size} ${className}`;
    return href ? <a href={href} className={classes} {...props}>{children}</a> : <button type="button" className={classes} {...props}>{children}</button>;
};

export default Button;
