function BarChart() {
  return <div>Bar Chart</div>;
}

// default export in page.tsx and can use other components in this file
export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <BarChart />
    </div>
  );
}
