export default async function First() {
  await new Promise((res) => setTimeout(() => res('hello'), 2000));
  return <div>Welcome to the Blog first Page</div>;
}
