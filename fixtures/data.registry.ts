
export interface Data {
    username: string;
    password: string;
    expectedResult: string;
}

export const orangehrmData: Data[] = [
    {
        username: 'Admin',
        password: 'admin123',
        expectedResult: 'success'
    },
    {
        username: 'Admin12',
        password: 'admin1234',
        expectedResult: 'failure'
    },

]

