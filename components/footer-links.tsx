import Link from "next/link"
import { Facebook, MessageCircle, Send, ScrollText } from "lucide-react"

export function FooterLinks() {
  return (
    <div className="px-4 py-8 bg-gray-50/50 mt-8 text-sm">
      <div className="flex flex-wrap gap-x-4 gap-y-3 mb-6 font-medium">
        <Link href="#" className="hover:underline">Помощь</Link>
        <Link href="#" className="hover:underline">Безопасность</Link>
        <Link href="#" className="hover:underline">Реклама на сайте</Link>
        <Link href="#" className="hover:underline">О компании</Link>
        <Link href="#" className="hover:underline">Карьера</Link>
        <Link href="#" className="hover:underline">Авито Журнал</Link>
        <Link href="#" className="hover:underline">Блог</Link>
        <Link href="#" className="hover:underline">#яПомогаю</Link>
        <Link href="#" className="hover:underline">Приложение</Link>
        <Link href="#" className="hover:underline">Займы онлайн</Link>
        <Link href="#" className="hover:underline">Карта сайта</Link>
        <Link href="#" className="hover:underline">Свежие объявления</Link>
        <Link href="#" className="hover:underline">Полная версия</Link>
      </div>
      
      <p className="text-muted-foreground text-xs leading-relaxed mb-6">
        Авито — <Link href="#" className="underline">сайт объявлений России</Link>. © ООО «КЕХ еКоммерц» 2007–2026. <Link href="#" className="underline">Правила Авито</Link>. <Link href="#" className="underline">Политика конфиденциальности</Link>. Оплачивая услуги на Авито, вы принимаете <Link href="#" className="underline">оферту</Link>. Авито использует <Link href="#" className="underline">рекомендательные технологии</Link>.
      </p>

      <div className="flex items-center gap-3">
        <Link href="#" className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-xs">VK</span>
        </Link>
        <Link href="#" className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-xs">OK</span>
        </Link>
        <Link href="#" className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <Send className="w-4 h-4" />
        </Link>
        <Link href="#" className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-xs">R</span>
        </Link>
        <Link href="#" className="bg-black text-white p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
