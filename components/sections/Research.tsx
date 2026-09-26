"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Award, Calendar, Check, FileText, Quote, Tag, Users } from "lucide-react"
import { RevealAnimation } from "@/components/ui/reveal-animation"
import { personalInfo, publications } from "@/lib/data"

const statusStyles: Record<string, { dot: string; label: string }> = {
  Accepted: {
    dot: "bg-emerald-500",
    label: "text-emerald-700 dark:text-emerald-400",
  },
  "Under review": {
    dot: "bg-amber-500",
    label: "text-amber-700 dark:text-amber-400",
  },
  Withdrawn: {
    dot: "bg-gray-400 dark:bg-gray-600",
    label: "text-gray-500 dark:text-gray-400",
  },
}

export default function Research() {
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const copyBibtex = async (arxivId: string, bibtex: string) => {
    try {
      await navigator.clipboard.writeText(bibtex)
      setCopiedId(arxivId)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopiedId(null), 2000)
    } catch {
      // Clipboard unavailable (insecure context or denied permission) - leave the label unchanged.
    }
  }

  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <RevealAnimation>
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Research &amp; Publications
              </h2>

              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Peer-reviewed and preprint work on the evaluation and political behavior of large language models
              </p>

              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mt-6" />
            </div>
          </RevealAnimation>

          <ol className="border-t border-gray-200 dark:border-gray-800">
            {publications.map((publication, index) => {
              const status = statusStyles[publication.status] ?? statusStyles.Withdrawn
              const isCopied = copiedId === publication.arxivId

              return (
                <li key={publication.arxivId} className="group border-b border-gray-200 dark:border-gray-800">
                  <RevealAnimation delay={index * 0.1}>
                    <div className="grid gap-x-8 gap-y-6 py-10 md:grid-cols-[9rem_1fr] lg:gap-x-12">
                      {/* Metadata rail */}
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 md:block md:space-y-3">
                          <span className="font-mono text-sm tabular-nums text-gray-300 dark:text-gray-700">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="flex items-center gap-2">
                            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${status.dot}`} />
                            <span
                              className={`text-[11px] font-semibold uppercase tracking-widest ${status.label}`}
                            >
                              {publication.status}
                            </span>
                          </span>
                        </div>

                        <dl className="space-y-2.5 text-xs text-gray-500 dark:text-gray-400">
                          <div className="flex items-start gap-2">
                            <dt className="shrink-0 pt-px">
                              <Calendar className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="sr-only">Date</span>
                            </dt>
                            <dd className="font-mono tabular-nums">{publication.date}</dd>
                          </div>
                          <div className="flex items-start gap-2">
                            <dt className="shrink-0 pt-px">
                              <Award className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="sr-only">Venue</span>
                            </dt>
                            <dd className="font-medium text-gray-600 dark:text-gray-300">{publication.venueShort}</dd>
                          </div>
                          <div className="flex items-start gap-2">
                            <dt className="shrink-0 pt-px">
                              <Tag className="h-3.5 w-3.5 text-gray-400 dark:text-gray-500" aria-hidden="true" />
                              <span className="sr-only">Subjects</span>
                            </dt>
                            <dd className="flex flex-wrap gap-x-2 gap-y-1 font-mono">
                              {publication.categories.map((category) => (
                                <span key={category}>{category}</span>
                              ))}
                            </dd>
                          </div>
                        </dl>
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <h3 className="text-2xl sm:text-3xl font-semibold leading-[1.2] tracking-tight text-gray-900 dark:text-white">
                          <a
                            href={publication.abstractUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            {publication.title}
                            <ArrowUpRight
                              className="ml-2 inline h-5 w-5 align-baseline text-gray-300 dark:text-gray-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                              aria-hidden="true"
                            />
                          </a>
                        </h3>

                        <p className="mt-4 flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                          <Users
                            className="mt-0.5 h-4 w-4 shrink-0 text-gray-400 dark:text-gray-500"
                            aria-hidden="true"
                          />
                          <span>
                            {publication.authors.map((author, authorIndex) => (
                              <span key={author}>
                                <span
                                  className={
                                    author === personalInfo.name
                                      ? "font-semibold text-gray-900 dark:text-white"
                                      : undefined
                                  }
                                >
                                  {author}
                                </span>
                                {authorIndex < publication.authors.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </span>
                        </p>

                        <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
                          {publication.summary}
                        </p>

                        {publication.venue !== publication.venueShort && (
                          <p className="mt-4 max-w-3xl text-sm text-gray-500 dark:text-gray-400">
                            {publication.venue}
                          </p>
                        )}

                        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                          <a
                            href={publication.abstractUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-mono text-xs text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                          >
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                            arXiv:{publication.arxivId}
                          </a>
                          <a
                            href={publication.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                          >
                            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                            PDF
                          </a>
                          <button
                            type="button"
                            onClick={() => copyBibtex(publication.arxivId, publication.bibtex)}
                            aria-live="polite"
                            className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                          >
                            {isCopied ? (
                              <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
                            ) : (
                              <Quote className="h-3.5 w-3.5" aria-hidden="true" />
                            )}
                            {isCopied ? "Copied" : "Copy BibTeX"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </RevealAnimation>
                </li>
              )
            })}
          </ol>

          <RevealAnimation delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs text-gray-400 dark:text-gray-500">
                {publications.length} {publications.length === 1 ? "publication" : "publications"}
              </p>
              <a
                href="https://arxiv.org/search/?searchtype=author&query=Tahsin+Islam"
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 transition-colors hover:text-blue-600 dark:hover:text-blue-400"
              >
                View full listing on arXiv
                <ArrowUpRight
                  className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  )
}
