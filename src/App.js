import React, { useState } from 'react';
import { Container, Button } from '@material-ui/core';
import NewsList from './components/NewsList';
import AddNews from './components/AddNews';

const App=() => {
  const [openAddNews, setOpenAddNews]=useState(false);
  const [news, setNews]=useState([]);

  const handleAddNews=(newNewsItem) => {
    setNews((prevNews) => [...prevNews, newNewsItem]);
  };

  return (
    <Container>
      <h1>News Management</h1>
      <Button variant="contained" color="primary" onClick={() => setOpenAddNews(true)}>
        Add News
      </Button>
      <NewsList news={news} setNews={setNews} />
      <AddNews open={openAddNews} onClose={() => setOpenAddNews(false)} onAddNews={handleAddNews} />
    </Container>
  );
};

export default App;
