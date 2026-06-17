export default async function Second() {
  await new Promise((res) => setTimeout(() => res('hello'), 2000));
  return <div>Welcome to the Blog second Page</div>;
}
