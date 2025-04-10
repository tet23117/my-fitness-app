
import { useState } from 'react';
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Checkbox } from "./components/ui/checkbox";

const workouts = [
  {
    day: "روز اول: سینه + جناق سینه",
    exercises: [
      "پرس سینه با هالتر",
      "پرس بالا سینه دمبل",
      "قفسه بالا سینه دمبل",
      "پرس سینه دستگاه (دست جمع)",
      "پارالل با وزن بدن",
      "کراس‌اور از پایین به بالا",
      "پرس زیرسینه با هالتر"
    ]
  },
  {
    day: "روز دوم: پشت + پشت بازو",
    exercises: [
      "زیربغل هالتر خم",
      "سیم‌کش از جلو",
      "زیربغل تک‌دست دمبل",
      "پل‌سازی (هیپ تراست)",
      "پشت بازو دیپ",
      "پشت بازو طناب"
    ]
  },
  {
    day: "روز سوم: پا + اصلاح کمر + ساق",
    exercises: [
      "پرس پا",
      "لانج دمبل",
      "پشت پا خوابیده",
      "کشش گربه-شتر",
      "حرکت سوپرمن",
      "ساق پا ایستاده"
    ]
  },
  {
    day: "روز چهارم: سینه + جلو بازو (جناق)",
    exercises: [
      "پرس سینه با دمبل",
      "کراس‌اور با کابل دست پایین",
      "قفسه با کابل از بالا",
      "جلو بازو هالتر لاری",
      "جلو بازو دمبل تناوبی",
      "جلو بازو سیم‌کش دوطرفه"
    ]
  },
  {
    day: "روز پنجم: سرشانه + کول",
    exercises: [
      "پرس سرشانه دمبل نشسته",
      "نشر جانب دمبل",
      "نشر خم",
      "شراگ هالتر",
      "کول هالتر دست باز"
    ]
  },
  {
    day: "روز ششم: بازو + جناق سینه",
    exercises: [
      "جلو بازو دمبل شیب‌دار",
      "جلو بازو هالتر ایستاده",
      "پشت بازو هالتر خوابیده",
      "پشت بازو تک‌دست سیم‌کش",
      "کراس‌اور جناق",
      "پلانک و کشش سینه"
    ]
  }
];

export default function WorkoutTracker() {
  const [checked, setChecked] = useState({});

  const toggleCheck = (dayIndex, exIndex) => {
    const key = `${dayIndex}-${exIndex}`;
    setChecked(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      {workouts.map((day, i) => (
        <Card key={i} className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-xl font-bold mb-2">{day.day}</h2>
            {day.exercises.map((ex, j) => (
              <div key={j} className="flex items-center space-x-2 mb-2">
                <Checkbox
                  checked={checked[`${i}-${j}`] || false}
                  onCheckedChange={() => toggleCheck(i, j)}
                />
                <span>{ex}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
