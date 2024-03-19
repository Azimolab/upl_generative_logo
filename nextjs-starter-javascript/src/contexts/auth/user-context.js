import { config } from '@/config';
import { AuthStrategy } from '@/lib/auth/strategy';

import { UserContext as FirebaseUserContext, UserProvider as FirebaseUserProvider } from './firebase/user-context';


// eslint-disable-next-line import/no-mutable-exports -- Export based on config
let UserProvider;

// eslint-disable-next-line import/no-mutable-exports -- Export based on config
let UserContext;


switch (config.auth.strategy) {
  case AuthStrategy.FIREBASE:
    console.log("Autenticação bem sucedida");
    UserContext = FirebaseUserContext;
    UserProvider = FirebaseUserProvider;
    break;
  default:
    throw new Error('Estratégia de validação inválida.');
}

export { UserProvider, UserContext };
