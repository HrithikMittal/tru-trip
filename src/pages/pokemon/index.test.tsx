import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pokemon from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const MockPokemon = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Pokemon />
      </Router>
    </QueryClientProvider>
  );
};

test("Title Testing pokemon", () => {
  render(<MockPokemon />);

  // to test the title of the page
  const titleElement = screen.getByText("Pokemons");
  expect(titleElement).toBeInTheDocument();

  // to the the sub title of the page
  const subTitleElement = screen.getByText("My Pokemons");
  expect(subTitleElement).toBeInTheDocument();
});

describe("List Testing", () => {
  it("should be 20 pokemons", async () => {
    render(<MockPokemon />);
    const allTexts = await screen.findAllByTestId("list-container");
    expect(allTexts.length).toBe(20); // API fetch 20 pokemons at the time
  });

  it("should be 40 after scrolling", async () => {
    render(<MockPokemon />);
    const _allList = await screen.findAllByTestId("list-container");
    const lastItem = _allList[_allList.length - 1];

    fireEvent.scroll(lastItem, { target: { scrollY: 10000 } });

    const allTextsAfterScrolling = await screen.findAllByTestId(
      "list-container"
    );

    expect(_allList.length + allTextsAfterScrolling.length).toBe(40); // API fetch 40 pokemons at the time
  });
});
