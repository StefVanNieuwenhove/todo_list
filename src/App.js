import { ErrorBoundary } from 'react-error-boundary';
import { TodoPage } from './page';
import { ErrorHandler } from './components';

function App() {
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorHandler}
        onError={() => console.log('Error happened')}
      >
        <TodoPage />
      </ErrorBoundary>
    </>
  );
}

export default App;
