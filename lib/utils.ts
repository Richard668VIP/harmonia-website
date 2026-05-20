import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const PILLARS = [
  { id: 1, icon: "◯", en: "Awareness & Stillness",    cn: "觉知与静心", color: "#7B9EC4", slug: "awareness-stillness"     },
  { id: 2, icon: "✦", en: "Energy & Vitality",        cn: "能量与活力", color: "#C9A84C", slug: "energy-vitality"         },
  { id: 3, icon: "⬡", en: "Mind & Emotion",           cn: "心智与情绪", color: "#9B6BAF", slug: "mind-emotion"            },
  { id: 4, icon: "❋", en: "Relationships & Connection",cn: "关系与连接", color: "#C97A7A", slug: "relationships-connection" },
  { id: 5, icon: "◈", en: "Meaning & Purpose",        cn: "意义与使命", color: "#4A8C6B", slug: "meaning-purpose"          },
] as const;
