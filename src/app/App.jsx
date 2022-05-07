import React, { useState } from 'react';
import { SvgAssets, Topbar, Loading, ErrorContainer, OperationBlock } from './components';

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [desc, setDesc] = useState(null);

    const getDescription = (url) => {
        setError(null);
        setDesc(null);
        setLoading(true);
        fetch(url)
            .then((res) => {
                if (res.status != 200) {
                    setError({
                        name: `Fetch error`,
                        message: `response status is ${res.status} ${url}`
                    });
                }
                else return res.json();
            })
            .then((json) => {
                let grupos = {};
                Object.entries(json.paths).forEach(([path, methods]) => {
                    Object.entries(methods).forEach(([method, desc]) => {
                        desc.tags.forEach((tag) => {
                            if (!grupos[tag]) grupos[tag] = [];
                            grupos[tag] = [...grupos[tag], { method, path, desc }];
                        });
                    });
                });
                setDesc({ ...json, paths: grupos });
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <div id="swagger-ui">
            <section className="swagger-ui swagger-container">
            <SvgAssets />
                <Topbar onExplore={(url) => getDescription(url)} />
                {loading && <Loading />}
                {error && <ErrorContainer errors={[error]}/>}
                {desc && (
                    <div className="swagger-ui">
                        <div>
                            <div className="information-container wrapper">
                                <section className="block col-12">
                                    <div>
                                        <div className="info">
                                            <hgroup className="main">
                                                <h2 className="title">
                                                    {desc.info.title}
                                                    <small>
                                                        <pre className="version">{desc.info.version}</pre>
                                                    </small>
                                                </h2>
                                                <pre className="base-url">[ Base URL: {desc.host}{desc.basePath} ]</pre>
                                            </hgroup>
                                            {/*<div className="description"></div>*/}
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div></div>
                            <div className="wrapper">
                                <section className="block col-12 block-desktop col-12-desktop">
                                    <div>
                                        {Object.entries(desc.paths).map(([path, routes], id) => (
                                            <OperationBlock key={id} path={path} routes={routes}/>
                                        ))} 
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}

export default App;
