import React, { Component } from 'react';

import Layout from './hoc/Layout';
import routes from '../routes';
import RouteList from '../views/components/RouteList';

import './index.scss';

class App extends Component {
    componentDidMount() {       
    }
    
    render() {
        return (
            <Layout>
                <RouteList routes={routes} />
            </Layout>
        );
    }
}

export default App