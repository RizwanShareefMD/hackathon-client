Here's a sample page that lists trending medical topics using React and Material-UI:

TrendingMedicalTopics.js
```
import React from 'react';
import { Container, Grid, Typography, Paper } from '@mui/material';

const trendingTopics = [
  { id: 1, topic: 'COVID-19 Updates', description: 'Latest news and research on COVID-19' },
  { id: 2, topic: 'Mental Health Awareness', description: 'Resources and support for mental health' },
  { id: 3, topic: 'Cancer Research Breakthroughs', description: 'Latest developments in cancer research and treatment' },
  { id: 4, topic: 'Digital Health Innovations', description: 'New technologies and innovations in healthcare' },
  { id: 5, topic: 'Nutrition and Wellness', description: 'Tips and advice on healthy eating and living' },
];

const TrendingMedicalTopics = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h2">
            Trending Medical Topics
          </Typography>
        </Grid>
        {trendingTopics.map((topic) => (
          <Grid item key={topic.id} xs={12} sm={6} md={4} lg={3}>
            <Paper elevation={3}>
              <Typography variant="h5" component="h3">
                {topic.topic}
              </Typography>
              <Typography variant="body1" component="p">
                {topic.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingMedicalTopics;
```

This code creates a page that lists trending medical topics in a grid layout. Each topic is displayed in a paper component with a heading and description.

App.js
```
import React from 'react';
import TrendingMedicalTopics from './TrendingMedicalTopics';

const App = () => {
  return (
    <div>
      <TrendingMedicalTopics />
    </div>
  );
};

export default App;
```

index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

To run this code, create a new React project using `create-react-app`, then replace the contents of `App.js` and `index.js` with the code above. Finally, create a new file called `TrendingMedicalTopics.js` and paste the code into it.

Make sure to install the Material-UI library by running `npm install @mui/material` or `yarn add @mui/material` in your terminal.

Open your web browser and navigate to `http://localhost:3000` to see the trending medical topics page in action.
