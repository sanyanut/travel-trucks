import css from './Button.module.css';
import { Link } from 'react-router-dom';

function Button({ text, link, onClick, variant = 'default', ...props }) {
  return link ? (
    <Link className={`${css.button} ${css[variant]}`} to={link} {...props}>
      {text}
    </Link>
  ) : (
    <button
      className={`${css.button} ${css[variant]}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
