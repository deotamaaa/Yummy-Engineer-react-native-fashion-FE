import React, { useContext, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
import TextInput from '../../Authentication/components/Form/TextInput';
import { Box, Text } from '../../components/Theme';
import { Button } from '../../components';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const genders = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  address: string
}

const PersonalInfo = () => {
  const { user } = useContext(AuthContext);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      address: user.address
    },
  });

  const updateUser = async (data: FormData) => {
    const userId = user.id;
    const token = await AsyncStorage.getItem('userToken');
    await axios
      .put(`/users/${userId}`,
        data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        const userResponse = result.data;
        console.log(userResponse)
        return userResponse;
      });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box padding="m">
        <Text variant="body" marginBottom="m">
          Account Information
        </Text>
        <Box marginBottom="m">
          <Text variant="tagName">First Name</Text>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextInput
                icon="user"
                defaultValue={user.firstName}
                placeholder="First Name"
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>
        <Box marginBottom="m">
          <Text variant="tagName">Last Name</Text>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextInput
                icon="user"
                defaultValue={user.lastName}
                placeholder="Last Name"
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>
        <Box marginBottom="m">
          <Text variant="tagName">Email</Text>
          <Controller
            name="email"
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextInput
                icon="mail"
                placeholder="Email"
                defaultValue={user.email}
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>

        <Box marginBottom="m">
          <Text variant="tagName">Address</Text>
          <Controller
            name="address"
            control={control}
            rules={{ required: false }}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <TextInput
                icon="home"
                placeholder="Address"
                defaultValue={user.address}
                autoCapitalize="none"
                onChangeText={(value) => onChange(value)}
                onBlur={onBlur}
                value={value}
                error={error?.message}
              />
            )}
          />
        </Box>
        {/* <CheckboxGroup options={genders} radio /> */}
        <Box paddingVertical="m" alignItems="center">
          <Button
            variant="primary"
            label="Update Profile"
            onPress={handleSubmit(updateUser)}
            style={{ width: '100%' }}
          />
          <Button variant="transparent" onPress={() => alert('Deleted')}>
            <Text variant="body" color="danger">
              Delete Account
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default PersonalInfo;
