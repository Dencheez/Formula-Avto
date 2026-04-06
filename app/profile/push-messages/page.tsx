"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function PushMessagesPage() {
    return (
        <div className="min-h-screen bg-background max-w-lg mx-auto flex flex-col pb-20">
            {/* Header */}
            <header className="px-4 py-4 flex items-center">
                <Link href="/profile">
                    <button className="text-foreground">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                </Link>
                <h1 className="text-[18px] font-bold text-center flex-1 mr-10">Push-уведомления</h1>
            </header>

            {/*content*/}
            <div className="flex-1 flex flex-col items-center justify-center px-6 pt-10 pb-6 text-center">
                <p className="text-[#808080] text-[15px] mb-8 leading-snug max-w-[280px]">
                    Здесь будут отображаться ваши push-уведомления.
                </p>
            </div>
        </div>
    )
}