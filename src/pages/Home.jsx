import image1 from '../assets/hero1-deae5a1f.webp'
import image2 from '../assets/hero2-2271e3ad.webp'
import image3 from '../assets/hero3-a83f0357.webp'
import image4 from '../assets/hero4-4b9de90e.webp'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContxt } from '../App'
function Home() {
    const theme = useContext(ThemeContxt);
  
    return (
      <div className='w-3/5 mx-auto mt-20'>
      <main className='main flex items-center justify-between'>
        <div className='info w-[496px]'>
          <h1 className='max-w-2xl text-4xl font-bold tracking-tight  sm:text-6xl text-[hsl(214, 30%, 32%)] mb-8'>
            We are changing the way people shop
          </h1>
          <p className='text-lg leading-8 mb-8'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <Link
            to='/products'
            className={`btn btn-${
              theme.theme == 'light' ? 'primary' : 'secondary'
            } uppercase`}
          >
            our products
          </Link>
        </div>

        <div className='slider w-[464px]'>
          <div className='carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box'>
            <div className='carousel-item'>
              <img
                src={image1}
                className='rounded-box object-cover'
                width={320}
                height={416}

              />
            </div>
            <div className='carousel-item'>
              <img
                src={image2}
                className='rounded-box object-cover'
                width={320}
                height={416}
              />
            </div>
            <div className='carousel-item'>
              <img
                src={image3}
                className='rounded-box object-cover'
                width={320}
                height={416}
              />
            </div>
            <div className='carousel-item'>
              <img
                src={image4}
                className='rounded-box object-cover'
                width={320}
                height={416}
              />
            </div>
          </div>
        </div>
      </main>

      </div>
    );
  }
  
  export default Home;