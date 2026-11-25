
function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 shadow-sm">
        <h1 className="text-2xl font-bold text-blue-600">
          PulseWorks
        </h1>

        <div className="flex gap-8">
          <a href="#home" className="hover:text-blue-600">Home</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="flex min-h-[80vh] flex-col items-center justify-center bg-blue-50 px-6 text-center">

        <h1 className="text-4xl font-bold md:text-6xl">
          Welcome to <span className="text-blue-600">PulseWorks</span>
        </h1>

        <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
          We create simple digital solutions and explore new
          ideas through technology. Take a look at what we do.
        </p>

        <a
          href="#about"
          className="mt-7 rounded-lg bg-blue-600 px-7 py-3 text-white hover:bg-blue-700"
        >
          Learn More
        </a>

      </section>

      {/* About */}
      <section id="about" className="px-8 py-20 text-center">

        <h2 className="text-3xl font-bold">
          About Us
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-600">
          PulseWorks is a place where we share our ideas,
          learn new things and work on digital projects.
          Our aim is to create useful things and improve
          our skills through every project.
        </p>

      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-50 px-8 py-16 text-center">

        <h2 className="text-3xl font-bold">
          Contact Us
        </h2>

        <p className="mt-4 text-gray-600">
          Have a question or an idea? Feel free to contact us.
        </p>

        <a
          href="mailto:yourmail@example.com"
          className="mt-6 inline-block rounded-lg bg-blue-600 px-7 py-3 text-white hover:bg-blue-700"
        >
          Send an Email
        </a>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 px-5 py-5 text-center text-white">
        <p className="text-sm">
          footer
        </p>
      </footer>

    </div>
  )
}

export default LandingPage
