import { Paper, Tab, Tabs, styled } from '@mui/material';
import React from 'react';


// Create a styled component for the Paper element
const StyledPaper = styled(Paper)({
  flexGrow: 1,
});

// Create a styled component for the Tabs element
const StyledTabs = styled(Tabs)({
  height: 10,
});

// Create a styled component for the Tab element
const StyledTab = styled(Tab)({
  fontSize: 12,
  color: '#5f6368',
  textTransform: 'capitalize',
  height: 10,
  fontWeight: 600,
  fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
});

function CenteredTabs() {
  return (
    <StyledPaper>
      <StyledTabs textColor='primary' indicatorColor='primary' centered>
        <StyledTab label="Questions" />
        <StyledTab label="Responses" />
      </StyledTabs>
    </StyledPaper>
  );
}

export default CenteredTabs;
