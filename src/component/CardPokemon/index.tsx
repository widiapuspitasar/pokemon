import { Card, CardContent, Box, Typography, CardMedia, CardActionArea } from "@mui/material";
import { ListPokemon } from "../../interface";
import { useEffect, useState } from "react";
import { getColorFromUrl } from "../../utils/color";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: ListPokemon;
}

const CardPokemon = ({ pokemon }: PokemonCardProps) => {
  const [pokemonColor, setPokemonColor] = useState<string | null>(null);

  const getPokemonColor = async () => {
    const color = await getColorFromUrl(pokemon.image);
    if (color) setPokemonColor(color);
  };

  useEffect(() => {
    getPokemonColor();
  }, []);

  return (
    <Link href={`/pokemon/${pokemon.name}`} passHref>
      <Card sx={{ backgroundColor: pokemonColor }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={pokemon.image}
            title={pokemon.name}
            sx={{ height: 100, objectFit: "contain" }}
          />
          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <Typography sx={{ textTransform: "capitalize" }}>
                #{pokemon.pokedexNumber}
              </Typography>
              <Typography sx={{ textTransform: "capitalize" }}>
                &nbsp;{pokemon.name}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default CardPokemon;
