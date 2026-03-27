export default function Portfolio() {
  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-5">Portfolio</h2>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-gray-800 p-5 rounded">
          <h3 className="font-bold">Project 1</h3>
          <p>Aplikasi Android Cafe</p>
        </div>

        <div className="bg-gray-800 p-5 rounded">
          <h3 className="font-bold">Project 2</h3>
          <p>Website Market Day</p>
        </div>
      </div>
    </section>
  )
}