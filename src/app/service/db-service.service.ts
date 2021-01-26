import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private database: SQLiteObject;
  readonly db_name: string = "database.db";

  constructor(
    private sql: SQLite,
    private platform: Platform
  ) {
    this.platform.ready()
      .then(() => {
        this.createDB();
      })
      .catch((err) => {
        console.error(err);
      })

  }

  createDB() {
    this.sql.create({
      name: this.db_name,
      location: "default"
    }).then((db: SQLiteObject) => {
      this.database = db;
      console.log("Database Created");
    }).catch((e) => {
      console.error(e);
    })
  }

  createTable() {
    this.database.executeSql(`CREATE TABLE IF NOT EXISTS Application (
      ApplicationId INT PRIMARY KEY AUTOINCREMENT,
      Company VARCHAR(50) NOT NULL,
      Position VARCHAR(25) NOT NULL,
      Url VARCHAR(50) NOT NULL,
      Date DATE NOT NULL,
      Notes VARCHAR(MAX),
      StatusId INT NOT NULL,
      UsersId INT NOT NULL,
      DocumentsId INT NOT NULL,
      CONSTRAINT FK_Status_Application FOREIGN KEY (StatusId) REFERENCES Status(StatusId),
      CONSTRAINT FK_Users_Application FOREIGN KEY (UsersId) REFERENCES Users(UsersId),
      CONSTRAINT FK_Documents_Application FOREIGN KEY (DocumentsId) REFERENCES Documents(DocumentsId)
      )`);
    // this.database.executeSql(``)

  }
}
