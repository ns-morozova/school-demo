import { courses } from './courses'
import icon0 from '@/assets/icons/category-programming.svg'
import icon1 from '@/assets/icons/category-design.svg'
import icon2 from '@/assets/icons/category-analytics.svg'
import icon3 from '@/assets/icons/category-testing.svg'
import icon4 from '@/assets/icons/category-marketing.svg'
import icon5 from '@/assets/icons/category-management.svg'
import icon6 from '@/assets/icons/category-artificial-intelligence.svg'

const categoryDetails: Record<string, { id: string; icon: string }> = {
  Программирование: { id: 'programming', icon: icon0 },
  Дизайн: { id: 'design', icon: icon1 },
  Аналитика: { id: 'analytics', icon: icon2 },
  Тестирование: { id: 'testing', icon: icon3 },
  Маркетинг: { id: 'marketing', icon: icon4 },
  Менеджмент: { id: 'management', icon: icon5 },
  'Искусственный интеллект': { id: 'artificial-intelligence', icon: icon6 },
}

export const categories = [...new Set(courses.map((course) => course.category))].map((name) => ({
  name,
  ...categoryDetails[name]!,
}))
