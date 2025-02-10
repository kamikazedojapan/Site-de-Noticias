import {createService, findAllService} from "../services/news.service.js"

const create = async (req, res) => {
    try {
        const { title, text, banner } = req.body;

        if (!title || !text || !banner) {
            return res.status(400).send({ message: "Submit all fields for registration" });
        }

        await createService({
            title,
            text,
            banner,
            user: { _id: "67a289fa91ab67519b0e264f" }
        });

        res.status(201).send({ message: "News created successfully" });

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const findAll = async (req, res) => {
    try {
        const auth = req.headers.authorization;
        if (!auth) {
            res.send(401)
        }

        const parts = auth.split(" ")

        const [schema, token] = parts

        if (parts.length !== 2) {
            return res.send(401)
        }

        if(schema !== "Bearer") {
            return res.send(401)
        }
        
        const news = await findAllService();
        
        if (news.length === 0) {
            return res.status(400).send({ message: "There are no registered news" });
        }

        res.status(200).send(news);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

export { create, findAll }