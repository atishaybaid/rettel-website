'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section
      id="contact-us"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Have questions about our services? We're here to help. Fill out the
            form below and we'll get back to you as soon as possible.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8 rounded-2xl bg-white/10 p-8 ring-1 ring-white/10 backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-semibold text-white">Get in touch</h3>
              <dl className="mt-4 space-y-4 text-base leading-7 text-blue-100">
                {/* <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <svg
                      className="h-7 w-6 text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                      />
                    </svg>
                  </dt>
                  <dd>
                    702,Sienna Tower,
                    <br />
                   Omaxe Heights,
                    <br />
                    India
                  </dd>
                </div> */}
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <svg
                      className="h-7 w-6 text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                  </dt>
                  <dd>
                    <a className="hover:text-white" href="tel:+91 1234567890">
                      +91 9971310538 , +91 8905926442
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <svg
                      className="h-7 w-6 text-blue-200"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </dt>
                  <dd>
                    <a
                      className="hover:text-white"
                      href="mailto:contact@kirana.com"
                    >
                      passdukan@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 rounded-2xl bg-white/10 p-8 ring-1 ring-white/10 backdrop-blur-sm"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm leading-6 font-medium text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-white focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-medium text-white"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-white focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm leading-6 font-medium text-white"
              >
                Phone number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-white focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm leading-6 font-medium text-white"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset focus:ring-2 focus:ring-white focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="rounded-md bg-white px-3.5 py-2.5 text-center text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  )
}
