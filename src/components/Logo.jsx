import { Link } from 'react-router-dom';

export default function Logo({
  showWordmark = true,
  wordmarkClassName = 'text-steel',
  imgClassName = 'h-10 w-auto',
  className = '',
}) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      <img src="/logo.svg" alt="GON Soft Lab" className={imgClassName} />
      {showWordmark && (
        <span className={`text-lg font-bold leading-tight ${wordmarkClassName}`}>
          GON Soft Lab
        </span>
      )}
    </Link>
  );
}
