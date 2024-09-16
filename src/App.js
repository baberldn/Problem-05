import { InformationCircleIcon as Icon } from '@heroicons/react/20/solid'


export default function Banner() {
  const bannerData = {
    icon: <Icon className='h-5 w-5 text-blue-400' aria-hidden='true' />,
    version: 4,
    href: '/details',
  }

  return (
    <div className='bg-blue-50 border border-blue-200 p-4 rounded-lg shadow-lg'>
      <div className='flex items-center'>
        <div className='flex-shrink-0'>{bannerData.icon}</div>
        <div className='ml-4'>
          <p className='text-sm text-blue-800'>
            Yeni bir yazılım güncellemesi mevcuttur. Sürümdeki yenilikleri inceleyin.
          </p>
          <p className='text-sm'>
            <a href={bannerData.href} className='text-blue-600 hover:underline'>
              Detaylar
              <span aria-hidden='true'> &rarr;</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
