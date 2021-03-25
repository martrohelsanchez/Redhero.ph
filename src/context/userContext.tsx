import React from 'react';

import { User } from '../types/User';

export const UserContext = React.createContext<User | null>(null);
