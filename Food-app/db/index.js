import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('session.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS session (
                    id INTEGER PRIMARY KEY NOT NULL,
                    email TEXT NOT NULL,
                    localId TEXT NOT NULL,
                    token TEXT NOT NULL
                );`,
                [],
                () => {
                    resolve();
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    })

    return promise;
};

export const insertSession = ({
    email,
    localId,
    token
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO session (email, localId, token) VALUES (?, ?, ?);',
                [email, localId, token],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    })
    return promise;
};

export const getSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM session;',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    })

    return promise;
};

export const deleteSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DELETE FROM session;',
                [],
                (_, result) => {
                    resolve(result);
                },
                (_, err) => {
                    reject(err);
                }
            )
        })
    })
    return promise;
};