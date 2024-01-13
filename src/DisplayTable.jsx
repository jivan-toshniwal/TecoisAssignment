import styled from 'styled-components';
import { StyledDiv } from './UI/MixedStyle';
import TableRow from './TableRow';
import { useState } from 'react';
import Modal from './UI/Modal';
import LoginPage from './LoginPage';
import SignUp from './SignUp';
import toast from 'react-hot-toast';

// Styled component for the table container
const TableDiv = styled.div`
  width: 90%;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.$active};
  color: white;
  cursor: pointer;
  border: none;
  transition: 0.5s;

  &:hover {
    background-color: #000000d2;
  }
`;

const users = [
  {
    company: 'mychemist',
    contact: '9822442282',
    email: 'j.toshniwal@yahoo.co.in',
    location: 'Mumbai',
    name: 'Jivan',
    password: '223521',
  },
];

function DisplayTable({ tableData, isLogin, setLogin }) {
  // State to manage selected items for download
  const [selected, setSelected] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  function getUserData(user) {
    users.push(user);
    setShowModal(false);
    setIsSignUp(false);
    setLogin(true);
    toast.success('Sign-up success!');
  }

  function getCredentials(user) {
    const input_email = user.email;
    const input_password = user.password;
    for (const { email, password } of users) {
      if (input_email === email && input_password === password) {
        setLogin(true);
        setShowModal(false);
        toast.success('Login Success!!');
        return;
      }
    }
    toast.error('Invalid Email or Password!!');
  }

  // Transform data for rendering TableRow components
  const data = Object.keys(tableData).map((each) => {
    const [name, process] = each.split('#');
    return {
      name,
      process,
      view: tableData[each].view,
      pdf: tableData[each].pdf,
      id: tableData[each].id,
    };
  });

  // Function to handle downloading PDFs
  const handleDownloadPDFs = () => {
    // Handle if not login
    if (!isLogin) {
      setShowModal(true);
      return;
    }
    // Get an array of selected PDF links
    const links = Object.values(selected);

    // Open each link in a new browser tab
    links.forEach((link) => {
      window.open(link, '_blank');
    });
  };

  return (
    <>
      <StyledDiv>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          {/* Display the count of selected products */}
          <p>Select Product({Object.keys(selected).length})</p>
          {/* Button to trigger PDF download */}
          <StyledButton
            onClick={handleDownloadPDFs}
            $active={Object.keys(selected).length > 0 ? '#000000' : '#a8a8a8'}
          >
            DOWNLOAD-PDF
          </StyledButton>
        </div>
        {/* Container for rendering TableRow components */}
        <TableDiv>
          {data.map((each, ind) => (
            // Render each TableRow component with relevant props
            <TableRow
              obj={each}
              key={ind}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </TableDiv>
      </StyledDiv>
      {showModal && (
        <Modal close={setShowModal}>
          {isSignUp ? (
            <SignUp
              setIsSignUp={() => setIsSignUp(false)}
              close={setShowModal}
              getUserData={getUserData}
            />
          ) : (
            <LoginPage
              setIsSignUp={() => setIsSignUp(true)}
              getCredentials={getCredentials}
              close={setShowModal}
            />
          )}
        </Modal>
      )}
    </>
  );
}

export default DisplayTable;
