import { useEffect } from 'react'
import { LeftChevron, RightChevron } from '../assets'

const Pagination = ({ images, current, setCurrent, isPaused }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setNext()
    }, 3000)

    if (isPaused) clearInterval(timer)

    return () => clearInterval(timer)

    // eslint-disable-next-line
  }, [current, isPaused])

  const setBtnClassName = (index) => {
    const className =
      'w-8 h-8 bg-slate-500 text-white rounded-full text-sm hover:bg-slate-600'

    return index === current ? `${className} bg-slate-300` : className
  }

  const setPrev = () => {
    const newIndex = current === 0 ? images.length - 1 : current - 1
    setCurrent(newIndex)
  }

  const setNext = () => {
    const newIndex = current === images.length - 1 ? 0 : current + 1
    setCurrent(newIndex)
  }

  return (
    <div className="relative">
      <button
        className="absolute w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 shadow hover:bg-gray-200 top-0 left-0"
        onClick={() => setPrev()}
      >
        <img src={LeftChevron} alt="Left" />
      </button>
      <button
        className="absolute w-10 h-10 flex justify-center items-center rounded-full bg-gray-100 shadow hover:bg-gray-200 top-0 right-0"
        onClick={() => setNext()}
      >
        <img src={RightChevron} alt="Right" />
      </button>
      <div className="mx-12 flex justify-between items-center h-10">
        {images.map((img, index) => (
          <button
            key={img}
            className={setBtnClassName(index)}
            onClick={() => setCurrent(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination
