import { FieldValues, useForm } from 'react-hook-form';
import { z } from '@/shared/lib/zod-validate';
import { FieldMessage } from '@/shared/ui';

import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

const loginFormSchema = z.object({
  email: z.string().min(1, 'Field is required'),
});

// type LoginForm = z.infer<typeof loginFormSchema>;

export function ForgotFormFeature() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: FieldValues) => console.log(data);

  function onInputHandler(name: string) {
    setTimeout(async () => {
      await trigger(name);
    }, 0);
  }

  return (
    <div className={cn(css['forgot-form'])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="email"
            size="lg"
            className={cn(css['login-form__input'])}
            {...register('email')}
            icon={
              <EnvelopeIcon
                className={cn(
                  'text-blue-gray-500 w-[22px] h-[22px]',
                  errors.email?.message ? 'text-red-500' : 'text-blue-gray-500'
                )}
              />
            }
            label="Email"
            crossOrigin="anonymous"
            error={!!errors.email?.message}
            onBlur={() => trigger('email')}
            onInput={() => onInputHandler('email')}
          />
          <FieldMessage errors={[errors.email?.message as string]} />
        </div>

        <Button
          disabled={!isValid}
          type="submit"
          className={cn(
            css['login-form__btn-send'],
            'bg-blue-600 capitalize w-full mt-1 text-[16px]'
          )}
        >
          Continue
        </Button>
      </form>
    </div>
  );
}
