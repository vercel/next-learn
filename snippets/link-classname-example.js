// Example: Adding className with <Link>
import Link from 'next/link'

export default function LinkClassnameExample() {
  // To add attributes like className, target, rel, etc.
  // add them to the <a> tag, not to the <Link> tag.
  return (
    <Link href="/">
      <a className="foo" target="_blank" rel="noopener noreferrer">
        Hello World
      </a>
    </Link>
  )
}

// Take a look at https://nextjs.org/docs/api-reference/next/link
// to learn more!
