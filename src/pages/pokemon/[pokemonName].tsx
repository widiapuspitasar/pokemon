import { useRouter } from 'next/router';
import usePokemon from '../../hooks/usePokemon';
import { Container, Grid, Box, Button } from '@mui/material';
import { AvatarPokemon, BasicInfoPokemon, Navbar, StatusPokemon } from '../../component';
import Link from 'next/link';

const DetailPokemon = () => {
  const router = useRouter();
  const { pokemonName } = router.query!; // Non-null assertion operator
  const { pokemon, isLoading } = usePokemon({ pokemonName: pokemonName as string });

  return (
    <Container>
      <Navbar/>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {isLoading ? (
            <Box>Loading....</Box>
          ) : pokemon ? (
            <>
              <Box>
                <AvatarPokemon pokemon={pokemon} />
                <BasicInfoPokemon pokemon={pokemon} />
                <StatusPokemon pokemon={pokemon} />
                <Box sx={{ textAlign: 'center' }}>
                  <Link href="/">
                    <Button
                      variant="contained"
                      sx={{
                        display: 'inline-block',
                        margin: '1rem 0 2rem',
                        backgroundColor: 'black',
                        color: 'black',
                        '&:hover': {
                          backgroundColor: 'orange',
                          color: 'white',
                        },
                      }}
                    >
                      Go To Pokemon List
                    </Button>
                  </Link>
                </Box>
              </Box>
            </>
          ) : (
            <Box>Pokemon not Found</Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailPokemon;
