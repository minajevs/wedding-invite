import Head from "next/head"

export default ({
  title,
  description,
  url,
  logo,
  author,
  siteName,
  publishedTime,
  modifiedTime,
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={logo} />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      <meta property="article:modified_time" content={modifiedTime} />
      <meta property="article:author" content={author} />

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  )
}
