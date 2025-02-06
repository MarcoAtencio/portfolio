import Image from "next/image";
import GithubIcon from "../images/social/github.svg";

export default function Home() {
  return (
    <div className="group/spotlight relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background:
            "radial-gradient(600px at 637px 548px, rgba(29, 78, 216, 0.15), transparent 80%)",
        }}
      ></div>

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                Marco Atencio
              </h1>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                FullStack Developer
              </h2>
              <p className="mt-4 max-w-xs leading-normal">
                Transformamos ideas en experiencias digitales.
              </p>
              <nav className="nav hidden lg:block">
                <ul className="mt-16 w-max">
                  <li>
                    <a
                      href="#about"
                      className="group flex items-center py-3 active"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        About
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#experience"
                      className="group flex items-center py-3 active"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Experience
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="group flex items-center py-3 active"
                    >
                      <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                      <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                        Projects
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center">
              <li className="mr-5 shrink-0 text-xs">
                <a href="" className="block hover:text-slate-200">
                  <span className="sr-only">Github</span>
                  <Image src={GithubIcon} priority alt="Github" />
                </a>
              </li>
            </ul>
          </header>
          <main className="pt-24 lg:w-[52%] lg:py-24" id="content">
            <section
              id="about"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div>
                <p className="mb-4">
                  👋 Hola! Mi nombre es Marco Atencio y soy un programador con
                  más de 3 años de experiencia en el desarrollo de software.
                  Tengo una sólida base en JavaScript, React y Angular y también
                  tengo experiencia en el desarrollo de aplicaciones móviles con
                  React Native.
                </p>
                <p className="mb-4">
                  Me considero una persona altamente motivada y autodidacta que
                  siempre está al tanto de las últimas tecnologías del mercado.
                  Me apasiona trabajar en proyectos desafiantes que me permiten
                  desarrollar mis habilidades y ofrecer soluciones de calidad a
                  mis clientes.
                </p>
                <p className="mb-4">
                  💬 Si quieres saber más sobre mi experiencia y habilidades, no
                  dudes en echar un vistazo a mi currículum vitae o enviarme un
                  mensaje. ¡Estaré encantado de hablar contigo!
                </p>
              </div>
            </section>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div>
                <ol className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2023 - Present
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              href="https://www.bbva.pe/"
                              target="_blank"
                              rel="noreferrer noopener"
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>BBVA Perú</span>
                            </a>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Build and maintain critical components used to
                          construct Klaviyo’s frontend, across the whole
                          product. Work closely with cross-functional teams,
                          including developers, designers, and product managers,
                          to implement and advocate for best practices in web
                          accessibility.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Java
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Oracle
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Cobol
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Abril 2022 - Diciembre 2022
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            href="https://gestionysistemas.com/"
                            target="_blank"
                            rel="noreferrer noopener"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                            <span>G&S Gestión y Sistemas</span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Desarrollé interfaces en microfrontends y creé
                          librerías UI personalizadas para el proyecto VUCE 2.0,
                          asegurando integración, consistencia y calidad visual
                          en colaboración con los equipos de back-end y diseño.
                          Además, implementé la automatización de flujos de
                          trabajo con Camunda, optimizando procesos internos y
                          mejorando la eficiencia operativa. También diseñé
                          sistemas automatizados de validación de documentos,
                          garantizando la integridad y autenticidad de los datos
                          a través de procesos eficientes.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Angular
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              TypeScript
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Swagger
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Camunda
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        Junio 2021 - Marzo 2022
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            href="https://www.abaco.com.pe/"
                            target="_blank"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>

                            <span>Cooperativa de Ahorro y Crédito ABACO</span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Desarrollé interfaces para una aplicación financiera
                          con React Native, asegurando funcionalidad y
                          usabilidad en colaboración con los equipos de diseño y
                          back-end. Gestioné el estado de la aplicación con
                          Redux para garantizar estabilidad, e implementé
                          autenticación clásica y biométrica local para mejorar
                          la seguridad y flexibilidad del inicio de sesión.
                          Además, realicé el despliegue utilizando Expo,
                          optimizando la publicación y distribución en tiendas
                          de aplicaciones móviles.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React Native
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Expo
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Redux
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Figma
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                        2024 - Present
                      </div>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <a
                            href="#"
                            target="_blank"
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          >
                            <span>Genes Perú</span>
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Build and maintain critical components used to
                          construct Klaviyo’s frontend, across the whole
                          product. Work closely with cross-functional teams,
                          including developers, designers, and product managers,
                          to implement and advocate for best practices in web
                          accessibility.
                        </p>
                        <ul className="mt-2 flex flex-wrap">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              React
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Firebase
                            </div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                              Strapi
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </section>
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            href=""
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>Build a Spotify Connected</span>
                          </a>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          Video course that teaches how to build a web app with
                          the Spotify Web API. Topics covered include the
                          principles of REST APIs, user auth flows, Node,
                          Express, React, Styled Components, and more.
                        </p>
                      </div>
                      <Image
                        src="https://plus.unsplash.com/premium_photo-1668359409953-d6df18fa8f1c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="a image"
                        className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        width={200}
                        height={48}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section
              id="writing"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </section>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/file.svg"
                  alt="File icon"
                  width={16}
                  height={16}
                />
                Learn
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/window.svg"
                  alt="Window icon"
                  width={16}
                  height={16}
                />
                Examples
              </a>
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  aria-hidden
                  src="/globe.svg"
                  alt="Globe icon"
                  width={16}
                  height={16}
                />
                Go to nextjs.org →
              </a>
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
