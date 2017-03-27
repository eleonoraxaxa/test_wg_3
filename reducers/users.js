/**
 * Created by eleonora on 3/27/17.
 */

const initialState = {
    "users": [
        {
            "id": 1,
            "name": "name_1",
            "battles_total": 3,
            "wins_total": 1,
            "days_total": 2,
            "vehicles_x": 0,
            "rating": 0.5,
            "exp_avg": 7,
            "exp_total": 14,
            "is_hidden": false,
            "created_at": "1.1.2017"
        },
        {
            "id": 2,
            "name": "name_2",
            "battles_total": 10,
            "wins_total": 8,
            "days_total": 16,
            "vehicles_x": 1,
            "rating": 0.5,
            "exp_avg": 10,
            "exp_total": 100,
            "is_hidden": false,
            "created_at": "3.1.2017"
        },
        {
            "id": 3,
            "name": "name_3",
            "battles_total": 10,
            "wins_total": 8,
            "days_total": 16,
            "vehicles_x": 1,
            "rating": 0.5,
            "exp_avg": 10,
            "exp_total": 100,
            "is_hidden": false,
            "created_at": "3.1.2017"
        },
        {
            "id": 4,
            "name": "name_4",
            "battles_total": 100,
            "wins_total": 52,
            "days_total": 573,
            "vehicles_x": 100,
            "rating": 1,
            "exp_avg": 160,
            "exp_total": 462,
            "is_hidden": false,
            "created_at": "3.1.2017"
        },
        {
            "id": 5,
            "name": "name_5",
            "battles_total": 74,
            "wins_total": 74,
            "days_total": 1,
            "vehicles_x": 1,
            "rating": 74,
            "exp_avg": 168,
            "exp_total": 168,
            "is_hidden": true,
            "created_at": "3.1.2017"
        },
        {
            "id": 6,
            "name": "name_6",
            "battles_total": 29,
            "wins_total": 8,
            "days_total": 4,
            "vehicles_x": 6,
            "rating": 2,
            "exp_avg": 64,
            "exp_total": 1860,
            "is_hidden": false,
            "created_at": "3.1.2017"
        },
        {
            "id": 7,
            "name": "name_7",
            "battles_total": 84,
            "wins_total": 39,
            "days_total": 10,
            "vehicles_x": 5,
            "rating": 3.9,
            "exp_avg": 743,
            "exp_total": 9834,
            "is_hidden": false,
            "created_at": "7.1.2017"
        },
        {
            "id": 8,
            "name": "name_8",
            "battles_total": 93,
            "wins_total": 47,
            "days_total": 10,
            "vehicles_x": 3,
            "rating": 4.7,
            "exp_avg": 83,
            "exp_total": 5362,
            "is_hidden": false,
            "created_at": "10.1.2017"
        },
        {
            "id": 9,
            "name": "name_9",
            "battles_total": 748,
            "wins_total": 285,
            "days_total": 100,
            "vehicles_x": 574,
            "rating": 2.85,
            "exp_avg": 943,
            "exp_total": 19474,
            "is_hidden": false,
            "created_at": "8.1.2017"
        },
        {
            "id": 10,
            "name": "name_10",
            "battles_total": 10,
            "wins_total": 8,
            "days_total": 16,
            "vehicles_x": 1,
            "rating": 0.5,
            "exp_avg": 10,
            "exp_total": 100,
            "is_hidden": true,
            "created_at": "3.1.2017"
        }
    ]
};
export default function users(state = initialState) {
    return state;
}