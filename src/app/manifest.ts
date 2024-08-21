import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Francesco Petranzan Portfolio',
    short_name: 'fpetranzan Portfolio',
    description: 'Francesco Petranzan Portfolio | All about me, my experience and my project',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#121212',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}