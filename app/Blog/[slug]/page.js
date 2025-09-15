import Blogpage from "../../components/Blogpage";

export async function generateMetadata({ params }) {
  let { slug } = await params;
 

  const res = await fetch(`https://fashionmane.com/api/findpost`, {
    method: "POST",
    body: JSON.stringify({ slug }),
    headers: { "Content-Type": "application/json" },
    cache: "no-store", 
  });

  const data = await res.json();
  const post = data?.post || {};


  // Fallbacks
  const metaTitle = post.title ? `${post.title} | Fashion Mane` : "Blog | Fashion Mane";
  const metaDesc = post.description || "Read the latest trends, outfits, and fashion tips on Fashion Mane.";
  const canonicalUrl = `https://fashionmane.com/Blog/${slug}`;
  const ogImage = post.image || "https://fashionmane.com/logo.png"; // add default

  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: canonicalUrl,
      type: "article",
      siteName: "Fashion Mane",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.title || "Fashion Mane Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      images: [ogImage],
    },
  };
}

export default async function Page({ params }) {
  let { slug } = await params;


  return <Blogpage slug={slug} />;
}
