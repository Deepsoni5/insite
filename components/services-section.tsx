"use client";

import { Code2, Cloud, Database, Globe2, Lock, Smartphone } from "lucide-react";
import { MotionDiv } from "./ui/motion-wrapper";
import { BackgroundEffects } from "./ui/background-effects";

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored solutions built to address your unique business challenges",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scalable cloud solutions for modern business needs",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
    },
    {
      icon: Globe2,
      title: "Digital Transformation",
      description: "Guide your business through digital evolution",
    },
  ];

  return (
    <section id="services" className="relative bg-white py-24">
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
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </MotionDiv>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <MotionDiv
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/80 p-8 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
            >
              <service.icon className="h-8 w-8 text-blue-600" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}