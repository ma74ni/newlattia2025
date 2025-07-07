import Image from 'next/image'
import React from 'react'

interface ArticleBlogProps{
    titleSection: string,
    article: {
        title: string,
        summary: string,
        image: string,
        link: string
    }
}
const ArticleBlog = ({titleSection, article}: ArticleBlogProps) => {
  return (
    <>
    <h2 className="text-center md:text-left mb-6">{titleSection}</h2>
        <div className="flex flex-col md:flex-row gap-6 items-center bg-white rounded-lg shadow p-4">
          <Image
            src={article.image}
            alt={article.title}
            width={300}
            height={200}
            className="rounded-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-lila mb-2">{article.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{article.summary}</p>
            <a href={article.link} className="text-lila underline hover:text-naranja">Leer artículo completo</a>
          </div>
        </div>
    </>
  )
}

export default ArticleBlog