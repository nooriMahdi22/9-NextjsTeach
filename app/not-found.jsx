import Link from 'next/link'

function NotFound() {
  return (
    <div>
      <h2>Not Found </h2>
      <p>😕</p>
      <p>sorry this page has not found </p>
      <Link href="/">home page</Link>
    </div>
  )
}

export default NotFound
