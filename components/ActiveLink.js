import { useRouter } from "next/router";

export default function ActiveLink({ children, href, className }) {
  const router = useRouter();
  const style = {
    textDecoration: router.asPath === href ? "underline" : "",
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
