import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export const Lesson = function LessonComponent({
  title,
  slug,
  availableAt,
  type,
}: LessonProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    },
  );

  return (
    <Link
      to={`/event/lesson/${slug}`}
      className='group'
    >
      <span className='text-gray-300'>{availableDateFormatted}</span>
      <div className='mt-2 rounded border border-gray-500 p-4 group-hover:border-green-500'>
        <header className='flex items-center justify-between'>
          {isLessonAvailable ? (
            <span className='flex items-center gap-2 text-sm font-medium text-blue-500'>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className='flex items-center gap-2 text-sm font-medium text-orange-500'>
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className='rounded border border-green-300 px-2 py-[0.125rem] text-xs font-bold'>
            {type === 'live' ? 'Ao Vivo' : 'Aula prática'}
          </span>
        </header>
        <strong className='mt-5 block text-gray-200'>{title}</strong>
      </div>
    </Link>
  );
};
