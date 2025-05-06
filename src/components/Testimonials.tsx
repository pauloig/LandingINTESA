'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'CEO at Company',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit',
    image: '/testimonials/john.webp',
  },
  {
    name: 'Sarah Smith',
    role: 'Marketing Director',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit',
    image: '/testimonials/sarah.webp',
  },
  {
    name: 'Michael Johnson',
    role: 'Business Owner',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit',
    image: '/testimonials/michael.webp',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 