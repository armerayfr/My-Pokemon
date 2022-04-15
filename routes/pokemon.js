const { Router } = require("express");
const router = Router();

const {
  releasePokemon,
  renamePokemon,
  catchingPokemon,
} = require("../controllers/pokemon");

router.get("/catch-pokemon", catchingPokemon);
router.get("/release-pokemon", releasePokemon);
router.post("/rename-pokemon", renamePokemon);

module.exports = router;
