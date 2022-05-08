import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Linking } from 'react-native';
import { Button, Container, Text } from '../../components';
import { AuthNavigationProps } from '../../components/Navigation';
import Footer from '../components/Footer';
import * as Yup from 'yup';
import { Box } from '../../components/Theme';
import TextInput from '../components/Form/TextInput';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
});

interface FormData {
  email: string;
}

const ForgotPassword = ({
  navigation,
}: AuthNavigationProps<'ForgotPassword'>) => {
  const footer = (
    <Footer
      title="Don't work?"
      action="Try another way"
      onPress={() => Linking.openURL('https://www.google.com')}
    />
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
    resolver: yupResolver(ForgotPasswordSchema),
  });
  const onSubmit = () => navigation.navigate('ChangedPasswordSuccess');

  return (
    <>
      <Container pattern={2} {...{ footer }}>
        <Box padding="xl" justifyContent="center" flex={1}>
          <Text variant="title1" textAlign="center" marginBottom="s">
            Forgot Password
          </Text>
          <Text variant="body" textAlign="center" marginBottom="l">
            Enter your email to continue.
          </Text>

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            name="email"
            render={({
              field: { onChange, onBlur, value },
              fieldState: { isTouched, error },
            }) => (
              <TextInput
                placeholder="Example@email.com"
                icon="mail"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
                touched={isTouched}
                autoCapitalize="none"
              />
            )}
          />
          {errors.email && <Text color="danger">{errors.email?.message}</Text>}

          <Box alignItems="center" marginTop="m">
            <Button
              variant="primary"
              label="Reset Password"
              onPress={handleSubmit(onSubmit)}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;
