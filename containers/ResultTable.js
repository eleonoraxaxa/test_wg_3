/**
 * Created by eleonora on 3/27/17.
 */
import React from 'react';

const playerProps = [
    { prop: 'name', comparator: null },
    { prop: 'battles_total', comparator: (player1, player2) => player1 - player2 },
    { prop: 'wins_total', comparator: (player1, player2) => player1 - player2 },
    { prop: 'days_total', comparator: (player1, player2) => player1 - player2 },
    { prop: 'rating', comparator: (player1, player2) => player1 - player2 },
    { prop: 'vehicles_x', comparator: (player1, player2) => player1 - player2 },
    { prop: 'exp_avg', comparator: (player1, player2) => player1 - player2 },
    { prop: 'exp_total', comparator: (player1, player2) => player1 - player2 }
];


const mapResult = (result, ifGt = 'comp-gt', ifLt = 'comp-lt', ifEq = 'comp-eq', def = '') => {
    if (result == null) {
        return def;
    }
    if (result > 0) {
        return ifGt;
    }

    if (result < 0) {
        return ifLt;
    }

    return ifEq;
}

const ResultTable = ({ player1, player2 }) => (
    <div className="container">
        <table className="players">
            <thead>
            <tr>
                <th>Property</th>
                <th>First player</th>
                <th>Second player</th>
            </tr>
            </thead>
            <tbody>
                {playerProps.map(({ prop, comparator }) => {
                    const result1 = comparator ? comparator(player1[prop], player2[prop]) : null;
                    const result2 = comparator ? comparator(player2[prop], player1[prop]) : null;

                    return (
                        <tr key={prop}>
                            <td>{prop}</td>
                            <td className={mapResult(result1)}>{player1[prop]}</td>
                            <td className={mapResult(result2)}>{player2[prop]}</td>
                        </tr>
                    );
                })}
            </tbody>

        </table>
    </div>
);

export default ResultTable;