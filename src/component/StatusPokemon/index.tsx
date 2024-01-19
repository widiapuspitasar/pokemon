import { Card, CardContent, Grid, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { PokemonDetail } from "../../interface"

interface StatusPokemonProps {
    pokemon: PokemonDetail
}

const StatusPokemon = ({ pokemon }: StatusPokemonProps) => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              {pokemon ? (
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      {pokemon.stats.map((stat) => (
                        <TableCell key={stat.stat.name} sx={{ textTransform: "capitalize" }}>
                          {stat.stat.name}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {pokemon.stats.map((stat) => (
                      <TableCell key={stat.stat.name}>{stat.base_stat}</TableCell>
                    ))}
                  </TableBody>
                </Table>
              ) : null}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default StatusPokemon;