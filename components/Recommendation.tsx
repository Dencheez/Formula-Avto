"use client"

import { useState } from "react"
import { Phone, MessageSquare, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const recommendationCars = [
  {
    id: "r1",
    title: "ГАЗ ГАЗель 3302 2.9 МТ",
    price: 840000,
    year: 2008,
    mileage: 76000,
    engine: "Бензин 2.9 (107 л.с.), механика, задний, фургон",
    location: "Чеченская Республика, Грозный",
    timeAgo: "1 час назад",
    badges: [],
  },
  {
    id: "r2",
    title: "Hyundai Tucson 2.0 AT",
    price: 2450000,
    year: 2022,
    mileage: 32000,
    engine: "Бензин 2.0 (150 л.с.), автомат, полный, кроссовер",
    location: "Москва",
    timeAgo: "2 часа назад",
    badges: ["Надёжный партнёр"],
  },
  {
    id: "r3",
    title: "Грязевые колёса на УАЗ р16",
    price: 45000,
    year: 0,
    mileage: 0,
    engine: "",
    location: "Кемеровская обл., Кемерово",
    timeAgo: "1 час назад",
    badges: [],
    note: "за 4 шт.",
  },
  {
    id: "r4",
    title: "Toyota Camry 2.5 AT",
    price: 2900000,
    year: 2021,
    mileage: 45000,
    engine: "Бензин 2.5 (181 л.с.), автомат, передний, седан",
    location: "Санкт-Петербург",
    timeAgo: "3 часа назад",
    badges: ["1 владелец"],
  },
  {
    id: "r5",
    title: "Kia K5 2.0 AT",
    price: 2350000,
    year: 2022,
    mileage: 28000,
    engine: "Бензин 2.0 (150 л.с.), автомат, передний, седан",
    location: "Краснодарский край, Краснодар",
    timeAgo: "4 часа назад",
    badges: ["Проверено"],
  },
  {
    id: "r6",
    title: "Lada Vesta 1.6 MT",
    price: 1250000,
    year: 2023,
    mileage: 12000,
    engine: "Бензин 1.6 (106 л.с.), механика, передний, седан",
    location: "Нижегородская обл., Нижний Новгород",
    timeAgo: "5 часов назад",
    badges: ["Надёжный партнёр"],
  },
  {
    id: "r7",
    title: "BMW X5 3.0 AT",
    price: 4500000,
    year: 2020,
    mileage: 67000,
    engine: "Дизель 3.0 (249 л.с.), автомат, полный, кроссовер",
    location: "Москва",
    timeAgo: "6 часов назад",
    badges: [],
  },
  {
    id: "r8",
    title: "Volkswagen Tiguan 2.0 AT",
    price: 2100000,
    year: 2019,
    mileage: 78000,
    engine: "Бензин 2.0 (180 л.с.), автомат, полный, кроссовер",
    location: "Ростовская обл., Ростов-на-Дону",
    timeAgo: "7 часов назад",
    badges: ["1 владелец"],
  },
  {
    id: "r9",
    title: "Renault Duster 1.5 MT",
    price: 980000,
    year: 2018,
    mileage: 95000,
    engine: "Дизель 1.5 (109 л.с.), механика, полный, кроссовер",
    location: "Свердловская обл., Екатеринбург",
    timeAgo: "8 часов назад",
    badges: [],
  },
  {
    id: "r10",
    title: "Mazda CX-5 2.0 AT",
    price: 2750000,
    year: 2021,
    mileage: 35000,
    engine: "Бензин 2.0 (150 л.с.), автомат, полный, кроссовер",
    location: "Новосибирская обл., Новосибирск",
    timeAgo: "9 часов назад",
    badges: ["Надёжный партнёр"],
  },
  {
    id: "r11",
    title: "Skoda Kodiaq 2.0 AT",
    price: 3200000,
    year: 2022,
    mileage: 25000,
    engine: "Бензин 2.0 (180 л.с.), автомат, полный, кроссовер",
    location: "Казань",
    timeAgo: "10 часов назад",
    badges: ["Проверено"],
  },
  {
    id: "r12",
    title: "Ford Focus 1.6 AT",
    price: 720000,
    year: 2017,
    mileage: 110000,
    engine: "Бензин 1.6 (105 л.с.), автомат, передний, хэтчбек",
    location: "Самарская обл., Самара",
    timeAgo: "11 часов назад",
    badges: [],
  },
  {
    id: "r13",
    title: "Chevrolet Cruze 1.8 AT",
    price: 650000,
    year: 2015,
    mileage: 135000,
    engine: "Бензин 1.8 (141 л.с.), автомат, передний, седан",
    location: "Волгоградская обл., Волгоград",
    timeAgo: "12 часов назад",
    badges: [],
  },
  {
    id: "r14",
    title: "Haval Jolion 1.5 AT",
    price: 1950000,
    year: 2023,
    mileage: 8000,
    engine: "Бензин 1.5 (143 л.с.), автомат, передний, кроссовер",
    location: "Тюменская обл., Тюмень",
    timeAgo: "13 часов назад",
    badges: ["1 владелец"],
  },
  {
    id: "r15",
    title: "Chery Tiggo 7 Pro 1.5 AT",
    price: 2050000,
    year: 2022,
    mileage: 22000,
    engine: "Бензин 1.5 (147 л.с.), автомат, передний, кроссовер",
    location: "Пермский край, Пермь",
    timeAgo: "14 часов назад",
    badges: ["Надёжный партнёр"],
  },
  {
    id: "r16",
    title: "Nissan Qashqai 2.0 AT",
    price: 1800000,
    year: 2020,
    mileage: 55000,
    engine: "Бензин 2.0 (144 л.с.), автомат, передний, кроссовер",
    location: "Красноярский край, Красноярск",
    timeAgo: "15 часов назад",
    badges: [],
  },
  {
    id: "r17",
    title: "Mercedes-Benz E-Класс 2.0 AT",
    price: 3800000,
    year: 2019,
    mileage: 72000,
    engine: "Бензин 2.0 (197 л.с.), автомат, задний, седан",
    location: "Москва",
    timeAgo: "16 часов назад",
    badges: ["Проверено"],
  },
  {
    id: "r18",
    title: "Lada Granta 1.6 MT",
    price: 550000,
    year: 2020,
    mileage: 62000,
    engine: "Бензин 1.6 (87 л.с.), механика, передний, седан",
    location: "Башкортостан, Уфа",
    timeAgo: "17 часов назад",
    badges: [],
  },
  {
    id: "r19",
    title: "Audi A4 2.0 AT",
    price: 2600000,
    year: 2020,
    mileage: 48000,
    engine: "Бензин 2.0 (190 л.с.), автомат, передний, седан",
    location: "Воронежская обл., Воронеж",
    timeAgo: "18 часов назад",
    badges: ["1 владелец"],
  },
  {
    id: "r20",
    title: "Geely Monjaro 2.0 AT",
    price: 3100000,
    year: 2023,
    mileage: 5000,
    engine: "Бензин 2.0 (200 л.с.), автомат, полный, кроссовер",
    location: "Омская обл., Омск",
    timeAgo: "19 часов назад",
    badges: ["Надёжный партнёр"],
  },
  {
    id: "r21",
    title: "Mitsubishi Outlander 2.4 AT",
    price: 2200000,
    year: 2019,
    mileage: 83000,
    engine: "Бензин 2.4 (167 л.с.), автомат, полный, кроссовер",
    location: "Челябинская обл., Челябинск",
    timeAgo: "20 часов назад",
    badges: [],
  },
  {
    id: "r22",
    title: "Subaru Forester 2.0 AT",
    price: 1900000,
    year: 2018,
    mileage: 105000,
    engine: "Бензин 2.0 (150 л.с.), автомат, полный, кроссовер",
    location: "Приморский край, Владивосток",
    timeAgo: "21 час назад",
    badges: ["Проверено"],
  },
  {
    id: "r23",
    title: "Honda CR-V 2.4 AT",
    price: 2650000,
    year: 2020,
    mileage: 40000,
    engine: "Бензин 2.4 (186 л.с.), автомат, полный, кроссовер",
    location: "Иркутская обл., Иркутск",
    timeAgo: "22 часа назад",
    badges: [],
  },
  {
    id: "r24",
    title: "Peugeot 408 1.6 AT",
    price: 890000,
    year: 2017,
    mileage: 88000,
    engine: "Бензин 1.6 (150 л.с.), автомат, передний, седан",
    location: "Саратовская обл., Саратов",
    timeAgo: "22 часа назад",
    badges: [],
  },
  {
    id: "r25",
    title: "Changan CS75 Plus 1.5 AT",
    price: 2300000,
    year: 2023,
    mileage: 10000,
    engine: "Бензин 1.5 (181 л.с.), автомат, передний, кроссовер",
    location: "Татарстан, Казань",
    timeAgo: "23 часа назад",
    badges: ["1 владелец"],
  },
  {
    id: "r26",
    title: "KIA Sportage 2.0 AT",
    price: 2700000,
    year: 2022,
    mileage: 30000,
    engine: "Бензин 2.0 (150 л.с.), автомат, полный, кроссовер",
    location: "Ленинградская обл., Гатчина",
    timeAgo: "1 день назад",
    badges: ["Надёжный партнёр"],
  },
  {
    id: "r27",
    title: "Opel Astra 1.4 AT",
    price: 780000,
    year: 2016,
    mileage: 120000,
    engine: "Бензин 1.4 (140 л.с.), автомат, передний, хэтчбек",
    location: "Калининградская обл., Калининград",
    timeAgo: "1 день назад",
    badges: [],
  },
  {
    id: "r28",
    title: "Exeed TXL 1.6 AT",
    price: 2850000,
    year: 2023,
    mileage: 7000,
    engine: "Бензин 1.6 (186 л.с.), автомат, полный, кроссовер",
    location: "Московская обл., Балашиха",
    timeAgo: "1 день назад",
    badges: ["Проверено"],
  },
  {
    id: "r29",
    title: "Citroen C4 1.6 AT",
    price: 950000,
    year: 2018,
    mileage: 75000,
    engine: "Бензин 1.6 (150 л.с.), автомат, передний, хэтчбек",
    location: "Ставропольский край, Ставрополь",
    timeAgo: "1 день назад",
    badges: [],
  },
  {
    id: "r30",
    title: "Omoda C5 1.6 AT",
    price: 2150000,
    year: 2024,
    mileage: 3000,
    engine: "Бензин 1.6 (147 л.с.), автомат, передний, кроссовер",
    location: "Ростовская обл., Ростов-на-Дону",
    timeAgo: "1 день назад",
    badges: ["1 владелец"],
  },
]

export function Recommendation() {
  const [visibleCount, setVisibleCount] = useState(10)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price)
  }

  const visibleCars = recommendationCars.slice(0, visibleCount)

  return (
    <div className="py-6">
      <h2 className="text-xl font-bold mb-4">Рекомендации</h2>

      <div className="flex flex-col">
        {visibleCars.map((car) => (
          <div key={car.id} className="bg-background border-b border-border">
            {/* Image area with horizontal scroll */}
            <div className="relative">
              <div className="flex gap-1 overflow-x-auto scrollbar-hide">
                <div className="flex-shrink-0 w-[75%] aspect-[4/3] bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Фото</span>
                  </div>
                  {car.badges && car.badges.length > 0 && (
                    <div className="absolute bottom-2 left-2 flex gap-2">
                      {car.badges.map((badge, index) => (
                        <span
                          key={index}
                          className={`px-2 py-1 rounded text-xs font-medium ${badge === "Надёжный партнёр"
                            ? "bg-green-500 text-white"
                            : badge === "Проверено"
                              ? "bg-blue-500 text-white"
                              : "bg-blue-500 text-white"
                            }`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex-shrink-0 w-[30%] aspect-[4/3] bg-secondary relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">Фото</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Info section */}
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-xl font-bold">
                      {formatPrice(car.price)} ₽
                    </span>
                    {car.note && (
                      <span className="text-sm text-muted-foreground">
                        {car.note}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-medium mt-1">
                    {car.title}
                    {car.year > 0 && `, ${car.year}`}
                    {car.mileage > 0 &&
                      `, ${formatPrice(car.mileage)} км`}
                  </h3>

                  {car.engine && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {car.engine}
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mt-2">
                    {car.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {car.timeAgo}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10 rounded-full bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Phone className="h-5 w-5" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-10 w-10 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </Button>
                  <Button size="icon" variant="ghost" className="h-10 w-10">
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < recommendationCars.length && (
        <div className="px-4 py-4">
          <Button
            variant="outline"
            className="w-full rounded-xl"
            onClick={() =>
              setVisibleCount((prev) =>
                Math.min(prev + 10, recommendationCars.length)
              )
            }
          >
            Показать ещё{" "}
            {Math.min(10, recommendationCars.length - visibleCount)} из{" "}
            {recommendationCars.length - visibleCount}
          </Button>
        </div>
      )}
    </div>
  )
}
