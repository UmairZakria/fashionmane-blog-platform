// scripts/addSlugs.js
import mongoose from "mongoose";
import Post from "../app/models/Post.js"; // adjust path if needed

function slugify(text) {
  return text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function run() {
  await mongoose.connect("mongodb+srv://zainmukhtar2222:XBv3PVj6xo2euD5w@zain.91dmj.mongodb.net/?retryWrites=true&w=majority&appName=Zain");

  const posts = await Post.find({});
  for (let post of posts) {
    if (!post.slug) {
      post.slug = slugify(post.title);
      await post.save();
      console.log(`✅ Added slug for: ${post.title} → ${post.slug}`);
    }
  }

  await mongoose.disconnect();
  console.log("🎉 Migration complete!");
}

run().catch(console.error);
