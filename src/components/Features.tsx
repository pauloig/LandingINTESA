'use client'

import { motion } from 'framer-motion'
import { 
  ChartBarIcon, 
  DevicePhoneMobileIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Social media marketing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit',
    icon: ChartBarIcon,
  },
  {
    name: 'Amazon affiliate marketing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Email marketing',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit',
    icon: EnvelopeIcon,
  },
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What we offer</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 