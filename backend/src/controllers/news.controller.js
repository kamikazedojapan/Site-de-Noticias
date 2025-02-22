import {createService, findAllService, countNews, topNewsService, findByIdService, searchByTitleService, searchByUserService, updateService, deleteService, likeService, deleteLikeService, addCommentService, deleteCommentService} from "../services/news.service.js"

export const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !text || !banner) {
            return res.status(400).send({ message: "Submit all fields for registration" });
        }

        await createService({
            title,
            text,
            banner,
            user: req.userId
        });

        res.status(201).send({ message: "News created successfully" });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export const findAll = async (req, res) => {
    try {
        let {limit = 4, offset = 0} = req.query;
        
        limit = parseInt(limit);
        offset = parseInt(offset);
    
        if (isNaN(limit) || limit <= 0) limit = 5;
        if (isNaN(offset) || offset < 0) offset = 0;

        
        const news = await findAllService(offset, limit);
        const total = await countNews();
        const currentUrl = req.baseUrl;
        
        const next = offset + limit;
        const nextUrl = next < total ? `${currentUrl}?=limit${limit}&offset=${offset}` : null;

        const previous = offset - limit < 0 ? null : offset - limit;
        const previousUrl = previous != null ? `${currentUrl}?=limit${limit}&offset=${previous}` : null;

        if (news.length === 0) {
            return res.status(400).send({ message: "There are no registered news" });
        }
        
        res.send({
            nextUrl,
            previousUrl,
            limit,
            offset,
            total,

            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar
            })),
        });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
};

export const topNews = async (req, res) => {
    try {
        const news = await topNewsService();
    
        if (!news) {
            res.status(400).send({message: "There is no registered post"});
        }
    
        res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const findById = async (req, res) => {
    try {
        const { id } = req.params
        
        const news = await findByIdService(id)
        
        return res.send({
            news: {
                id: news._id,
                title: news.title,
                text: news.text,
                banner: news.banner,
                likes: news.likes,
                comments: news.comments,
                name: news.user.name,
                username: news.user.username,
                userAvatar: news.user.avatar
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const searchByTitle = async(req, res) => {
    try {
        const {title} = req.query;

        const news = await searchByTitleService(title)

        if(!news.length === 0) {
            res.status(400).send({message: "There are no news with title"})
        }
        
        res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar
            })),
        });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }

}

export const searchByUser = async(req, res) => {
    try {
        const id = req.userId
        const news = await searchByUserService(id)

        return res.send({
            results: news.map((item) => ({
                id: item._id,
                title: item.title,
                text: item.text,
                banner: item.banner,
                likes: item.likes,
                comments: item.comments,
                name: item.user.name,
                username: item.user.username,
                userAvatar: item.user.avatar
            })),
        })
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

export const update = async(req, res) => {
    try {
        const {title, text, banner} = req.body;
        const { id } = req.params;

        if (!title && !banner && !text) {
            res.status(400).send({ message: "Submit at least one field to update the post !"});
        }

        const news = await findByIdService(id)

        if (news.user._id != req.userId) {
            res.status(400).send({ message: "You didn't update this post !"});
        }

        await updateService(id, title, text, banner);

        return res.status(200).send({ message: "Post successfully updated !"})
    } catch(err) {
        return res.status(500).send({ message: err.message });
    }
}

export const deleted = async(req, res) => {
    try {
        const { id } = req.params;

        const news = await findByIdService(id)
        
        if (news.user._id != req.userId) {
            res.status(400).send({ message: "You didn't update this post !"});
        }

        await deleteService(id);


        res.status(200).send({ message: "News deleted sucessfully !"});
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

export const likeNews = async(req, res) => {
    const { id } = req.params;
    const userId = req.userId;

    const newsLiked = await likeService(id, userId);


    if (!newsLiked) {
        await deleteLikeService(id, userId);
        return res.status(200).send({ message: "Like removed sucessfully !" });
    }
    res.status(200).send({ message: "Like added successfully !"});
}

export const addComment = async(req, res) => {
    try {
        const { id } = req.params;
        const userId = req.userId;
        const { comment } = req.body;

        if(!comment) {
            return res.status(400).send({ message: "Write a message to comment"});
        }

        await addCommentService(id, comment, userId);

        res.send({ message: "Comment successfully completed!"});
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

export const deleteComment = async(req, res) => {
    try {
        const { id, idComment } = req.params;
        const userId = req.userId;

        const commentDeleted = await deleteCommentService(id, idComment, userId);

        const commentFinder = commentDeleted.comments.find((comment) => comment.idComment === idComment);

        if(!commentFinder) {
            return res.status(404).send({ message: "Comment not found !"});
        }

        if(commentFinder.userId !== userId) {
            return res.status(400).send({ message: "You can't delete this comment"})
        }

        res.send({ message: "Comment successfully deleted !"});
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
} 