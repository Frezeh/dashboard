import { createContext, useCallback, useState } from "react";
import {
  SortProps,
  UserActions,
  Users,
  UsersProviderProps,
  UserState,
} from "../types";
import { parseStatusToData } from "../utils/parseStatus";
import { getItem, saveItem } from "../utils/storage";

const baseUrl = "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";

export const UsersContext = createContext<UserState>({} as UserState);

export const UsersActionsContext = createContext<UserActions>(
  {} as UserActions
);

export function UsersProvider({ children }: UsersProviderProps) {
  const [users, setUsers] = useState<Users[]>(getItem<Users[]>("users") || []);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(getItem<boolean>("isAuthenticated") || false);

  const saveUser = (user: Users[]) => {
    setUsers([...user]);
    saveItem<Users[]>("users", user);
  };

  /**
   * Handle login
   */
  const loginUser = () => {
    saveItem<boolean>("isAuthenticated", true);
    setIsAuthenticated(true);
  };

  /**
   * Handle populating users data state
   */
  const loadUserData = async () => {
    // After loading the url is storage is empty,
    // parse the status and populate to the user data
    // finally save the data to local storage

    if (users.length === 0) {
      const data = await fetch(baseUrl + "/users");
      const responseJson = await data.json();
      const dataWithStatus = parseStatusToData(responseJson);
      setUsers(dataWithStatus);
      saveItem<Users[]>("users", dataWithStatus);
    }
  };

  /**
   * Handle blacklisting user
   */
  const blacklistUser = useCallback((id: string) => {
      // Filter the user data and update status
      // After making the required updates,
      // call saveUser on the mutated reference
      let newUserData = users;

      for (const data of newUserData) {
        if (data.id === id) {
          data.status = "Blacklisted";
        }
      }

      saveUser(newUserData);
    },[users]);

  /**
   * Handle activating user
   */
  const activateUser = useCallback((id: string) => {
      // Filter the user data and update status
      // After making the required updates,
      // call saveUser on the mutated reference
      let newUserData = users;

      for (const data of newUserData) {
        if (data.id === id) {
          data.status = "Active";
        }
      }

      saveUser(newUserData);
    },[users]);

    /**
     * Handle sorting user
     */
  const sortUser = useCallback((filter: SortProps) => {
      // Sort the user data by the parameters given
      // After making the required updates,
      // call setUsers on the mutated reference
      let newUserData = users;

      newUserData = newUserData.filter((item) => {
        for (let key in filter) {
          if (
            item[key as keyof typeof filter] === undefined ||
            item[key as keyof typeof filter] !=
              filter[key as keyof typeof filter]
          ) {
            return false;
          }
        }
        return true;
      });

      setUsers(newUserData);
    },[]);

  return (
    <UsersActionsContext.Provider
      value={{ loadUserData, blacklistUser, activateUser, loginUser, sortUser }}
    >
      <UsersContext.Provider value={{ users, isAuthenticated }}>
        {children}
      </UsersContext.Provider>
    </UsersActionsContext.Provider>
  );
}
