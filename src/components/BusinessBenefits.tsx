import { useId } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { ChartBarIcon, BoltIcon, TruckIcon } from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'

type BenefitType = {
  name: string | React.ReactElement
  summary: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const benefits: BenefitType[] = [
  {
    name: 'Reach More Customers',
    summary: 'Get discovered by more buyers in your area.',
    description:
      "Don't wait for footfall—bring your shop to customer phones across your neighborhood. More visibility = more orders = more revenue.\n\nP.S. You can still sit at the counter while your phone does the work.",
    icon: ChartBarIcon,
  },
  {
    name: 'Instant Orders, No Hassle',
    summary: 'Accept orders instantly, deliver quickly.',
    description:
      "We make you a part of the quick commerce ecosystem—without the headache of managing tech, stock, or logistics. Just pack and hand over.\n\nWe'll handle the rush. You focus on your fresh bhindi.",
    icon: BoltIcon,
  },
  {
    name: 'Quick Deliveries = Happy Customers',
    summary: 'Deliver fast without any extra effort.',
    description:
      'We assign deliveries smartly so your orders reach customers within minutes—boosting trust, repeat business, and ratings.',
    icon: TruckIcon,
  },
]

function Benefit({
  benefit,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  benefit: BenefitType
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div className="flex items-center gap-x-3">
        <div
          className={clsx(
            'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg p-1',
            isActive ? 'bg-blue-600 text-white' : 'bg-slate-500 text-white',
          )}
        >
          <benefit.icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3
          className={clsx(
            'text-base font-medium',
            isActive ? 'text-blue-600' : 'text-slate-600',
          )}
        >
          {benefit.name}
        </h3>
      </div>
      <p className="mt-3 font-display text-xl text-slate-900">
        {benefit.summary}
      </p>
      <p className="mt-4 text-sm whitespace-pre-line text-slate-600">
        {benefit.description}
      </p>
    </div>
  )
}

function BenefitsMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {benefits.map((benefit) => (
        <div key={benefit.summary}>
          <Benefit benefit={benefit} className="mx-auto max-w-2xl" isActive />
        </div>
      ))}
    </div>
  )
}

function BenefitsDesktop() {
  return (
    <div className="hidden lg:mt-20 lg:block">
      <div className="grid grid-cols-3 gap-x-8">
        {benefits.map((benefit, index) => (
          <div key={benefit.summary}>
            <Benefit
              benefit={benefit}
              isActive={index === 0}
              className="relative"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function BusinessBenefits() {
  return (
    <section
      id="business-benefits"
      aria-label="Benefits for your local business"
      className="pt-20 pb-14 sm:pt-32 sm:pb-20 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Grow Your Local Business With Pass Dukan
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because your kirana or sabji dukaan deserves the reach and speed of
            quick commerce.
          </p>
        </div>
        <BenefitsMobile />
        <BenefitsDesktop />
        <div className="mx-auto mt-16 max-w-2xl text-center md:mt-20">
          <p className="font-display text-lg text-slate-900">
            Want to grow your shop without leaving your gully?
          </p>
          <p className="mt-2 text-lg text-slate-600">
            Pass Dukan brings the future of selling to your front door.
          </p>
        </div>
      </Container>
    </section>
  )
}
