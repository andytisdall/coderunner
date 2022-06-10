import { Cell } from './cell';
import { CellsState } from './reducers/cellsReducer';
import { randomID } from './reducers/cellsReducer';

const markdownCell: Cell = {
  type: 'text',
  content: `
  ## Type javascript or markdown in an editor!
  - To display values in the preview window, use the built-in
    **show()** function.
  - You can also import any npm library or CSS file.
  - Any cell can be edited, including this one!
  *try adding a new cell!*
  `,
  id: randomID(),
};

const jsCell: Cell = {
  type: 'code',
  content: `
  const hello = 'Hello' + ' World!!!';

  show(hello);
`,
  id: randomID(),
};

const reactCell: Cell = {
  type: 'code',
  content: `
  const reactCode =
    <h1 style={{ color: 'purple' }}>
    React is imported automatically
    </h1>;

  show(reactCode);
`,
  id: randomID(),
};

const initialCells: CellsState = {
  data: {
    [markdownCell.id]: markdownCell,
    [jsCell.id]: jsCell,
    [reactCell.id]: reactCell,
  },
  order: [markdownCell.id, jsCell.id, reactCell.id],
  loading: false,
  error: null,
};

export const initialState = {
  cells: initialCells,
};
