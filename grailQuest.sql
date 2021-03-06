CREATE DATABASE grailQuest_db;
USE grailQuest_db;

-- the key is the user_name which is an email address
drop table users;


CREATE TABLE users (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(50) NOT NULL,
password VARCHAR(100) NOT NULL,
created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
last_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE characters (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(60) NOT NULL,
char_name VARCHAR(60) NOT NULL,
char_level INT NOT NULL,
char_isAlive BOOLEAN NOT NULL,
exp INT NOT NULL,
max_hp INT NOT NULL,
cur_hp INT NOT NULL,
attack INT NOT NULL,
damage INT NOT NULL,
armor INT NOT NULL,
readied_weapon VARCHAR(100) NOT NULL,
readied_armor VARCHAR(100) NOT NULL,
healing_potions INT NOT NULL,
money INT NOT NULL,
current_turn INT NOT NULL,
pilgrimages INT NOT NULL,
defeated_foes INT NOT NULL,
duels_won INT NOT NULL,
duels_lost INT NOT NULL,
rebellion_level INT NOT NULL,
rumors INT NOT NULL,
dishonor BOOLEAN,
created_on DATETIME DEFAULT CURRENT_TIMESTAMP,
last_modified DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE equipment (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(60) NOT NULL,
char_name VARCHAR(60) NOT NULL,
item_name VARCHAR(100) NOT NULL,
item_type VARCHAR(50) NOT NULL
);

CREATE TABLE adventure_log (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_name VARCHAR(60) NOT NULL,
char_name VARCHAR(60) NOT NULL,
game_turn INT NOT NULL,
log_event TEXT NOT NULL
);