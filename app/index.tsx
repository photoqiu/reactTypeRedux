import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader/root'
import RouteConfig from '@configs/router.config'

const HotRoutes = hot(RouteConfig)

ReactDOM.render( 
    <Provider>
        <HotRoutes / >
    </Provider>,
    document.getElementById('app')
)