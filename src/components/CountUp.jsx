import React, { useEffect, useRef, useState } from 'react'

export default function CountUp({ end = 0, duration = 900, format, money }) {
  const [value, setValue] = useState(0)
  const start = useRef(null)

  useEffect(() => {
    let raf = null
    const from = 0
    const to = Number(end) || 0
    const startTime = performance.now()
    function tick(now) {
      const t = Math.min(1, (now - startTime) / duration)
      const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
      const current = Math.round((from + (to - from) * eased))
      setValue(current)
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => raf && cancelAnimationFrame(raf)
  }, [end, duration])

  const formatted = format || money
    ? `৳ ${value.toLocaleString()}`
    : value.toLocaleString()

  return <span className="inline-block">{formatted}</span>
}