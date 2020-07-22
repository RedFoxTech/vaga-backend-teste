import Pokemon from "../models/Pokemon";
import * as Yup from "yup";
import { Op } from "sequelize";

class PokemonController {
    async index(req, res) {
        const page = req.query.page || 1;
        const limit = req.query.limit || 25;

        const { name, type, type2 } = req.query;

        let where = {};

        if (name) {
            where = {
                ...where,
                name: {
                    [Op.iLike]: name,
                },
            };
        }

        if (type) {
            where = {
                ...where,
                type: {
                    [Op.iLike]: type,
                },
            };
        }

        if (type2) {
            where = {
                ...where,
                type2: {
                    [Op.iLike]: type2,
                },
            };
        }

        const pokemons = await Pokemon.findAll({
            where,
            order: ["name"],
            limit,
            offset: (page - 1) * limit,
        });

        return res.json(pokemons);
    }

    async show(req, res) {
        const { id } = req.params;

        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            return res.status(401).json({ error: "Pokemon não encontrado" });
        }

        return res.json(pokemon);
    }

    async store(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            type: Yup.string().required(),
            atk: Yup.number().required(),
            def: Yup.number().required(),
            sta: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: "Schema is invalid" });
        }

        const registerLast = await Pokemon.max("id");

        const data = { id: registerLast + 1, ...req.body };

        const checkExistPokemon = await Pokemon.findByPk(data.id);

        if (checkExistPokemon) {
            return res
                .status(401)
                .json({ error: `Pokemon já cadastrado com o id: ${data.id}` });
        }

        const pokemon = await Pokemon.create(data);
        return res.json(pokemon);
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            type: Yup.string().required(),
            atk: Yup.number().required(),
            def: Yup.number().required(),
            sta: Yup.number().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: "Schema is invalid" });
        }

        const { id } = req.params;

        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            return res.status(401).json({ error: "Pokemon não encontrado" });
        }

        await pokemon.update(req.body);

        return res.json(pokemon);
    }

    async delete(req, res) {
        const { id } = req.params;

        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            return res.status(401).json({ error: "Pokemon não encontrado" });
        }

        await pokemon.destroy();

        return res.json({ message: "Pokemon excluido com sucesso" });
    }
}

export default new PokemonController();
