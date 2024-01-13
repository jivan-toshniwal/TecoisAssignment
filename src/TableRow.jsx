import styled from 'styled-components';
import Modal from './UI/Modal';
import { useState } from 'react';

const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function TableRow({ obj, selected, setSelected }) {
  const [viewData, setViewData] = useState('');

  function onCheck(id, pdf) {
    setSelected((old) => {
      const tempObj = { ...old };
      if (old[id]) {
        delete tempObj[id];
      } else {
        tempObj[id] = pdf;
      }
      return tempObj;
    });
  }

  function onView(data) {
    setViewData(data);
  }
  return (
    <>
      <StyledRow>
        <input
          type='checkbox'
          checked={selected[obj.id] || false}
          onChange={(e) => onCheck(obj.id, obj.pdf)}
        />

        <p>{obj.name}</p>
        <p>{obj.process}</p>
        <p
          style={{ color: 'blue', cursor: 'pointer' }}
          onClick={(e) => onView(obj.view)}
        >
          View Details
        </p>
      </StyledRow>
      {viewData && <Modal close={() => setViewData(false)}>{viewData}</Modal>}
    </>
  );
}

export default TableRow;
