import {Button, Card, Grid, Row, Text} from "@nextui-org/react";
import Layout from "../components/layouts/layout";
import {GetStaticProps, NextPage} from "next";
import {pokeApi} from "../../api";
import {PokemonListResponse, SmallPokemon} from "../../interfaces";
import { PokemonCard } from "@/components/pokemon/PokemonCard";

interface Props {
    pokemons: SmallPokemon[]
}
const HomePage: NextPage<Props> = ({pokemons}) => {
    console.log(pokemons)
    return (
        <Layout title='Listado de Pokemons'>
           <Grid.Container gap={2} justify='flex-start'>
               {
                   pokemons.map( ( pokemon ) => (
                        <PokemonCard
                            key={pokemon.id}
                            pokemon={pokemon}
                        />
                   ) )
               }
           </Grid.Container>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

    const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    console.log(data)
    const pokemons: SmallPokemon[] = data.results.map( (poke,i) => ({
        ...poke,
        id: i+1,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
    })) ;

        return {
            props:{
                pokemons:pokemons
            }
        }
}

export default HomePage;
