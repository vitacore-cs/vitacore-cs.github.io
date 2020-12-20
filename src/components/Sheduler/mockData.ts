import { OneUslType, UslCategoryType } from './types'


type ltype = { ctype: UslCategoryType; variants: string[] }[];

export const uslAll: ltype = [
  {
    ctype: "Hазначения",
    variants: [
      "Аккузид",
      //"Алендроновая кислота",
      "Аспирин-С",
      "Диронет антигельминтик",
      //"Чистотел Глистогон",
      //"Бактериофаг протейный",
      //"Банеоцин",
      //"Берлитион 600",
      "Бисопролол",
    ],
  },
  {
    ctype: "Консультации",
    variants: [
      "Хирург",
      "Офтальмолог",
      //"Невропатолог",
      "Отоларинголог",
      //"Терапевт",
    ],
  },
  {
    ctype: "Исследования",
    variants: ["Общий анализ крови", "Анализ мочи", "Биопсия спинного мозга"],
  },
];

const getRandomA = (array: Array<any>) => {
  return array[Math.floor(Math.random() * array.length)];
};

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

export const getRandomUsl = (): OneUslType => {
  const dateStart = new Date();
  dateStart.setDate(dateStart.getDate() - 3);
  const dateEnd = new Date();
  dateEnd.setDate(dateEnd.getDate() + 3);

  const dt = randomDate(dateStart, dateEnd);

  const randomCategory = getRandomA(uslAll);
  const randomUsl = getRandomA(randomCategory.variants);
  return {
    dt,
    tday: dt.toISOString().substring(0, 10),
    ttime: dt.toISOString().substring(11, 16),
    name: randomUsl,
    ctype: randomCategory.ctype,
    isAborted: Math.random() > 0.9,
    isNotPlanned: Math.random() > 0.9
  };
};

export const genUsl = (num?: number): OneUslType[] => {
  const n = num ? num : 100;
  let res: OneUslType[] = [];
  for (let i = 0; i < n; i++) {
    res.push(getRandomUsl());
  }
  return res;
};
