DROP DATABASE IF EXISTS GamersHeim_db;
CREATE DATABASE GamersHeim_db;

USE GamersHeim_db;

CREATE TABLE User (
    UserID INT NOT NULL AUTO_INCREMENT,
    UserName VARCHAR(255) NOT NULL,
    PasswordSalt VARCHAR(255),
    First_Name VARCHAR(255),
    Last_Name VARCHAR(255),
    PrimaryEmail VARCHAR(255),
    PRIMARY KEY (UserID),
    ON DELETE SET NULL
);

CREATE TABLE UserLibrary (
    LibraryID INT NOT NULL AUTO_INCREMENT,
    UserID INT NOT NULL,
    GameID INT NOT NULL,
    Owned BOOLEAN,
    Rented BOOLEAN,
    Wishlist BOOLEAN,
    Favourite BOOLEAN,
    PRIMARY KEY (LibraryID),
    FOREIGN KEY (UserID) REFERENCES User (UserID),
    FOREIGN KEY (GameID) REFERENCES Game (GameID),
    ON DELETE SET NULL
);

CREATE TABLE Game (
    GameID INT NOT NULL AUTO_INCREMENT,
    Title VARCHAR(255),
    GameDesc VARCHAR(255),
    CoverImage VARCHAR(255),
    Trailer VARCHAR(255),
    Genres VARCHAR(255),
    Features VARCHAR(255),
    Publisher VARCHAR(255),
    PlatformID INT,
    ReleaseDate DATE,
    PRIMARY KEY (GameID),
    FOREIGN KEY (PlatformID) REFERENCES Platform (PlatformID),
    ON DELETE SET NULL
);
		
CREATE TABLE Platform (
    PlatformID INT NOT NULL AUTO_INCREMENT,
    Platform VARCHAR(255),
    PRIMARY KEY (PlatformID),
    ON DELETE SET NULL
);