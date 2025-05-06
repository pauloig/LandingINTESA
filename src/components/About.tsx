'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              We help drive your business forward faster
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Mission</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Vision</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px]"
          >
            <Image
              src="/about.webp"
              alt="About Us"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 