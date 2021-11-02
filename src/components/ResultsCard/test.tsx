/**
 * @jest-environment jsdom
 */
/* eslint-disable @typescript-eslint/no-empty-function */

import { screen } from '@testing-library/react'

import ResultsCard from '.'

import { renderWithTheme } from '../../utils/tests/helpers'

describe('<ResultsCard />', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: () => {},

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        getItem: (key: string) => {
          return '[{"category":"Entertainment: Japanese Anime & Manga","question":"In the 1988 film Akira, Tetsuo ends up destroying Tokyo.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","question":"The song Megalovania by Toby Fox made its third appearence in the 2015 RPG Undertale.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Politics","question":"In 2016, the United Kingdom voted to stay in the EU.","correct_answer":"False","incorrect_answers":["True"]},{"category":"General Knowledge","question":"Ananas is mostly used as the word for Pineapple in other languages.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","question":"In Super Mario 3D World, the Double Cherry power-up originated from a developer accidentally making two characters controllable.","correct_answer":"True","incorrect_answers":["False"]},{"category":"General Knowledge","question":"The French word for glass is glace.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Entertainment: Television","question":"Klingons once had a period of Democracy in their history, they referred to it as the Dark Times.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Video Games","question":"The scrapped Sonic the Hedgehog 2 level Hidden Palace Zone was later reused in the iOS port of the game. ","correct_answer":"True","incorrect_answers":["False"]},{"category":"Entertainment: Books","question":"Green Eggs and Ham consists of only 50 different words.","correct_answer":"True","incorrect_answers":["False"]},{"category":"Geography","question":"The title of the 1969 film Krakatoa, East_of Java is incorrect, as Krakatoa is in fact west of Java.","correct_answer":"True","incorrect_answers":["False"]}]'
        },

        removeItem: () => {},

        clear: () => {},

        length: 1,

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        key: (index: number) => null
      }
    })
  })

  it("should render the score, questions list and 'play again' button", () => {
    renderWithTheme(<ResultsCard />)

    expect(
      screen.getByRole('heading', { name: /You scored:/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('list')).toBeInTheDocument()

    expect(
      screen.getByRole('link', { name: /play again/i })
    ).toBeInTheDocument()
  })
})
