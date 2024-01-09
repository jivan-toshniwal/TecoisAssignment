import { useState } from 'react';
import { data as processData } from './data';
import { StyledContainer, StyledDiv } from './UI/MixedStyle';
import DisplayList from './DisplayList';
import DisplayFilter from './DisplayFilter';
import DisplayTable from './DisplayTable';
import styled from 'styled-components';

const StyledNewDiv = styled.div`
  width: 100%;
`;

function App() {
  // State to store the original data
  const [data, setData] = useState(processData);

  // Login In Status
  const [isLogin, setIsLogin] = useState(false);

  // State to store the data to be displayed in the table
  const [tableData, setTableData] = useState(data['Gelcoats']);

  // Function to update tableData based on the selected key
  function getActiveKey(key) {
    setTableData(data[key]);
  }

  // Function to filter data by a specific option
  function getByOption(option) {
    // Regular expression to match the specified option in keys
    const regEx = new RegExp(`\\b${option}\\b`);

    // Temporary object to store filtered data
    const tempData = {};

    // Iterate through the keys of the original data
    for (const key in data) {
      // Get the data associated with the key
      const newData = data[key];

      // Iterate through the keys of the nested data
      for (const k in newData) {
        // Check if the option is present in the key
        if (regEx.test(k)) {
          // If yes, add it to the temporary object
          tempData[k] = newData[k];
        }
      }
    }

    // Update the tableData state with the filtered data
    setTableData(tempData);
  }

  return (
    <StyledDiv>
      <h1>Our Products</h1>
      <StyledContainer>
        {/* Component to display the list of products */}
        <DisplayList data={data} getActiveKey={getActiveKey} />

        <StyledNewDiv>
          {/* Component for filtering data by option */}
          <DisplayFilter data={data} getByOption={getByOption} />

          {/* Component to display the table with filtered data */}
          <DisplayTable tableData={tableData} isLogin={isLogin} />
        </StyledNewDiv>
      </StyledContainer>
    </StyledDiv>
  );
}

export default App;
