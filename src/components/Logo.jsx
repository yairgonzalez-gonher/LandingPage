import { Link } from 'react-router-dom';

export default function Logo({
  showWordmark = true,
  wordmarkClassName = 'text-steel',
  imgClassName = 'h-10 w-auto',
  className = '',
}) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src="/logo-mark.svg"
        alt="GONSoftLab"
        className={imgClassName}
      />
      {showWordmark && (
        <span className={`text-lg font-bold leading-tight ${wordmarkClassName}`}>
          GONSoftLab
        </span>
      )}
    </Link>
  );
}
