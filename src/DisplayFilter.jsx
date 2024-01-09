import styled from 'styled-components';
import { StyledDiv } from './UI/MixedStyle';

// Styled component for the main container
const MainDiv = styled.div`
  display: flex;
`;

function DisplayFilter({ data, getByOption }) {
  // Arrays to store unique chemistry and process values
  const chemistry = [];
  const process = [];

  // Iterate through the data to extract chemistry and process values
  for (const ele in data) {
    Object.keys(data[ele]).map((each) => {
      const [first, second] = each.split('#');
      chemistry.push(first);
      process.push(second);
    });
  }

  // Handle change event for select inputs
  function onOptionChangeHandler(e) {
    const { value } = e.target;
    // Notify the parent component about the selected option
    getByOption(value);
  }

  return (
    // Main container for the filter section
    <MainDiv>
      {/* Section for filtering by Chemistry */}
      <StyledDiv>
        <h2>Filter by Chemistry</h2>
        <select name='Chemistry' onChange={onOptionChangeHandler}>
          {/* Default option for selecting chemistry */}
          <option value='' disabled>
            Select Chemistry
          </option>
          {/* Map through unique chemistry values */}
          {chemistry.map((each, ind) => (
            // Render each option with its value and key
            <option value={each} key={ind}>
              {each}
            </option>
          ))}
        </select>
      </StyledDiv>
      {/* Section for filtering by Process */}
      <StyledDiv>
        <h2>Filter by Process</h2>
        <select name='Process' onChange={onOptionChangeHandler}>
          {/* Default option for selecting process */}
          <option value='' disabled>
            Select Process
          </option>
          {/* Map through unique process values */}
          {process.map((each, ind) => (
            // Render each option with its value and key
            <option value={each} key={ind}>
              {each}
            </option>
          ))}
        </select>
      </StyledDiv>
      {/* Section for searching by Keyword */}
      <StyledDiv>
        <h2>Search by Keyword</h2>
        <input type='search' />
      </StyledDiv>
    </MainDiv>
  );
}

export default DisplayFilter;
