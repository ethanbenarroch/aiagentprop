import React from 'react'
import Button from './Button'

export interface PricingCardProps {
  title: string
  price: string
  frequency: string
  description: string
  features: string[]
  isPopular?: boolean
  buttonText: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  frequency,
  description,
  features,
  isPopular = false,
  buttonText,
  onClick,
}) => {
  return (
    <div
      className={`relative flex flex-col p-6 rounded-2xl bg-white/10 backdrop-blur-sm shadow-lg transition-shadow hover:shadow-xl ${
        isPopular ? 'ring-2 ring-purple-500' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 mt-2 mr-2 px-2 py-1 text-xs font-semibold uppercase text-white bg-purple-600 rounded">
          Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-5xl font-extrabold text-white">
        {price}
        <span className="text-xl font-medium text-white/70">/{frequency}</span>
      </p>
      <p className="mt-4 text-white/80 flex-1">{description}</p>

      <ul className="mt-6 space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center text-white/90">
            <CheckCircle2 className="h-5 w-5 text-green-400 mr-2" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Wire up the onClick prop to the Button */}
      <Button
        size="lg"
        className="mt-6 w-full"
        onClick={onClick}
        type="button"
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default PricingCard
