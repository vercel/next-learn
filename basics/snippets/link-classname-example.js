// Example: Adding className with <Link>
import Link from 'next/link';

export default function LinkClassnameExample() {
  return (
    <Link href="/" className="foo" target="_blank" rel="noopener noreferrer">
      Hello World
    </Link>
  );
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!
