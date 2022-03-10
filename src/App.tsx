import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.less';
import Wrapper from 'components/Wrapper';
import Movie from 'pages/Movie';

function App(): JSX.Element {
    const routes = (
        <Switch>
            <Route exact path='/' component={Movie} />
            <Route path='' component={Movie} />
        </Switch>
    );
    return <Wrapper>{routes}</Wrapper>;
}

export default App;
