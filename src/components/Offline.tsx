import Image from 'next/image'

import rettelMark from '@/images/rettel-mark.png'

const LINKEDIN_URL = 'https://www.linkedin.com/in/pradhuman-baid-375b521a2/'

export function Offline() {
  return (
    <div className="flex h-dvh min-h-[560px] flex-col items-center justify-between overflow-hidden bg-black bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,#3B221E_0%,rgba(0,0,0,0)_70%),radial-gradient(ellipse_50%_40%_at_50%_110%,rgba(132,0,172,0.22)_0%,rgba(0,0,0,0)_70%)] px-6 py-8 text-center text-white">
      <span className="inline-flex items-center gap-[10px] text-[22px] leading-[normal] font-extrabold tracking-[-0.02em]">
        <Image src={rettelMark} alt="" width={26} height={26} priority />
        Rettel
      </span>
      <main className="flex max-w-[680px] flex-col items-center gap-6">
        <div className="inline-flex min-h-10 items-center gap-[10px] rounded-[32px] border-2 border-white/14 bg-[linear-gradient(85deg,rgba(203,0,0,0.20)_7%,rgba(132,0,172,0.20)_51%,rgba(0,172,49,0.20))] px-[18px] text-[14px] leading-[normal] font-semibold text-white/85">
          <span className="size-2 rounded-full bg-[#EE8877] shadow-[0_0_12px_#EE8877]" />
          Offline
        </div>
        <h1 className="m-0 text-[clamp(48px,8vw,96px)] leading-[0.95] font-extrabold tracking-[-0.04em]">
          Rettel has signed off.
        </h1>
        <p className="m-0 text-[clamp(17px,2vw,20px)] leading-[1.5] text-white/72">
          Rettel was an AI news curator. It's no longer running, and the waitlist is closed. Thank you to
          everyone who tried it.
        </p>
      </main>
      <footer className="text-[14px] leading-[normal] text-white/60">
        Built by{' '}
        <a
          href={LINKEDIN_URL}
          className="border-b border-white/30 py-3 font-semibold text-white/70 no-underline hover:text-[#EE8877]"
        >
          Pradhuman Singh Baid
        </a>
      </footer>
    </div>
  )
}
