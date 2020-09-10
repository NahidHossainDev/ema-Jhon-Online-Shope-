import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { ContextElement } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [userLogIn, setUserLogin] = useContext(ContextElement)

    return (
      <Route
        {...rest}
        render={({ location }) =>
          userLogIn.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    );
};

export default PrivateRoute;