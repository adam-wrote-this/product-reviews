'use client'
import clsx from 'clsx'
import Modal from './components/ui/Modal'
import ProductReviewsContextProvider from './components/Reviews/ProductReviewsContextProvider'
import Reviews from './components/Reviews'

export default function Home() {
  return (
    <main className='mx-auto min-h-screen max-w-[1440px] p-4'>
      <div
        className={clsx(
          'min-h-[calc(100vh_-_32px)] rounded-md bg-white',
          'shadow-sm md:shadow-md lg:shadow-lg'
        )}
      >
        <Modal isOpen={true} onClose={() => {}}>
          <ProductReviewsContextProvider>
            <Reviews />
          </ProductReviewsContextProvider>
        </Modal>
      </div>
    </main>
  )
}
