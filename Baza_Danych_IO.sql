BEGIN;

DROP TABLE IF EXISTS Tasks_History;
DROP TABLE IF EXISTS Current_Tasks;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Trucks;

SELECT 'CREATING DATABASE STRUCTURE' as 'INFO';

CREATE TABLE Trucks (
	TruckID VARCHAR(10) PRIMARY KEY,
	Truck_Model VARCHAR(40) NOT NULL,
	Mass INTEGER NOT NULL,
	Width INTEGER NOT NULL,
	Height INTEGER NOT NULL,
	Fuel_Tank INTEGER NOT NULL,
	Average_Fuel_Consumption INTEGER NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Users (
	UserID VARCHAR(50) PRIMARY KEY,
	Is_Employer BOOLEAN,
	Password VARCHAR(50) NOT NULL,
  	Name VARCHAR(30) NOT NULL,
  	Surname VARCHAR(30) NOT NULL,
  	Estimated_Location VARCHAR(40),
  	Avalible_For_Task BOOLEAN,
	TruckID VARCHAR(10),
	User_Token VARCHAR(20) NOT NULL,
	FOREIGN KEY (TruckID) REFERENCES Trucks(TruckID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Current_Tasks (
	TaskID VARCHAR(10),
	UserID VARCHAR(10),
	Map_Point_Name VARCHAR(100) NOT NULL,
	Start_Date DATE NOT NULL,
	Is_Cargo_Collection_Point BOOLEAN NOT NULL,
	Load_Mass INTEGER default NULL,
	In_Progress BOOLEAN DEFAULT NULL,
	FOREIGN KEY (UserID) REFERENCES Users(UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE Tasks_History (
	TaskID VARCHAR(10) PRIMARY KEY,
  	UserID VARCHAR(10) NOT NULL,
  	Map_Points VARCHAR(200) NOT NULL,
  	Start_Date DATE NOT NULL,
  	End_Date DATE NOT NULL,
	FOREIGN KEY (UserID) REFERENCES Users(UserID)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

COMMIT;
