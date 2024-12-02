"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { MotionDiv } from "./ui/motion-wrapper";
import { BackgroundEffects } from "./ui/background-effects";

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-gray-50 py-24">
      <BackgroundEffects />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Let's discuss how we can help transform your business
          </p>
        </MotionDiv>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                content: "123 Innovation Street, Tech City, TC 12345",
              },
              {
                icon: Phone,
                title: "Call Us",
                content: "+1 (555) 123-4567",
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "contact@techcompany.com",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-sm"
              >
                <item.icon className="h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-gray-600">{item.content}</p>
                </div>
              </div>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}