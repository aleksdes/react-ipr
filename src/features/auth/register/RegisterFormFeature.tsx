import { type KeyboardEvent, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { z, zodRules } from '@/shared/lib/zod-validate';
import { FieldMessage } from '@/shared/ui';

import {
  EnvelopeIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react';
import cn from 'classnames';

import css from './index.module.scss';

const registerFormSchema = z.object({
  name: z.string().min(1, 'Field is required'),
  email: z.string().min(1, 'Field is required'),
  password: z.string().min(8).pipe(zodRules.password),
  isTermsRulesService: z.boolean().refine(
    (val) => {
      return !!val;
    },
    {
      message: 'You must agree to the terms.',
    }
  ),
});

// type LoginForm = z.infer<typeof registerFormSchema>;

export function RegisterFormFeature() {
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isValid },
    setFocus,
  } = useForm({
    resolver: zodResolver(registerFormSchema),
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
    <div className={cn(css['register-form'])}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            id="name"
            size="lg"
            className={cn(css['register-form__input'])}
            {...register('name')}
            icon={
              <UserIcon
                className={cn(
                  'text-blue-gray-500 w-[22px] h-[22px]',
                  errors.name?.message ? 'text-red-500' : 'text-blue-gray-500'
                )}
              />
            }
            label="Username"
            crossOrigin="anonymous"
            error={!!errors.name?.message}
            onBlur={() => trigger('name')}
            onKeyUp={(event) =>
              !errors.name?.message && handleKeyUp(event, 'email')
            }
            onInput={() => onInputHandler('name')}
          />
          <FieldMessage errors={[errors.name?.message as string]} />
        </div>

        <div>
          <Input
            id="email"
            size="lg"
            className={cn(css['register-form__input'])}
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
            onKeyUp={(event) =>
              !errors.email?.message && handleKeyUp(event, 'password')
            }
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
              className={cn(css['register-form__input'], 'pr-[36px]')}
              label="Password"
              crossOrigin="anonymous"
              error={!!errors.password?.message}
              onBlur={() => trigger('password')}
              onInput={() => onInputHandler('password')}
              onKeyUp={(event) =>
                !errors.password?.message &&
                handleKeyUp(event, 'isTermsRulesService')
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

        <div className={cn('flex flex-col mt-[-5px]')}>
          <Checkbox
            id="isTermsRulesService"
            {...register('isTermsRulesService')}
            label={
              <Typography className="flex text-[14px] font-[500]">
                By creating an account means you agree to the{' '}
                <Typography
                  as="a"
                  href="#"
                  color="blue"
                  className="contents font-bold transition-colors hover:text-blue-700 text-[14px]"
                >
                  Terms & Conditions{' '}
                </Typography>
                and our{' '}
                <Typography
                  as="a"
                  href="#"
                  color="blue"
                  className="contents font-bold transition-colors hover:text-blue-700 text-[14px]"
                >
                  Privacy Policy
                </Typography>
              </Typography>
            }
            containerProps={{
              className: cn(
                'w-[60px] ',
                errors.isTermsRulesService?.message
                  ? css['register-form__input-checkbox--error']
                  : ''
              ),
            }}
            crossOrigin="anonymous"
            onBlur={() => ({})}
            onInput={() => onInputHandler('isTermsRulesService')}
          />
          <FieldMessage
            errors={[errors.isTermsRulesService?.message as string]}
          />
        </div>

        <Button
          disabled={!isValid}
          type="submit"
          className={cn(
            css['register-form__btn-send'],
            'bg-blue-600 capitalize w-full mt-4 text-[16px]'
          )}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
