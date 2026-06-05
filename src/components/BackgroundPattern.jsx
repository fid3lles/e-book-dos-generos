import { useEffect, useRef } from 'react'
import { BookIcon, PencilIcon, BackpackIcon } from './icons/BackgroundIcons'

const ICONS = [BackpackIcon, PencilIcon, BookIcon]

// Camada lenta — grid denso, ícones maiores
const ITEMS_SLOW = [
  [1, 10, -5, 18, 14], [0, 35, -3, -12, 15], [2, 62, -6,  8, 16],
  [1, 80, -2, -20, 14],[0, 48, -7, 15, 15],  [2, 22, -4, -8, 16],
  [0,  3,  2, -15, 16], [1, 19,  6,  22, 14], [2, 38,  1,  -8, 17],
  [0, 52,  8,  18, 15], [1, 70,  3, -20, 13], [2, 88,  7,  12, 16],
  [2,  8, 18,  10, 15], [0, 24, 22, -12, 17], [1, 42, 16,  25, 14],
  [2, 60, 21, -18, 16], [0, 76, 15,   8, 15], [1, 93, 20, -22, 13],
  [2, 16, 12, -15, 14], [0, 42, 25,  20, 15], [1, 74, 40,  -8, 14],
  [1,  5, 32, -18, 14], [2, 28, 36,  15, 16], [0, 46, 30,  -5, 18],
  [1, 64, 38,  20, 15], [2, 82, 32, -10, 14], [0, 96, 35,  15, 16],
  [0, 12, 46,  22, 15], [1, 32, 50,  -8, 16], [2, 55, 44,  12, 17],
  [0, 72, 52, -18, 14], [1, 87, 47,  25, 15], [2, 98, 54, -12, 13],
  [2, 38, 55,  12, 16], [0, 85, 65, -20, 15], [1, 55, 78,  10, 14],
  [2,  6, 60, -20, 16], [0, 22, 65,  10, 15], [1, 44, 58, -15, 17],
  [2, 62, 63,  18, 14], [0, 80, 59,  -8, 16], [1, 95, 68,  20, 15],
  [1,  3, 74,  15, 14], [2, 26, 78, -22, 16], [0, 50, 72,   8, 18],
  [1, 68, 80, -15, 15], [2, 85, 75,  20, 14], [0, 96, 82, -10, 16],
  [2, 18, 83, -12, 16], [0, 70, 28,  18, 15],
  [0, 10, 89, -18, 15], [1, 30, 93,  12, 14], [2, 48, 88,  -8, 16],
  [0, 65, 92,  22, 15], [1, 78, 87, -15, 17], [2, 92, 91,  10, 14],
  [0,  8, 100,  12, 15], [1, 38, 102, -18, 14], [2, 58, 100, 10, 16],
  [0, 75, 103,  -8, 15], [1, 90, 101,  22, 14], [2, 20, 104,-15, 16],
]

// Camada rápida — disposição alternada, ícones menores
const ITEMS_FAST = [
  [2, 15, -4,  10, 11], [0, 42, -6, -18, 11], [1, 70, -3,  15, 12],
  [2, 88, -5,  -8, 11], [0, 25, -7,  20, 12],
  [1,  8,  5,  15, 11], [2, 30,  9, -12, 12], [0, 58,  4,  22, 11],
  [1, 78, 11, -18, 12], [2, 95,  6,  10, 11],
  [0, 15, 24,  -8, 11], [1, 38, 19,  25, 12], [2, 65, 26, -15, 11],
  [0, 84, 21,   8, 12],
  [1,  4, 38, -22, 11], [2, 22, 42,  12, 12], [0, 50, 35, -10, 11],
  [1, 72, 40,  20, 12], [2, 92, 33,  -8, 11],
  [0, 18, 52,  18, 11], [1, 40, 48, -15, 12], [2, 68, 56,   8, 11],
  [0, 88, 50, -20, 12],
  [1,  8, 62, -12, 11], [2, 32, 66,  18, 12], [0, 55, 60,  -8, 11],
  [1, 78, 68,  15, 12], [2, 97, 63, -18, 11],
  [0, 14, 76,  10, 11], [1, 36, 80, -20, 12], [2, 60, 74,  12, 11],
  [0, 82, 78,  -8, 12],
  [1,  5, 86, -15, 11], [2, 28, 90,  20, 12], [0, 52, 84, -10, 11],
  [1, 74, 88,  15, 12], [2, 94, 86, -12, 11],
  [0, 10, 101, -15, 11], [1, 35, 103, 18, 12], [2, 62, 101, -8, 11],
  [0, 82, 104,  12, 12], [1, 48, 105,-20, 11],
]

function PatternLayer({ items, speed, color }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const section = el.parentElement
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      el.style.transform = `translateY(${-rect.top * speed}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className="absolute inset-0 pointer-events-none select-none"
      style={{ willChange: 'transform' }}
    >
      {items.map(([iconIdx, x, y, rotate, size], i) => {
        const Icon = ICONS[iconIdx]
        return (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `rotate(${rotate}deg)`,
              color,
            }}
          >
            <Icon size={size} />
          </div>
        )
      })}
    </div>
  )
}

export default function BackgroundPattern() {
  return (
    <>
      <PatternLayer items={ITEMS_SLOW} speed={0.12} color="rgb(147 197 253 / 0.18)" />
      <PatternLayer items={ITEMS_FAST} speed={0.28} color="rgb(147 197 253 / 0.12)" />
    </>
  )
}
