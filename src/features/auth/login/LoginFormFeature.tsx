import { type KeyboardEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z, zodRules } from '@/shared/lib/zod-validate';
import { navigationMap } from '@/shared/model';
import { FieldMessage } from '@/shared/ui';

import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

const loginFormSchema = z.object({
  email: z.string().min(1, 'Field is required'),
  password: z.string().min(8).pipe(zodRules.password),
  remember: z.boolean(),
});

// type LoginForm = z.infer<typeof loginFormSchema>;

export function LoginFormFeature() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    setFocus,
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });
  const [showPass, setShowPass] = useState(false);

  const onSubmit = (data: FieldValues) => console.log(data);

  const handleKeyUp = (
    event: KeyboardEvent<HTMLInputElement>,
    name: string
  ) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // предотвращаем выполнение действия по умолчанию
      setFocus(name);
    }
  };

  function onInputHandler(name: string) {
    setTimeout(async () => {
      await trigger(name);
    }, 0);
  }

  return (
    <div className={cn(css['login-form'])}>
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
            onKeyUp={(event) =>
              !errors.email?.message && handleKeyUp(event, 'password')
            }
            onInput={() => onInputHandler('email')}
          />
          <FieldMessage errors={[errors.email?.message as string]} />
        </div>

        <div>
          <div className="relative">
            <Input
              id="password"
              size="lg"
              {...register('password')}
              type={showPass ? 'text' : 'password'}
              className={cn(css['login-form__input'], 'pr-[36px]')}
              label="Password"
              crossOrigin="anonymous"
              error={!!errors.password?.message}
              onBlur={() => trigger('password')}
              onInput={() => onInputHandler('password')}
              onKeyUp={(event) =>
                !errors.password?.message && handleKeyUp(event, 'remember')
              }
            />
            <Button
              variant="text"
              size="sm"
              className="!absolute right-[8px] top-2 rounded-full p-1"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? (
                <EyeIcon
                  className={cn(
                    'text-blue-gray-500 w-[22px] h-[22px]',
                    errors.password?.message
                      ? 'text-red-500'
                      : 'text-blue-gray-500'
                  )}
                />
              ) : (
                <EyeSlashIcon
                  className={cn(
                    'text-blue-gray-500 w-[22px] h-[22px]',
                    errors.password?.message
                      ? 'text-red-500'
                      : 'text-blue-gray-500'
                  )}
                />
              )}
            </Button>
          </div>

          <FieldMessage errors={[errors.password?.message as string]} />
        </div>

        <div
          className={cn('flex flex-row justify-between items-center mt-[-5px]')}
        >
          <Checkbox
            id="remember"
            {...register('remember')}
            label={
              <Typography className="text-[14px] flex font-[500]">
                Remember me
              </Typography>
            }
            containerProps={{
              className: cn(
                'p-[7px]',
                errors.remember?.message
                  ? css['login-form__input-checkbox--error']
                  : ''
              ),
            }}
            crossOrigin="anonymous"
            onInput={() => onInputHandler('remember')}
            onBlur={() => ({})}
          />

          <Link
            to={navigationMap.forgotPassword}
            className="text-blue-600 font-semibold text-[14px]"
          >
            Forgot Password
          </Link>
        </div>

        <Button
          disabled={!isValid}
          type="submit"
          className={cn(
            css['login-form__btn-send'],
            'bg-blue-600 capitalize w-full mt-4 text-[16px]'
          )}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
