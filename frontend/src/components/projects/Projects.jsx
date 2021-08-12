import { useEffect, useState } from 'react';
import ProjectsList from '../projectsList/ProjectsList.jsx';
import './projects.scss';

import {
    // featuredPortfolio,
    webAppsPortfolio,
    // mobilePortfolio,
    websitesPortfolio,
    // contentPortfolio,
} from "../../data.js";

export default function Projects() {
    const [selected, setSelected] = useState("webapps");
    const [data, setData] = useState([]);

    const list = [
        // {
        //     id: 'featured',
        //     title: 'Featured'
        // },

        {
            id: 'webapps',
            title: 'Web Apps'
        },

        {
            id: 'websites',
            title: 'Websites'
        },


        // {
        //     id: 'mobile',
        //     title: 'Mobile App'
        // },

        // {
        //     id: 'content',
        //     title: 'Content'
        // },

    ];

    useEffect(() => {
        switch (selected) {
            // case "featured":
            //     setData(featuredPortfolio);
            //     break;
            case "webapps":
                setData(webAppsPortfolio);
                break;
            // case "mobile":
            //     setData(mobilePortfolio);
            //     break;
            case "websites":
                setData(websitesPortfolio);
                break;
            // case "content":
            //     setData(contentPortfolio);
            //     break;

            default:
                setData(webAppsPortfolio);
        }
    }, [selected]);

    return (
        <div className="projects" id="projects">
            <h1>Projects</h1>
            <ul>
                {list.map((item) => (
                    <ProjectsList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}

            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item">
                        {/* <img className="Pimg"
                            src={d.img}
                            alt=""
                        /> */}

                        <video playsInline autoPlay loop muted>
                            <source type="video/webm" src={d.img} />
                            {/* <img src="/assets/ps.png" alt="asd" /> */}
                        </video>

                        <div className="des">
                            <h3>{d.title}</h3>
                            <a className="live" href={d.site} target="_blank" rel="noopener noreferrer">Live Version</a>
                            <a href={d.github} target="_blank" rel="noopener noreferrer">Source Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
