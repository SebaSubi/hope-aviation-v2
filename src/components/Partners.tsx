export default function Partners() {
    return (
        <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl mb-8 text-center">
            <p className=" text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
              Partners
            </p>
          </div>
          <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-3">
            <div className="bg-white/5 p-8 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-tl-2xl">
              <a href="https://uap.edu.ar/">
                <img
                  alt="UAP"
                  src="/uap-logo.svg"
                  width={158}
                  height={48}
                  className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
                />
              </a>
            </div>
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300">
            <a href="https://atcflightschool.com/">
              <img
                alt="ATC"
                src="/ATC-logo.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
              </a>
            </div>
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-tr-2xl">
              <img
                alt="HOPE"
                src="HOPE-logo.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-bl-2xl">
              <img
                alt="Laravel"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300">
              <img
                alt="SavvyCal"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <div className="bg-white/5 p-6 sm:p-10 border-2 border-transparent hover:border-white transition-all duration-300 rounded-br-2xl">
              <img
                alt="Statamic"
                src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
                width={158}
                height={48}
                className="max-h-12 w-full object-contain transition-transform duration-300 transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }