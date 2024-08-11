import Emoji from '@/components/Emoji'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Seraj Vahdati <Emoji emoji="👋" />
          </h1>
          <div className="text-lg leading-7 text-gray-600 dark:text-gray-400">
            <span className="font-medium">Senior Front End Engineer</span>.{' '}
            <div className="text-base font-medium leading-6">
              <Link
                href="https://cv.seraj.me/pdf/light/SerajVahdati-Resume.pdf"
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Download Seraj Vahdati Resume"
              >
                Download Resume &rarr;
              </Link>
            </div>
            <p className="my-4">
              I'm a passionate Senior Front End Engineer with extensive experience in building
              high-performance web applications. I specialize in React, Next.js, and TypeScript, and
              I love working with the latest web technologies. My journey includes enhancing user
              experiences and optimizing applications for companies like Setflow, Goki, and Omid
              Analyzer. With a strong foundation in JavaScript, HTML, and CSS, I've led teams,
              conducted numerous code reviews, and implemented innovative solutions that drive
              performance and usability. Always eager to learn and grow, I'm excited to continue
              pushing the boundaries of web development. <Emoji emoji="💻" />
            </p>
            <p className="my-4">
              <b>Proficient Languages & Frameworks:</b> React Nextjs Typescript Javascript Shadcn
              Tailwind Zustand Webpack GraphQL Redux.
              <br /> <b>Knowledgeable Languages & Frameworks:</b> Python PHP SQL Django NodeJs
              ExpressJs
            </p>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-3xl font-bold mb-1 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
