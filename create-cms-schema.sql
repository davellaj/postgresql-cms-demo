-- DROP TABLE IF EXISTS post_tags, tags, posts, authors;

CREATE TABLE IF NOT EXISTS recipies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS steps (
    id SERIAL PRIMARY KEY,
    recipies_id INTEGER REFERENCES recipies,
    body TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS tags (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS recipies_tags (
    recipies_id INTEGER REFERENCES recipies,
    tag_id INTEGER REFERENCES tags,
    PRIMARY KEY (recipies_id, tag_id)
);
