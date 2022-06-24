import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react';
import '@vime/core/themes/default.css';
import { DefaultUi, Player, Youtube } from '@vime/react';
import { gql, useQuery } from '@apollo/client';

const GET_LESSON_BY_SLUG_QUERY = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: { slug: $slug }) {
      title
      videoId
      description
      teacher {
        bio
        avatarURL
        name
      }
    }
  }
`;

interface GetLessonBySlugResponse {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      bio: string;
      avatarURL: string;
      name: string;
    };
  };
}

interface VideoProps {
  lessonSlug: string;
}

export const Video = function VideoComponent({ lessonSlug }: VideoProps) {
  const { data } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG_QUERY, {
    variables: {
      slug: lessonSlug,
    },
  });

  if (!data) {
    return (
      <div className='flex-1'>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className='flex-1'>
      <div className='flex justify-center bg-black'>
        <div className='aspect-video h-full max-h-[60vh] w-full max-w-[1100px]'>
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className='mx-auto max-w-[1100px] p-8'>
        <div className='flex items-start gap-16'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>{data.lesson.title}</h1>
            <p className='mt-4 leading-relaxed text-gray-200'>
              {data.lesson.description}
            </p>
            <div className='mt-6 flex items-center gap-4'>
              <img
                className='h-16 w-16 rounded-full border-2 border-blue-500'
                src={data.lesson.teacher.avatarURL}
                alt='avatar'
              />
              <div className='leading-relaxed'>
                <strong className='block text-2xl font-bold'>
                  {data.lesson.teacher.name}
                </strong>
                <span className='block text-sm text-gray-200'>
                  {data.lesson.teacher.bio}
                </span>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4'>
            <a
              href='#'
              className='flex items-center justify-center gap-2 rounded bg-green-500 p-4 text-sm font-bold uppercase transition-colors duration-300 ease-in-out hover:bg-green-700'
            >
              <DiscordLogo size={24} />
              Comunidade do discord
            </a>
            <a
              href='#'
              className='flex items-center justify-center gap-2 rounded border border-blue-500 p-4 text-sm font-bold uppercase text-blue-500 transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:text-gray-900'
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className='mt-20 grid grid-cols-2 gap-8'>
          <a
            href=''
            className='flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-600'
          >
            <div className='flex h-full items-center bg-green-700 p-6'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material complementar</strong>
              <p className='mt-2 text-sm text-gray-200'>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className='flex h-full items-center p-6'>
              <CaretRight size={24} />
            </div>
          </a>
          <a
            href=''
            className='flex items-stretch gap-6 overflow-hidden rounded bg-gray-700 transition-colors duration-300 ease-in-out hover:bg-gray-600'
          >
            <div className='flex h-full items-center bg-green-700 p-6'>
              <Image size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Wallpaper exclusivos</strong>
              <p className='mt-2 text-sm text-gray-200'>
                Baixe wallpaper exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className='flex h-full items-center p-6'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
