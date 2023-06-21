import PropTypes from 'prop-types';
import './Button.css';

export function Button(props) {
  const { variant = 'primary', children, ...rest } = props;

  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
