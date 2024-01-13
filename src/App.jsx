import { useEffect, useState } from 'react';
import { data as processData } from './data';
import { StyledContainer, StyledDiv } from './UI/MixedStyle';
import DisplayList from './DisplayList';
import DisplayFilter from './DisplayFilter';
import DisplayTable from './DisplayTable';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';

const StyledNewDiv = styled.div`
  width: 100%;
`;

function App() {
  // State to store the original data
  const [data] = useState(processData);
  const [process, setProcess] = useState([]);
  const [chemistry, setChemistry] = useState([]);

  useEffect(() => {
    const tempChem = [];
    for (const ele in data) {
      Object.keys(data[ele]).map((each) => {
        const [first] = each.split('#');
        tempChem.push(first);
      });
    }
    setChemistry(Array.from(new Set(tempChem)));
  }, [data]);

  // Login In Status
  const [isLogin, setLogin] = useState(false);

  const [selected, setSelected] = useState({});

  // State to store the data to be displayed in the table
  const [tableData, setTableData] = useState(data['Gelcoats']);

  // Function to update tableData based on the selected key
  function getActiveKey(key) {
    setTableData(data[key]);
  }

  // Function to filter data by a specific option
  function getByOption(option, name) {
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
    if (name === 'Chemistry') {
      const tempProcess = [];
      for (const ele in tempData) {
        const [, second] = ele.split('#');
        tempProcess.push(second);
      }
      setProcess(tempProcess);
    }

    // Update the tableData state with the filtered data
    setTableData(tempData);
  }

  return (
    <>
      <StyledDiv>
        <h1>Our Products</h1>
        <StyledContainer>
          {/* Component to display the list of products */}
          <DisplayList
            data={data}
            getActiveKey={getActiveKey}
            setSelected={setSelected}
          />

          <StyledNewDiv>
            {/* Component for filtering data by option */}
            <DisplayFilter
              getByOption={getByOption}
              chemistry={chemistry}
              process={process}
              setSelected={setSelected}
            />

            {/* Component to display the table with filtered data */}
            <DisplayTable
              tableData={tableData}
              isLogin={isLogin}
              setLogin={setLogin}
              selected={selected}
              setSelected={setSelected}
            />
          </StyledNewDiv>
        </StyledContainer>
      </StyledDiv>
      <Toaster
        position='top-center'
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: '24px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'white',
            color: 'black',
          },
        }}
      />
    </>
  );
}

export default App;
