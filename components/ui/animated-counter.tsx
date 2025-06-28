"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

export function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "", decimals = 0 }: AnimatedCounterProps) {
  const [hasAnimated, setHasAnimated] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [inView, hasAnimated])

  return (
    <span ref={ref}>
      {hasAnimated ? (
        <CountUp end={end} duration={duration} suffix={suffix} prefix={prefix} decimals={decimals} />
      ) : (
        `${prefix}0${suffix}`
      )}
    </span>
  )
}
