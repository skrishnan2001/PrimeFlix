import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './userStack';
import AuthStack from './authStack';

export function Navigation() {
  const { user } = useAuth();

  return user ? <UserStack /> : <AuthStack />;
}