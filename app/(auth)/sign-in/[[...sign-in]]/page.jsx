
import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";

export default function Page() {
  return (
    <section className="bg-gray-900 min-h-screen">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-800 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Doctor with stethoscope"
            src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            priority
            width={1000}
            height={100}
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="/">
              <span className="sr-only">Home</span>
              <svg
                className="h-8 sm:h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C13.1046 2 14 2.89543 14 4V10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H14V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V14H4C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10H10V4C10 2.89543 10.8954 2 12 2Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to MediTell 🏥
            </h2>

            <p className="mt-4 leading-relaxed text-white/90">
              Sign in to access your healthcare dashboard and connect with patients.
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-gray-800 text-white sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                <svg
                  className="h-8 sm:h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C13.1046 2 14 2.89543 14 4V10H20C21.1046 10 22 10.8954 22 12C22 13.1046 21.1046 14 20 14H14V20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20V14H4C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10H10V4C10 2.89543 10.8954 2 12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to MediTell 🏥
              </h1>

              <p className="mt-4 leading-relaxed text-gray-300">
                Sign in to access your healthcare dashboard and connect with patients.
              </p>
            </div> 
            <SignIn 
              appearance={{
                baseTheme: dark,
                elements: {
                  rootBox: "mx-auto",
                  card: "bg-gray-800 border-gray-700",
                  headerTitle: "text-white",
                  headerSubtitle: "text-gray-300",
                  socialButtonsBlockButton: "bg-gray-700 border-gray-600 text-white hover:bg-gray-600",
                  formFieldLabel: "text-gray-300",
                  formFieldInput: "bg-gray-700 border-gray-600 text-white",
                  footerActionLink: "text-blue-400 hover:text-blue-300"
                }
              }}
            />
          </div>
        </main>
      </div>
    </section>
  );
}