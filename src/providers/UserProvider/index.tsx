import { createContext, useState } from 'react';
import { ILoginFormData } from '../../components/Form/LoginForm';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

// Contexto criado para lógicas relacionadas ao usuario (login, auto-login, etc...)

export interface IUserProviderProps {
  children: React.ReactNode;
}

export interface ICommerceUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  foodCategory: string;
  company: boolean;
}

export interface ILoginResponse {
  accessToken: string;
  user: ICommerceUser;
}

export interface IUserContext {
  login: (loginFormData: ILoginFormData) => Promise<void>;
  commerceUser: ICommerceUser | null;
  setCommerceUser: React.Dispatch<React.SetStateAction<ICommerceUser | null>>;
  loading: boolean;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [commerceUser, setCommerceUser] = useState<ICommerceUser | null>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // *Login*:
  const login = async (loginFormData: ILoginFormData) => {
    try {
      setLoading(true);
      const responseApi = await api
        .post<ILoginResponse>('/signin', loginFormData)
        .then((response) => {
          const { accessToken, user: userResponse } = response.data;

          api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

          localStorage.setItem('@TOKENCOMMERCE', accessToken);
          localStorage.setItem('@USERIDCOMMERCE', JSON.stringify(userResponse.id));

          setCommerceUser(userResponse);
          navigate('/companyHome');
        });

      return responseApi;
    } catch (error) {
      console.log(error); //substituir por toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{ login, commerceUser, setCommerceUser, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
