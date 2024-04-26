CREATE TABLE trainers
(
    id              BIGSERIAL PRIMARY KEY,
    name            VARCHAR(255) NOT NULL,
    surname         VARCHAR(255) NOT NULL,
    price_per_visit REAL NOT NULL,
    link_to_photo   TEXT,
    age             INTEGER NOT NULL,
    about           TEXT NOT NULL

);


CREATE TABLE subscriptions
(
    id                BIGSERIAL PRIMARY KEY,
    title             VARCHAR(255) NOT NULL,
    short_description VARCHAR(255) NOT NULL,
    description       TEXT,
    price             REAL         NOT NULL,
    count_of_visits   INTEGER      NOT NULL,
    trainer_id        BIGINT REFERENCES trainers (id)
);

