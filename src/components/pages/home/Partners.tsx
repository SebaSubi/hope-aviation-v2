export default function Partners() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl mb-8 text-center">
            <p className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl">
              <span className="bg-gradient-to-r from-indigo-900 via-orange-500 to-gray-300 bg-clip-text text-transparent animate-gradient">
                Partners
              </span>
            </p>
          </div>
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
          <a href="https://uap.edu.ar/" target="_blank">
            <div className="bg-white/5 p-8 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-tl-2xl">
              
                <img
                  alt="UAP"
                  src="/uap-logo.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
                />
              
            </div>
            </a>
            <a href="https://atcflightschool.com/" target="_blank">
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300">
            
              <img
                alt="ATC"
                src="/ATC-logo.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
                </div>
            </a>
            <a href="https://hope.aero/" target="_blank">
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-tr-2xl">
              <img
                alt="HOPE"
                src="HOPE-logo.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            </a>
            <a href="https://outpostcenters.org/" target="_blank">
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-bl-2xl">
              <img
                alt="OCI"
                src="/oci-full-logo.png"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            </a>
            <a href="https://gospelaviation.org/" target="_blank">
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300">
              <img
                alt="Pamas"
                src="/gospel.png"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            </a>
            <a href="https://peruprojects.com/" target="_blank">
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-br-2xl">
              <img
                alt="Peru Projects"
                src="/peru-projects-logo.webp"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            </a>
          </div>
        </div>
      </div>
    )
  }