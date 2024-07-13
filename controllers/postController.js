const Post = require('../models/post');

exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user');
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getPostById = async (req, res) => {
    const postId = req.params.postId;
    try {
        const post = await Post.findById(postId).populate('user');
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(post);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createPost = async (req, res) => {
    const { title, content, userId } = req.body;
    try {
        const newPost = new Post({ title, content, user: userId });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updatePost = async (req, res) => {
    const postId = req.params.postId;
    const { title, content } = req.body;
    try {
        const updatedPost = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json(updatedPost);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deletePost = async (req, res) => {
    const postId = req.params.postId;
    try {
        const deletedPost = await Post.findByIdAndDelete(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.json({ message: 'Post deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};
