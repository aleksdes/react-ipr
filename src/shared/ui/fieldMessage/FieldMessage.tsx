import { useEffect, useState } from 'react';

import { Typography } from '@material-tailwind/react';
import cn from 'classnames';

import { FieldMessageProps } from './field-message';
import css from './index.module.scss';

export function FieldMessage({
  errors,
  messages,
  mergedMessages = false,
  mergedError = false,
}: FieldMessageProps) {
  const [error, setError] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    if (!errors) return setError('');
    if (mergedError) return setError(errors.join(', '));
    return setError(errors[0]);
  }, [errors]);

  useEffect(() => {
    if (!messages) return setMessage('');
    if (mergedMessages) return setMessage(messages.join(', '));
    return setMessage(messages[0]);
  }, [messages]);

  return (
    <div
      className={cn(
        css['field-messages'],
        error ? css['field-messages--errors'] : ''
      )}
    >
      {(error || message) && (
        <Typography className={cn(css['field-messages__text'])}>
          {error || message}
        </Typography>
      )}
    </div>
  );
}
