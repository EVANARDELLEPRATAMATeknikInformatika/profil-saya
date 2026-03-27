export default function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-gray-800">
      <h1 className="font-bold text-xl">MyProfile</h1>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>About</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}