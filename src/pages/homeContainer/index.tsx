
// import {Grid, Button, Container  } from '@mui/material';
// import usePokemons from '../../hooks/usePokemons';
// import { PokemonList } from '../../component';

// const HomeContainer = () => {
//     const { pokemons, hasMorePokemon, fetchNextPage } = usePokemons();
    

//     return(
    
// <Container>
//   <h1 className="text-black font-bold text-4xl text-center m-2">WELCOME TO POKEMON WEB</h1>
//   <PokemonList pokemons={pokemons}></PokemonList>
//   {hasMorePokemon ? (
//     <Grid container justifyContent="flex-end" style={{ marginTop: '1rem', marginBottom:'1rem' }}>
//       <Button
//         // variant='contained'
//         onClick={fetchNextPage}
//         sx={{
//           display: 'inline-block',
//           margin: '1rem 0 2rem',
//           backgroundColor: 'orange',
//           color: 'white',
//           '&:hover': {
//               backgroundColor: 'yellow',
//               color: 'black',
//           },
//       }}
//       >
//         NEXT
//       </Button>
//     </Grid>
//   ) : null}
// </Container>

//     )
// }

// export default HomeContainer