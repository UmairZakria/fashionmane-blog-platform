import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  discription: { type: String },
  image: { type: String },
  category: { type: String },
  content: { type: String },
  date: { type: Date, default: Date.now },
  slug: { type: String, unique: true }, 
});

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


PostSchema.pre('save', function (next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = slugify(this.title);
  }
  next();
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
