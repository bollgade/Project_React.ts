import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

export const BugButton = () => {
  const text = 'Throw Error';
  const [error, setError] = useState(false);
  const onThrow = () => setError(true);
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button
      onClick={onThrow}
    >
      {text}
    </Button>
  );
};
