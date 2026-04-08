import { useInView } from '../hooks/useInView'

export default function BentoCard({ children, className = '' }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`bg-white border border-gray-200 rounded-2xl p-7 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3.5'} ${className}`}
    >
      {children}
    </div>
  )
}
