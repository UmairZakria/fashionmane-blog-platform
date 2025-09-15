import Post from "@/app/models/Post";
import connectMongo from "@/lib/connectMongo";

export async function GET(request) {
  try {
    await connectMongo();

    const url = new URL(request.url);
    const slug = url.searchParams.get("slug"); 
    console.log("Searching for slug:", slug);

    if (slug) {
      const blog = await Post.findOne({ slug }); 
      if (!blog) {
        return new Response(JSON.stringify({ message: "blog not found" }), {
          status: 404,
        });
      }
      return new Response(JSON.stringify({ blog }), { status: 200 });
    }

    return new Response(JSON.stringify({ message: "slug is required" }), {
      status: 400,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "error", error: error.message }),
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const { slug } = await request.json(); // ✅ accept slug
    console.log("POST search by slug:", slug);

    await connectMongo();

    const post = await Post.findOne({ slug }); // ✅ exact slug match

    if (!post) {
      throw new Error("No Post found with this slug");
    }

    return new Response(JSON.stringify({ message: "success", post }), {
      status: 201,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "error", err: error.message }),
      { status: 500 }
    );
  }
}
