import React from "react";
import "./banner1.css";

function MatchScore({ match }) {
    if (!match) return <p>No match data available.</p>;

    const formatOvers = (ballsPlayed) => {
        const overs = Math.floor(ballsPlayed / 6);
        const balls = ballsPlayed % 6;
        return `${overs}.${balls}`;
    };

    return (
        <>
            <div className="banner">
                <div className="runs">
                    <div className="info">
                        <div className="teamA">
                            <div className="team-name">{match.teams[0]}</div>
                            <div className="score">
                                {match.teamScoreboard[0].totalRunScored} - {match.teamScoreboard[0].wicketFall}
                            </div>
                            <div className="over-info score">over - {formatOvers(match.teamScoreboard[0].ballsPlayed)}</div>
                        </div>
                        <div id="live">LIVE</div>
                        <div className="teamB">
                            <div className="team-name">{match.teams[1]}</div>
                            <div className="score">
                                {match.teamScoreboard[1].totalRunScored} - {match.teamScoreboard[1].wicketFall}
                            </div>
                            <div className="over-info score">over - {formatOvers(match.teamScoreboard[1].ballsPlayed)}</div>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="balls">
                    <div className="bowlers">
                        <div className="curr_bowler" id="bowler">Bowler - {match.onStrikeBowler}</div>
                    </div>
                    <div className="batsman">
                        <div className="curr_bat">Batsman - {match.onStrikeBatsman}</div>
                    </div>
                </div>
            </div>      
        </>
    );
}

export default MatchScore;
