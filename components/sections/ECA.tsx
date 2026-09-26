"use client"

import Image from "next/image"
import { Calendar, Ticket, Users } from "lucide-react"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { experiences } from "@/lib/data"

export default function ECA() {
  const totalRoles = experiences.reduce((total, society) => total + society.roles.length, 0)

  const distinctEvents = new Set(
    experiences.flatMap((society) => society.roles.flatMap((role) => role.events)),
  ).size

  const currentYear = new Date().getFullYear()
  const earliestYear = Math.min(
    ...experiences.map((society) => {
      const match = society.duration.match(/\d{4}/)
      return match ? Number.parseInt(match[0], 10) : currentYear
    }),
  )
  const yearsActive = currentYear - earliestYear

  return (
    <section id="ECA" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Extracurricular Activities
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Leadership roles across university societies, building communities and running campus events
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
            </div>
          </RevealAnimation>

          <div className="space-y-12">
            {experiences.map((society, index) => (
              <RevealAnimation key={society.organization} delay={index * 0.1}>
                <article>
                  {/* Society header */}
                  <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex items-center justify-center">
                      {society.logo ? (
                        <Image
                          src={society.logo}
                          alt={society.organization}
                          width={56}
                          height={56}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <Users className="h-6 w-6 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        {society.organization}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span className="font-mono text-xs tabular-nums">{society.period}</span>
                      </p>
                    </div>
                  </div>

                  {/* Role progression */}
                  <ol className="relative ml-7 mt-6 space-y-6 border-l border-gray-200 dark:border-gray-700 pl-6">
                    {society.roles.map((role) => (
                      <li key={role.position} className="relative">
                        <span
                          className={`absolute -left-[1.6875rem] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-gray-50 dark:ring-gray-800 ${
                            role.current ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"
                          }`}
                          aria-hidden="true"
                        />

                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{role.position}</h4>
                          {role.current && (
                            <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                              Current
                            </span>
                          )}
                          <span className="ml-auto font-mono text-xs tabular-nums text-gray-500 dark:text-gray-400">
                            {role.period}
                          </span>
                        </div>

                        <p className="mt-2 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                          {role.description}
                        </p>

                        {role.events.length > 0 && (
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <Ticket
                              className="h-3.5 w-3.5 shrink-0 text-gray-400 dark:text-gray-500"
                              aria-hidden="true"
                            />
                            <span className="sr-only">Events</span>
                            {role.events.map((event) => (
                              <span
                                key={event}
                                className="rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-2 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                              >
                                {event}
                              </span>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </article>
              </RevealAnimation>
            ))}
          </div>

          {/* Summary */}
          <RevealAnimation delay={0.3}>
            <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 py-6 sm:divide-x sm:divide-gray-200 sm:dark:divide-gray-700">
              <div className="px-4 text-center">
                <dd className="text-3xl font-semibold tabular-nums text-gray-900 dark:text-white">
                  {experiences.length}
                </dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Societies
                </dt>
              </div>
              <div className="px-4 text-center">
                <dd className="text-3xl font-semibold tabular-nums text-gray-900 dark:text-white">{totalRoles}</dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Roles held
                </dt>
              </div>
              <div className="px-4 text-center">
                <dd className="text-3xl font-semibold tabular-nums text-gray-900 dark:text-white">
                  {distinctEvents}
                </dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Events
                </dt>
              </div>
              <div className="px-4 text-center">
                <dd className="text-3xl font-semibold tabular-nums text-gray-900 dark:text-white">{yearsActive}+</dd>
                <dt className="mt-1 text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Years active
                </dt>
              </div>
            </dl>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
