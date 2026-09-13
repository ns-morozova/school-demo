import courseImage0 from '@/assets/images/courses/web-development.jpg'
import courseImage1 from '@/assets/images/courses/interface-design.jpg'
import courseImage2 from '@/assets/images/courses/python.jpg'
import courseImage3 from '@/assets/images/courses/data-analytics.jpg'
import courseImage4 from '@/assets/images/courses/software-testing.jpg'
import courseImage5 from '@/assets/images/courses/mobile-development.jpg'
import courseImage6 from '@/assets/images/courses/graphic-design.jpg'
import courseImage7 from '@/assets/images/courses/marketing.jpg'
import courseImage8 from '@/assets/images/courses/project-management.jpg'
import courseImage9 from '@/assets/images/courses/neural-networks.jpg'

export const courses = [
  {
    title: 'Веб-разработка',
    image: courseImage0,
    description:
      'От первой HTML-страницы до адаптивного сайта. Разбираемся в HTML, CSS и основах JavaScript на практике.',
    category: 'Программирование',
    popular: true,
  },
  {
    title: 'Дизайн интерфейсов',
    image: courseImage1,
    description:
      'Учимся работать с композицией, цветом и типографикой. Создаём первые экраны и прототипы в Figma.',
    category: 'Дизайн',
    popular: true,
  },
  {
    title: 'Python для начинающих',
    image: courseImage2,
    description:
      'Изучаем основы Python, работаем с данными и пишем первые программы для повседневных задач.',
    category: 'Программирование',
    popular: false,
  },
  {
    title: 'Аналитика данных',
    image: courseImage3,
    description:
      'Учимся обрабатывать таблицы, строить графики и находить закономерности с помощью SQL и Python.',
    category: 'Аналитика',
    popular: false,
  },
  {
    title: 'Тестирование ПО',
    image: courseImage4,
    description:
      'Осваиваем ручное тестирование: составляем тест-кейсы, находим ошибки и оформляем баг-репорты.',
    category: 'Тестирование',
    popular: false,
  },
  {
    title: 'Мобильная разработка',
    image: courseImage5,
    description:
      'Знакомимся с созданием мобильных приложений: от первого экрана до работы с данными и навигацией.',
    category: 'Программирование',
    popular: false,
  },
  {
    title: 'Графический дизайн',
    image: courseImage6,
    description:
      'Работаем со шрифтами, цветом и композицией. Создаём плакаты, логотипы и визуальный стиль.',
    category: 'Дизайн',
    popular: false,
  },
  {
    title: 'Интернет-маркетинг',
    image: courseImage7,
    description:
      'Разбираемся в продвижении продуктов: изучаем аудиторию, планируем кампании и оцениваем результаты.',
    category: 'Маркетинг',
    popular: true,
  },
  {
    title: 'Управление проектами',
    image: courseImage8,
    description: 'Учимся планировать задачи, распределять ресурсы и организовывать работу команды.',
    category: 'Менеджмент',
    popular: false,
  },
  {
    title: 'Нейросети в работе',
    image: courseImage9,
    description:
      'Практикуемся в создании запросов к нейросетям для текстов, идей и автоматизации повседневных задач.',
    category: 'Искусственный интеллект',
    popular: false,
  },
]
