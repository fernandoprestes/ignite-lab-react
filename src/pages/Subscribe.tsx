import { Logo } from '../components/Logo';

export function Subscribe() {
  return (
    <div className='flex min-h-screen flex-col items-center bg-blur bg-cover bg-no-repeat'>
      <div className='mx-auto mt-20 flex w-full max-w-[1100px] items-center justify-between'>
        <div className='max-w-[640px]'>
          <Logo />
          <h1 className='mt-8 text-[2.5rem] leading-tight'>
            Construa uma{' '}
            <strong className='text-blue-500'>aplicação completa</strong>, do
            zero, com <strong className='text-blue-500'>React</strong>
          </h1>
          <p className='mt-4 leading-relaxed text-gray-200'>
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className='rounded border border-gray-500 bg-gray-700 p-8'>
          <strong className='mb-4 block text-center text-lg font-bold'>
            Inscreva-se gratuitamente
          </strong>
          <form className='flex w-full flex-col gap-2'>
            <input
              type='text'
              placeholder='Seu nome completo'
              className='h-14 rounded bg-gray-900 px-5'
            />
            <input
              type='email'
              placeholder='Digite seu e-mail'
              className='h-14 rounded bg-gray-900 px-5'
            />
            <button
              type='submit'
              className='mt-4 rounded bg-green-500 py-4 text-sm font-bold uppercase transition-colors duration-300 ease-in-out hover:bg-green-700'
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img
        src='/src/assets/img/code-mockup.png'
        alt=''
        className='mt-10'
      />
    </div>
  );
}
