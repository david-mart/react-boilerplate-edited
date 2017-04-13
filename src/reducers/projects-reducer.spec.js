import {expect} from 'chai';
import {FETCH_PROJECTS_SUCCESS} from '../constants/action-types';
import reducer from './projects-reducer';

describe('Reducer - Projects', () => {
    const getInitState = () => {
        return { projects: [] };
    };

    const retrievedResponse = {
        "count": 1615,
        "next": "http://localhost:8000/api/project/?format=json&limit=50&offset=50",
        "previous": null,
        "results": [
            {
                "id": 21,
                "created": "2017-03-30T21:36:30.728514Z",
                "modified": "2017-03-30T21:36:30.728631Z",
                "name": "E ROANOKE ST",
                "description": "Fire Station #22",
                "start_date": "2016-03-01",
                "end_date": "2016-06-01",
                "type": 1,
                "agency": 1,
                "segments": []
            }
        ]
    };

    it('should set initial state by default', () => {
        const action = {
            type: 'UNKNOWN'
        };
        const expected = getInitState();
        const actual = reducer(getInitState(), action);

        expect(actual).deep.equals(expected);
    });

    it('should populate the projects list with response results data when the FETCH_PROJECTS_SUCCESS action is dispatched',
        () => {
            const action = {
                type: FETCH_PROJECTS_SUCCESS,
                payload: retrievedResponse
            };

            const expected = {
                projects: [
                    {
                        "id": 21,
                        "created": "2017-03-30T21:36:30.728514Z",
                        "modified": "2017-03-30T21:36:30.728631Z",
                        "name": "E ROANOKE ST",
                        "description": "Fire Station #22",
                        "start_date": "2016-03-01",
                        "end_date": "2016-06-01",
                        "type": 1,
                        "agency": 1,
                        "segments": []
                    }
                ]
            };

            const actual = reducer(getInitState(), action);
        
            expect(actual).deep.equals(expected);
        });
});