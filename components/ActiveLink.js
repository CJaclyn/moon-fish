import { useRouter } from 'next/router';

export default function ActiveLink({ children, href, className }) {
  const router = useRouter();
  const style = {
    background: router.asPath === href ? '#FFF0F0' : '',
    padding: router.asPath === href ? '.25rem 1rem' : '',
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} style={style} className={className}>
      {children}
    </a>
  );
}
