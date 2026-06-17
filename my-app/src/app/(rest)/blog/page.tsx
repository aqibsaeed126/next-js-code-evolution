import Link from 'next/link';

export default async function Blog() {
  await new Promise((res) => setTimeout(() => res('hello'), 2000));
  return (
    <>
      <div>Welcome to the Blog Page</div>
    </>
  );
}
