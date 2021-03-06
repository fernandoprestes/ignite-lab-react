import { useGetLessonsQuery } from '../graphql/generated';
import { Lesson } from './Lesson';

export const Sidebar = function SidebarComponent() {
  const { data } = useGetLessonsQuery();
  return (
    <aside className='w-[348px] border-l border-gray-600 bg-gray-700 p-6'>
      <h2 className='mb-6 border-b border-gray-500 pb-6 text-2xl font-bold'>
        Cronograma de aulas
      </h2>
      <div className='flex flex-col gap-8'>
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
};
