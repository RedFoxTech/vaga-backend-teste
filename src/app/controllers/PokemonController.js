import Pokemon from "../models/Pokemon";

class PokemonController {
    async index(req, res) {
        const page = req.query.page || 1;
        const limit = req.query.limit || 25;

        const pokemons = await Pokemon.findAll({
            limit,
            offset: (page - 1) * limit,
            order: ["name"],
        });

        return res.json(pokemons);
    }

    async show(req, res) {
        const { id } = req.params;

        const pokemon = await Pokemon.findByPk(id);

        if (!pokemon) {
            return res.status(401).json({ error: "Pokemon not found" });
        }

        return res.json(pokemon);
    }
}

export default new PokemonController();
