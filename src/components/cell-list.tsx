import { Fragment, useEffect } from 'react';
import { useActions } from '../hooks/use-actions';
import './cell-list.css';
import CellListItem from './cell-list-item';
import AddCell from './add-cell';
import { useTypedSelector } from '../hooks/use-typed-selector';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) => {
    return order.map((id) => data[id]);
  });

  const renderedCells = cells.map((cell) => {
    return (
      <Fragment key={cell.id}>
        <CellListItem cell={cell} />
        <AddCell previousCellId={cell.id} />
      </Fragment>
    );
  });

  //// initial code cells

  const initialCode = `
    const hello = 'Hello World!!!';

    show(hello);
  `;

  const reactCode = `
    const reactCode =
      <h1 style={{ color: 'purple' }}>
      React is imported automatically
      </h1>;

    show(reactCode);
  `;

  const initialMarkdown = `
  ## Type javascript or markdown in an editor!
  - To display values in the preview window, use the built-in
    **show()** function.
  - You can also import any npm library or CSS file.
  - Any cell can be edited, including this one!
  *try adding a new cell!*
  `;

  const { updateCell } = useActions();

  useEffect(() => {
    let firstCodeCellUpdated = false;
    cells.forEach((cell) => {
      if (cell.type === 'code') {
        if (!firstCodeCellUpdated) {
          updateCell(cell.id, initialCode);
          firstCodeCellUpdated = true;
        } else {
          updateCell(cell.id, reactCode);
        }
      }
      if (cell.type === 'text') {
        updateCell(cell.id, initialMarkdown);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  ////

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
