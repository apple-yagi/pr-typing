import { useState } from 'react';
import { useGetReleasesQuery } from './api/prtimesHackthonApi';
import { TypingGame } from './components/TypingGame';
import { Button } from './components/ui/Button';
import { ListItem } from './components/ui/ListItem';
import { Typography } from './components/ui/Typography';
import { styled } from './stitches.config';
import { globalStyles } from './styles/global';
import { convertPressReleaseBody } from './utils/convertPressReleaseBody';

function App() {
  globalStyles();

  const { data, isLoading } = useGetReleasesQuery({});
  const [body, setBody] = useState('');

  if (isLoading) return <p>...loading</p>;

  if (!data) return <p>Error</p>;

  return (
    <Container>
      <Title>PR Typing ⌨️</Title>
      {body ? (
        <>
          <Button
            css={{
              margin: '20px auto 40px',
            }}
            type='button'
            onClick={() => setBody('')}
          >
            Back
          </Button>
          <Typography
            as='p'
            size='lg'
            css={{ textAlign: 'center', marginBottom: 40 }}
          >
            下のElementをクリックするとゲームが開始します
          </Typography>
          <TypingGame text={convertPressReleaseBody(body)} />
        </>
      ) : (
        <>
          <Typography
            as='p'
            size='lg'
            css={{
              marginBottom: 24,
              textAlign: 'center',
            }}
          >
            プレスリリースをクリックするとゲームを開始します
          </Typography>
          <List>
            {data.map((d) => (
              <ListItem
                key={`${d.company_id}-${d.release_id}`}
                onClick={() => setBody(d.body)}
              >
                <img src={d.main_image} width={60} height={60} />
                <p>{d.title}</p>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Container>
  );
}

const Container = styled('div', {
  maxWidth: 1024,
  display: 'flex',
  alignContent: 'center',
  flexDirection: 'column',
  margin: 'auto',
  padding: '30px 20px',
});

const Title = styled('h1', {
  marginBottom: '40px',
  fontSize: 60,
  fontWeight: 'bold',
  color: '$primaryBlue',
  textAlign: 'center',
});

const List = styled('ul', {
  '> * + *': {
    marginTop: 32,
  },
});

export default App;
