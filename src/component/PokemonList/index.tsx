import React from 'react';
import { Container, Grid, TextField, Box } from '@mui/material';
import { CardPokemon } from '..';
import { ListPokemon } from '../../interface';
import { useFormik } from 'formik';
import * as Yup from 'yup';


interface PokemonListProps {
  pokemons: ListPokemon[];
}

const PokemonList: React.FC<PokemonListProps> = ({ pokemons }: PokemonListProps) => {
  const validationSchema = Yup.object().shape({
    searchTerm: Yup.string()
      .matches(/^[^0-9]*$/, 'Search term should not contain numbers')
      
  });

  const formik = useFormik({
    initialValues: {
      searchTerm: '',
    },
    validationSchema: validationSchema,
    onSubmit: () => {
    },
  });

  const { values, handleChange, handleSubmit, errors, touched } = formik;

  const filteredPokemons = pokemons.filter((p) =>
    p.name.toLowerCase().includes(values.searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" marginBottom="4">
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            placeholder="Search Pokemon..."
            name="searchTerm"
            value={values.searchTerm}
            onChange={handleChange}
            variant="outlined"
            className="bg-yellow-200"
            style={{ backgroundColor: 'rgba(255, 255, 0, 0.3)', margin: '20px 8px'  }}
          />
          {touched.searchTerm && errors.searchTerm && (
            <p className="text-red-500">{errors.searchTerm}</p>
          )}
        </form>
      </Box>

      <Grid container spacing={2}>
        {filteredPokemons.length > 0 ? (
          filteredPokemons.map((p) => (
            <Grid item xs={6} key={p.name}>
              {/* Assuming CardPokemon is a component */}
              <CardPokemon pokemon={p} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <p>No matching Pokemon found.</p>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default PokemonList;
