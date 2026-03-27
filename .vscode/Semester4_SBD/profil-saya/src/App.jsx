import Navbar from "./components/navbar"

export default function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Halo, Saya Evan 👋
        </h1>
        <p className="text-gray-400 text-lg">
          Web Developer | UI Designer
        </p>

        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition">
          Lihat Portfolio
        </button>
      </section>

      {/* About */}
      <section className="px-10 py-16 bg-gray-800">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 max-w-2xl">
          Saya adalah mahasiswa yang memiliki minat di bidang pengembangan website 
          dan desain UI/UX. Saya senang membuat tampilan modern dan interaktif.
        </p>
      </section>

      {/* Portfolio */}
      <section className="px-10 py-16">
        <h2 className="text-3xl font-bold mb-6">Portfolio</h2>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Project Cafe App</h3>
            <p className="text-gray-400">Aplikasi Android Cafe</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Website Market Day</h3>
            <p className="text-gray-400">Website penjualan sekolah</p>
          </div>

          <div className="bg-gray-800 p-5 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold">UI Design</h3>
            <p className="text-gray-400">Desain Figma modern</p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="px-10 py-16 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-400">Email: evan@email.com</p>
      </section>

    </div>
  )
}