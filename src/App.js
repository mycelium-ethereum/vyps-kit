import React, { useEffect } from 'react'
import Content from './index.mdx'
import Prism from 'prismjs';


function App() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return (
        <div className="flex items-center justify-center">
            <div className="container p-8 max-w-prose">
                <code>Visualize your Protocol Security - Reputation</code>
                <article className="prose lg:prose-xl py-8">
                    <Content />
                </article>
                <div className="flex flex-row items-center">
                    <a className="pr-5 border-r-2" href="https://mycelium.ventures" target="_blank" rel="noreferrer">
                        <img className="m-0" src="/myc.png" alt="Mycelium Data" width={140}/>
                    </a>
                    <a href="https://reputation.link" target="_blank" rel="noreferrer">
                        <img className="m-0" src="/logo.png" alt="Powered by Reputation" width={200}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App
