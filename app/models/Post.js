import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    // unique: true,
  },
  discription: {
    type: String,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,  // This will store the creation time automatically
  },
  
});

const Post = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default Post;
