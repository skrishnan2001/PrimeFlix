import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './userStack';
import AuthStack from './authStack';
import { Loading } from './Loading';

export function Navigation() {
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }
  
  return user ? <UserStack /> : <AuthStack />;
}