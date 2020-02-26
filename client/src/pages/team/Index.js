import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Index = () => {
    const [teams, setTeam] = useState([]);
    // get team member data from database
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('http://localhost:5050/api/team');
                setTeam(data);
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return (
        <section className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title section-title-padding text-center">
                            <h2>Our Team Member</h2>
                        </div>
                    </div>
                </div>
                <div className="row">

                    {teams.map((single_team) => (
                        <div className="col-lg-4 col-md-6" key={single_team.id}>
                            <div className="single-team-member">
                                <h3>{single_team.name}</h3>
                                <h4>{single_team.designation}</h4>
                                <div className="team-member-social">
                                    <ul>
                                        {single_team.memberSocial.map((single_social) => (
                                            <li>{single_social.social_name}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}
export default Index