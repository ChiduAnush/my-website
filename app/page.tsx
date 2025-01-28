'use client'

import { useEffect, useRef } from 'react'
import { GeistMono } from 'geist/font/mono'
import Link from 'next/link'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const generateBackground = () => {
      if (!containerRef.current) return
      
      const container = containerRef.current
      const backgroundContainer = container.querySelector('.background-pattern') as HTMLDivElement
      
      if (!backgroundContainer) return
      
      backgroundContainer.innerHTML = ''
      const symbols = '   !X#$%8&*()_{};,.>?/~`\\'
      const containerWidth = window.innerWidth
      const charWidth = 8 // 8px character width
      const charsPerLine = Math.ceil(containerWidth / charWidth)
      
      // Generate enough lines to fill the viewport
      const linesNeeded = Math.ceil(window.innerHeight / 20) // 20px line height
      
      for (let i = 0; i < linesNeeded; i++) {
        const line = document.createElement('div')
        let lineContent = ''
        for (let j = 0; j < charsPerLine; j++) {
          if (Math.random() < 0.2) { // 20% chance of whitespace
            lineContent += ' '
          } else {
            lineContent += symbols[Math.floor(Math.random() * symbols.length)]
          }
        }
        line.textContent = lineContent
        line.style.height = '24px'
        line.style.fontSize = '16px'
        line.className = 'fade-in-line'
        line.style.animationDelay = `${i * 0.07}s` // Stagger the fade-in
        backgroundContainer.appendChild(line)
      }
    }

    generateBackground()
    window.addEventListener('resize', generateBackground)
    return () => window.removeEventListener('resize', generateBackground)
  }, [])

  return (
    <div 
      ref={containerRef}
      className={`min-h-screen relative ${GeistMono.className} overflow-auto`}
      style={{ fontSize: '16px' }}
    >
      {/* Background Pattern  */}
      <div 
        className="background-pattern fixed inset-0 text-[#171717] whitespace-pre pointer-events-none"
        style={{ 
          lineHeight: '24px',
          fontFamily: 'inherit',
          zIndex: 0,
          opacity: 0.06, 
          fontWeight: 500,
        }}
      />
            
      {/* Main Content */}
      <div className="main-content relative min-h-screen pl-4 pr-4 pt-6 space-y-12 lg:pl-16 lg:pt-12 " style={{
        textShadow: '0px 0px 200px rgba(255, 255, 255, 1)',
        lineHeight: '24px',
        fontSize: '16px'
      }}>
        <section className="space-y-0">
          <h1 className="content-line font-normal text-[#171717]">Chidambaram arunachalam</h1>
          <p className="content-line text-[#171717]">bangalore, ind</p>
        </section>

        <section className='space-y-6'>
            <section className="space-y-0 pt-6">
            <h2 className="content-line font-bold text-[#171717]">today</h2>
            {/* <p className="content-line text-[#171717] max-w-2xl" >
                studying to be a webmaster, designing and building interfaces
                everyday. currently obsessed with weightlifting, pickleball, and
                learning 中文.
            </p> */}
            <p className="content-line text-[#171717] max-w-2xl" >
            building stuff and crafting designs daily, aiming to make things 
            simple and beautiful. currently balancing research, 
            internship, & rookie twitter posts(<Link href="https://x.com/itsss_chidu" target="_blank" className='hover:bg-black hover:text-white'>follow pls T_T</Link>)
            </p>
            </section>

            <section className="space-y-0">
            {/* <p className="content-line font-semibold text-[#171717]">previously worked at</p> */}
            <div className="content-line text-[#171717] max-w-2xl">
                <p className="content-line text-[#171717] inline-block mr-3">previously worked at</p>
                <Link href="https://www.nokia.com" target="_blank" className="underline hover:bg-black hover:text-white">nokia</Link>,{' '}
                <Link href="https://www.infosys.com" target="_blank" className="underline hover:bg-black hover:text-white">infosys</Link>,{' '}
                <Link href="https://www.sitesgo.com" target="_blank" className="underline hover:bg-black hover:text-white">sitesGo</Link>.
                {/* <Link href="#" className="underline hover:bg-black hover:text-white">highlight</Link>,{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">codecademy</Link>,{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">smartsheet</Link>,{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">microsoft</Link>,{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">nasa jpl</Link>,{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">amazon</Link>,{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">burberry</Link>, and{' '}
                <Link href="#" className="underline hover:bg-black hover:text-white">spacex</Link>. */}
            </div>
            </section>
        </section>

        <section className='space-y-0'>
            <h2 className="content-line font-bold">stuff i built</h2>
            <p className="content-line">
            <Link href="https://github.com/ChiduAnush/Halt" target="_blank" className="underline hover:bg-black hover:text-white">halt</Link>,{' '}
            <Link href="https://github.com/ChiduAnush/SpotiTunes" target="_blank" className="underline hover:bg-black hover:text-white">spotitunes</Link>,{' '}
            <Link href="https://youtu.be/xvFZjo5PgG0?si=NH6K4iIcb7a-RPK3" className="hover:bg-[#171717] hover:text-white">(〜￣▽￣)〜</Link>,{' '}
            <Link href="https://github.com/ChiduAnush/EmailReadReceipts" target="_blank" className="underline hover:bg-black hover:text-white">emailReadReceipts</Link>.
          </p>
        </section>

        {/* <section className="space-y-0">
          <h2 className="content-line font-bold text-[#171717]">angel investments</h2>
          <p className="content-line text-[#171717]">
            <Link href="#" className="underline hover:bg-black hover:text-white">million</Link>,{' '}
            <Link href="www.youtube.com" className="hover:bg-black hover:text-white">(〜￣▽￣)〜</Link>,{' '}
            <Link href="#" className="underline hover:bg-black hover:text-white">adaline</Link>,{' '}
            <Link href="#" className="underline hover:bg-black hover:text-white">onboardbase</Link>,{' '}
            <Link href="#" className="underline hover:bg-black hover:text-white">scalar</Link>,{' '}
            <Link href="#" className="underline hover:bg-black hover:text-white">replit</Link>,{' '}
            <Link href="#" className="underline hover:bg-black hover:text-white">wander</Link>{' '}
            and <Link href="#" className="underline hover:bg-black hover:text-white">maybe</Link>.
          </p>
        </section> */}

        <section className="space-y-0">
          <h2 className="content-line font-bold text-[#171717]">links</h2>
          <div className="space-y-0">
            <p className="content-line text-[#171717]">
              <Link href="https://x.com/itsss_chidu" target="_blank" className='underline hover:bg-[#171717] hover:text-white'>twitter/x</Link>
            </p>
            <p className="content-line text-[#171717]">
              <Link href="https://www.linkedin.com/in/chidambaram-arunachalam" target="_blank" className="underline hover:bg-black hover:text-white">LinkedIn</Link>
            </p>
            <p className="content-line text-[#171717]">
              <Link href="https://www.youtube.com/@chiduschamberofmusic9146" target="_blank" className='underline hover:bg-black hover:text-white'>youtube</Link>
            </p> 
            <p className="content-line text-[#171717]">
              <Link href="#" className="underline hover:bg-black hover:text-white">blog</Link>
            </p>
          </div>
        </section>


      </div>
    </div>
  )
}

