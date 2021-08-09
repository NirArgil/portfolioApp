import './skills.scss';

export default function Skills() {

    return (
        <div className="skills" id="skills">

            <h1>Skills</h1>
            <div className="container">
                <div className="front">
                    <span className="title"> <h2>Frontend</h2> </span>
                    <div className="skillDiv">
                        <img src="/assets/htmlicon.png" alt="htmlicon" />
                        <p>HTML5</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/css.png" alt="cssicon" />
                        <p>CSS</p>
                        <p>and SCSS/Sass</p>                      
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/jsicon.png" alt="jsicon" />
                        <p>JavaScript</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/react.png" alt="reacticon" />
                        <p>React, </p>
                        <p>React Native, </p>
                        <p>Hooks, </p>
                        <p>Redux</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/jquery.png" alt="jqueryicon" />
                        <p>jQuery</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/ts.png" alt="tsicon" />
                        <p>TypeScript</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/bootstrap.png" alt="bootstrapicon" />
                        <p>Bootstrap</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/mui.png" alt="muicons" />
                        <p>MaterialUI</p>
                    </div>

                </div>

                <div className="back">
                    <span className="title"> <h2>Backend</h2> </span>

                    <div className="skillDiv">
                        <img src="/assets/node.png" alt="nodeicon" />
                        <p>NodeJS</p>
                        
                    </div>

                    <div className="skillDiv">
                        <p className="P">ExpressJS</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/mdb.png" alt="monicon" />
                        <p>MongoDB</p>
                    </div>
                </div>

                <div className="more">
                    <span className="title">
                        <h2>More</h2>
                    </span>
                    <div className="skillDiv">
                        <img src="/assets/git.png" alt="giticon" />
                        <p>Git Version Control</p>
                        <p>GitHub</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/rest.png" alt="resticon" />
                        <p>work with APIs</p>
                        <p>REST API</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/pm.png" alt="pmicon" />
                        <p>Postman</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/graph.png" alt="graphicon" />
                        <p>GraphQL</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/ps.png" alt="psicon" />
                        <p>Photoshop</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/npm.png" alt="npmicon" />
                        <p>NPM workflow</p>
                    </div>

                    <div className="skillDiv">
                        <img src="/assets/vs.png" alt="vsicon" />
                        <p>main IDE development by VS Code</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
