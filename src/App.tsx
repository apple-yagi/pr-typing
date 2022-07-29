import { useGetReleasesQuery } from './api/prtimesHackthonApi';
import { TypingGame } from './components/TypingGame';
import { globalStyles } from './styles/global';

function App() {
  globalStyles();

  const { data, isLoading } = useGetReleasesQuery({});

  if (isLoading) return <p>...loading</p>;

  if (!data) return <p>Error</p>;

  return (
    <TypingGame
      text={data[0].body
        .replace(/(<([^>]+)>)/gi, '')
        .replace(/\s+/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (s) =>
          String.fromCharCode(s.charCodeAt(0) - 0xfee0),
        )}
    />
  );
}

export default App;
