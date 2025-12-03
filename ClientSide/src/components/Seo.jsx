import { Helmet } from "react-helmet";

function Seo() {
  return (
    <Helmet>
      <title>ZekiCoder LMS – Learn. Build. Conquer.</title>
      <meta
        name="description"
        content="ZekiCoder LMS is an open-source platform for beginners to learn coding with roadmaps, courses, assignments, AI tools, and a community."
      />
      <meta
        name="keywords"
        content="ZekiCoder, LMS, coding, open-source, courses, challenges, notes, frontend, web development, react"
      />
      <meta
        property="og:title"
        content="ZekiCoder LMS – Learn. Build. Conquer."
      />
      <meta
        property="og:description"
        content="A developer-first LMS with roadmaps, AI tools, assignments and open learning modules."
      />
      <meta
        property="og:image"
        content="https://zekicoders-lms.vercel.app/og-image.jpg"
      />
      <meta property="og:url" content="https://zekicoders-lms.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

export default Seo;
