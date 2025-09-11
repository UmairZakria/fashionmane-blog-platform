import Blogpage from "../../components/Blogpage";
// ✅ Fetch metadata only
export async function generateMetadata({ params }) {
  let { title } = await params;
  title = decodeURIComponent(title);
  const res = await fetch(`https://fashionmane.com/api/findpost`, {
    method: "POST",
    body: JSON.stringify({ title: title }),
    headers: { "Content-Type": "application/json" },
    cache: "no-store", // always fresh
  });

  const data = await res.json();
  console.log(data);

  return {
    title: data?.post?.title || "Blog",
    description: data?.post?.description || "Read the latest blog",
  };
}

// ✅ Actual rendering uses client + context
export default async function Page({ params }) {
  let { title } = await params;
  title = decodeURIComponent(title);
  return <Blogpage title={title} />;
}
