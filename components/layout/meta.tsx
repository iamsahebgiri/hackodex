import Head from "next/head";

const DOMAIN = "https://hackodex.codex-iter.in";

export default function Meta({
  title = "Hackodex - A Month-Long Open-Source Coding Event for College Students",
  description = "Hackodex is a month-long event designed to promote open-source contributions among college students. The event provides a platform for students to showcase their coding skills and contribute to real-world open-source projects.",
  image = `${DOMAIN}/api/og`,
}: {
  title?: string;
  description?: string;
  image?: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta itemProp="image" content={image} />
      <meta property="og:logo" content={`${DOMAIN}/logo.png`}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@codex-iter" />
      <meta name="twitter:creator" content="@iamsahebgiri" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
}
