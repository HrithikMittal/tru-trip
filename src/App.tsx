import React from "react";
import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "react-query";
import PokemonContextProvider from "./ context/provider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PokemonContextProvider>
        <Routes />
      </PokemonContextProvider>
    </QueryClientProvider>
  );
}

export default App;
