import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import howItWorksImage from '@/images/app_infographic_withoutClubbing.png'

const steps = [
  {
    title: 'Download the App',
    description:
      "Get started by downloading our app from the Play Store or App Store. It's free to download and easy to set up.",
  },
  {
    title: 'Place Your Order',
    description:
      'Browse through fresh groceries and vegetables, add them to your cart, and place your order with just a few taps.',
  },
  {
    title: 'Get Instant Delivery',
    description:
      'Your order will be delivered to your doorstep within minutes, fresh and exactly as you ordered.',
  },
]

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How Pass Dukan works"
      className="relative overflow-hidden bg-blue-600 pt-20 pb-28 sm:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            How Pass Dukan Works
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Get your groceries and vegetables delivered in minutes with our
            simple and efficient process.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-xl shadow-blue-900/20 sm:max-w-none">
              <Image
                src={howItWorksImage}
                alt="How Pass Dukan works"
                className="w-full"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white/10 p-6 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-x-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-blue-600">
                    <span className="text-lg font-semibold">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-white">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-blue-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
