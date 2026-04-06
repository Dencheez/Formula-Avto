"use client"

import { journalArticles } from "@/lib/data"

export function JournalSection() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Журнал</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {journalArticles.map((article) => (
          <button
            key={article.id}
            className="flex-shrink-0 w-40 rounded-xl overflow-hidden bg-secondary text-left"
          >
            <div className="aspect-[4/3] relative bg-muted flex items-center justify-center">
              {article.image ? (
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-muted-foreground/10" />
              )}
            </div>
            <div className="p-3">
              <p className="text-sm text-center line-clamp-2">{article.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
