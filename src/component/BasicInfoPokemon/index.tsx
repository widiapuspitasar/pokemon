import { Card, CardContent, Grid, Typography } from "@mui/material"
import { PokemonDetail } from "../../interface"

interface BasicInfoPokemonProps {
    pokemon: PokemonDetail
}

const BasicInfoPokemon = ({ pokemon }: BasicInfoPokemonProps) => {
  return (
    <Card>
      <CardContent>
        <Grid
          container
          sx={{ textTransform: "capitalize" }}
          justifyContent="center"
          textAlign="center"
          spacing={2}
        >
          <Grid item xs={6}>
            <Typography variant="subtitle2">Height</Typography>
            <Typography variant="body2">{pokemon.height}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Weight</Typography>
            <Typography variant="body2">{pokemon.weight}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Types</Typography>
            <Typography variant="body2">
              {pokemon.types.map((type) => (
                <Typography key={type.type.name} variant="body2">
                  {type.type.name}
                </Typography>
              ))}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle2">Abilities</Typography>
            <Typography variant="body2">
              {pokemon.abilities.map((ability) => (
                <Typography key={ability.ability.name} variant="body2">
                  {ability.ability.name}
                </Typography>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default BasicInfoPokemon;