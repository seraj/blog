import headerNavLinks from '@/data/headerNavLinks'
import { cn } from '@/lib/utils/cn'
import NextImage from 'next/image'
import Footer from './Footer'
import Link from './Link'
import MobileNav from './MobileNav'
import SectionContainer from './SectionContainer'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between min-h-screen">
        <header className="flex items-center justify-between py-5 md:py-10 sticky top-0 z-40 bg-white dark:bg-gray-800">
          <div>
            <Link href="/" aria-label="Seraj's Blog">
              <div className="flex items-center justify-between">
                <div className="mr-3 flex justify-center items-center">
                  <NextImage
                    src="/static/images/logo.jpg"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </div>
                {/* {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )} */}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cn(
                    'p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100',
                    link.className
                  )}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
