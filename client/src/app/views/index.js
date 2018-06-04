import React from 'react';

import Layout from './hoc/Layout';
import routes from '../routes';
import RouteList from '../views/components/RouteList';

import './index.scss';

const App = () => {
    return (
        <Layout>
            <RouteList routes={routes} />
        </Layout>
    );    
}

export default App