import './skills.scss';
import Tooltip from '@material-ui/core/Tooltip';

export default function Skills() {

    return (
        <div className="skills" id="skills">

            <h1>Skills</h1>
            <div className="container">
                <div className="front">
                    <span className="title"> <h2>Frontend</h2> </span>
                    <Tooltip placement="top" title="HTML5" >
                        <img src="/assets/htmlicon.png" alt="htmlicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="CSS3 and Sass">
                        <img src="/assets/css.png" alt="cssicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="JavaScript">
                        <img src="/assets/jsicon.png" alt="jsicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="ReactJS">
                        <img src="/assets/react.png" alt="reacticon" />
                    </Tooltip>

                    <Tooltip placement="top" title="jQuery">
                        <img src="/assets/jquery.png" alt="jqueryicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="TypeScript">
                        <img src="/assets/ts.png" alt="tsicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="Bootstrap">
                        <img src="/assets/bootstrap.png" alt="bootstrapicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="MaterialUI">
                        <img src="/assets/mui.png" alt="muicons" />
                    </Tooltip>

                </div>

                <div className="back">
                    <span className="title"> <h2>Backend</h2> </span>

                    <Tooltip placement="left" title="NodeJS">
                        <img src="/assets/node.png" alt="nodeicon" />
                    </Tooltip>

                    <Tooltip placement="top" title="ExpressJS">
                        <p>ExpressJS</p>
                    </Tooltip>

                    <Tooltip placement="right" title="MongoDB">
                        <img src="/assets/mdb.png" alt="monicon" />
                    </Tooltip>
                </div>

                <div className="more">
                    <span className="title"> 
                        <h2>More</h2> 
                    </span>
                    <Tooltip placement="top" title="Git">
                        <img src="/assets/git.png" alt="giticon" />
                    </Tooltip>
                    <Tooltip placement="top" title="REST">
                        <img src="/assets/rest.png" alt="resticon" />
                    </Tooltip>
                   
                   <Tooltip placement="top" title="GraphQL">
                        <img src="/assets/graph.png" alt="graphicon" />
                   </Tooltip>

                   <Tooltip placement="top" title="Photoshop">
                        <img src="/assets/ps.png" alt="psicon" />
                   </Tooltip>

                   <Tooltip placement="top" title="npm">
                        <img src="/assets/npm.png" alt="npmicon" />
                   </Tooltip>

                   <Tooltip placement="top" title="VSCode">
                       <img src="/assets/vs.png" alt="vsicon" />
                   </Tooltip>

                   <Tooltip placement="top" title="Postman">
                         <img src="/assets/pm.png" alt="pmicon" />
                   </Tooltip>
                    
                </div>
            </div>
        </div>
    )
}
