"use client"

import { useEffect, useState } from "react"
import ScrollFadeIn from "./scroll-fade-in"

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    const timer = requestAnimationFrame((time) => {
      startTime = time
      const tick = () => {
        const elapsed = performance.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        setCount(Math.floor(target * progress))
        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }
      tick()
    })

    return () => cancelAnimationFrame(timer)
  }, [target, duration])

  return <span>{count}</span>
}

export default function Expertise() {
  const [isVisible, setIsVisible] = useState(false)

  const expertise = [
    { title: "Portfolio Value", stat: 2, suffix: "M+" },
    { title: "Active Investments", stat: 33, suffix: "+ Units" },
    { title: "Occupancy Rate", stat: 90, suffix: "%+" },
  ]

  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {expertise.map((item, idx) => (
            <ScrollFadeIn key={idx} delay={idx * 100}>
              <div className="text-center" onMouseEnter={() => setIsVisible(true)}>
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                  {isVisible ? <CountUp target={item.stat} /> : item.stat}
                  <span>{item.suffix}</span>
                </div>
                <p className="text-text-secondary text-lg">{item.title}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
