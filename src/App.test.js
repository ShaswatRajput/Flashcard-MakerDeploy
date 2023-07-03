import { render, screen,fireEvent } from '@testing-library/react';
import CreatePage from './components/HomePageComponents/CreationPage';
import TabButtons from './components/HomePageComponents/TabMenu';
import FlashCards from './components/SecondaryPages/FlashCards';
import MyGroupPage from './components/SecondaryPages/MyGroupPage';




test('renders the CreatePage component', () => {
  // render the component
  const { getByText } = render(<CreatePage />);

  
  expect(getByText('Create Group*')).toBeInTheDocument();
});

test('submits the form with valid values', () => {
  // render the component
  const { getByLabelText, getByText } = render(<CreatePage />);

  // fill in the form field
  fireEvent.change(getByLabelText('Create Group*'), { target: { value: 'Test Group' } });
  fireEvent.change(getByLabelText('Description'), { target: { value: 'Test Description' } });
  fireEvent.change(getByLabelText('Enter Term'), { target: { value: 'Test Term' } });
  fireEvent.change(getByLabelText('Enter Definition'), { target: { value: 'Test Definition' } });

  // submitting the form
  fireEvent.click(getByText('Create'));

  
});
test('renders the TabButtons component', () => {

  const { getByText } = render(
    <Router>
      <TabButtons />
    </Router>
  );

  
  expect(getByText('Create Flashcard')).toBeInTheDocument();
  expect(getByText('My Flashcards')).toBeInTheDocument();
});
test('renders the FlashCards component', () => {
  const { getByText } = render(<FlashCards />);
  

  expect(getByText('Copy URL')).toBeInTheDocument();
  expect(getByText('Download')).toBeInTheDocument();
  expect(getByText('Print')).toBeInTheDocument();
});
test('renders the MyGroupPage component', () => {
  const { getByText } = render(<MyGroupPage />);
  
 
  expect(getByText('You don\'t have any Flashcards')).toBeInTheDocument();
});