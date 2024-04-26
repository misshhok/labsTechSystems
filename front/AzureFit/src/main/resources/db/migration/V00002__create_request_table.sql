CREATE TABLE requests
(
    id                BIGSERIAL PRIMARY KEY,
    name              VARCHAR(255) NOT NULL,
    surname           VARCHAR(255) NOT NULL,
    patronymic        VARCHAR(255),
    phone_number      VARCHAR(255) NOT NULL,
    trainer_id        BIGINT REFERENCES trainers (id),
    subscription_id   BIGINT REFERENCES subscriptions (id)
);