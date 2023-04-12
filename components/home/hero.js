import Animation from './animation'
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          와이즈인 기술 블로그
          <br className="hidden lg:inline-block" />
          방문을 환영합니다!
        </h1>
        <p className="mb-8 leading-relaxed">
          그들의 청춘의 눈이 무엇을 생생하며, 때문이다. 풍부하게 어디 같으며, 청춘의 그들의 그와 역사를 있으랴? 뛰노는 꾸며 심장의 인생을 만천하의 칼이다. 쓸쓸한 현저하게 거선의 공자는 영원히
          인도하겠다는 실현에 관현악이며, 할지니, 쓸쓸하랴? 긴지라 찾아 사라지지 속잎나고, 많이 아름다우냐? 모래뿐일 가치를 반짝이는 피어나기 스며들어 말이다. 위하여, 낙원을 우리의 있는 위하여 없으면
          노래하며 밝은 못할 것이다. 무엇이 시들어 이것은 것이다. 날카로우나 목숨을 심장의 뼈 그것은 옷을 이것이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Start!</a>
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
        <Animation />
      </div>
    </>
  )
}
