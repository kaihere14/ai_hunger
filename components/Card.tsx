import { AI } from '@/utils/models/ai.model'
import Image from 'next/image'

const Card = ({name, image, description,personality,slotNumber}:AI) => {
  return (
    <div className="w-80 bg-white/10 border border-white/20 rounded-4xl overflow-hidden flex flex-col shadow-xl transition-all hover:shadow-2xl">
  {/* Image Container - Simplified padding and rounding */}
  <div className="p-3 rounded-4xl">
    <img 
      src={image} 
      alt={name} 
      className="h-60 w-full object-cover rounded-4xl"
    />
  </div>

  {/* Content Container - Better spacing and hierarchy */}
  <div className="px-6 pt-2 pb-6 flex flex-col gap-2">
    <h1 className="text-2xl font-bold text-black tracking-tight">
      {name}
    </h1>
    <p className="text-black/70 text-sm leading-relaxed line-clamp-3">
      {description}
    </p>
  </div>

  {/* Tags Container - Removed absolute positioning for better flow */}
  <div className="px-6 pb-6 mt-auto">
    <div className="flex gap-2 flex-wrap">
      {personality.map((item, index) => (
        <span 
          key={index}
          className="bg-black/10 px-3 py-1 rounded-full text-xs text-black/90 border border-white/10"
        >
          {item}
        </span>
      ))}
    </div>
  </div>
</div>
  )
}

export default Card