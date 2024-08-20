export default function DashboardLayout({ children }) {
  return (
    <>
      <div>
        <ul className="flex gap-5 p-4">
            <li>Home-2</li>
            <li>About-2</li>
            <li>Contact Us 2</li>
        </ul>
    </div>

    { children }
    </>
    

  );
}
