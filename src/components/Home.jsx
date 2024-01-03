import React from 'react'
import Hero from './Hero';
import Tranlation from './Translation/Translation';

export default function Home({auth, setAuth}) {

    return (
        <main className="main">
            <div className="app">
                <Hero auth={auth} setAuth={setAuth}/>
                <Tranlation />
            </div>
        </main>
    );
};

