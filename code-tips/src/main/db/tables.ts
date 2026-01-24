import { db } from './connect'
import { Random } from 'mockjs'

db.exec(
  `
      create table if not exists  categories (
        id integer primary key autoincrement not null,
        name text not null,
        create_at text not null
      )
    `
)

db.exec(
  `
      create table if not exists contents (
       id integer primary key autoincrement not null,
       title text not null,
       content text not null,
       category_id integer,
       create_at text not null
      )
    `
)

// for (let i = 0; i < 10; i++) {
//   const name = Random.title(5, 20)
//   db.exec(
//     `
//         insert into categories (name, create_at)
//         values ('${name}', dateTime())
//       `
//   )
// }
