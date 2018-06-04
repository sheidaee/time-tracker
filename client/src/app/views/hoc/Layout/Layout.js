import React from 'react';

import Classes from './Layout.module.scss';

/**
 * Layout for components
 * 
 * @class Layout
 * @extends {React.Component}
 */
class Layout extends React.Component {        
    render() {
        return (
            <React.Fragment>                                
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
}

export default Layout